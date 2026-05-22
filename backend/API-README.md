Para disponibilizar uma **API REST segura, robusta e escalável** para que terceiros consultem as atividades do seu banco de dados MariaDB, a melhor prática no Express é estruturar a solução com:
1. **Autenticação por API Key** (para controle de acesso e segurança).
2. **Rotas dedicadas** (com versionamento, ex: `/api/v1/atividades`).
3. **Filtros e Paginação** (essenciais para APIs consumidas por terceiros).
4. **Tratamento de erros padronizado em JSON**.

Aqui está um passo a passo prático de como implementar essa arquitetura no seu projeto existente:

---

### 1. Criar o Middleware de Autenticação (`auth.js`)
Para evitar que qualquer pessoa acesse seus dados sem permissão, vamos usar o arquivo `backend/middlewares/auth.js` (que atualmente está vazio) para validar uma chave de API (`X-API-Key`) enviada no cabeçalho da requisição.

Escreva o seguinte código em `backend/middlewares/auth.js`:

```javascript
// backend/middlewares/auth.js

module.exports = function verifyApiKey(req, res, next) {
  // Obtém a API Key do cabeçalho da requisição
  const apiKey = req.header('X-API-Key');
  
  // Em produção, você pode definir isso em um arquivo .env
  const validApiKey = process.env.API_KEY_TERCEIROS || 'chave-secreta-projeto-integrador';
  
  if (!apiKey || apiKey !== validApiKey) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Acesso negado. Chave de API (X-API-Key) inválida ou ausente.'
    });
  }
  
  next(); // Chave válida, prossegue para a rota
};
```

---

### 2. Criar o Controller com Paginação e Filtros
Criar filtros dinâmicos e paginação protege o seu banco de dados contra sobrecargas (evitando que um terceiro puxe milhares de registros de uma vez).

Crie o arquivo `backend/controllers/apiController.js` (ou use seu arquivo de controllers existente) com a lógica abaixo:

```javascript
// backend/controllers/apiController.js
const pool = require('../config/db');

exports.getAtividadesExterna = async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();

    // 1. Paginação (valores padrão se não fornecidos)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    // 2. Filtros via Query Parameters
    const { turno, modalidade, nivel, local } = req.query;

    // 3. Query base com Joins
    let sql = `
      SELECT 
        a.id, 
        m.nome AS modalidade, 
        n.nome AS nivel, 
        a.local,
        a.analista,
        a.horario, 
        a.turno,
        a.idade,
        a.dias_semana,
        a.disponivel_em
      FROM atividades AS a
      LEFT JOIN modalidades AS m ON a.modalidade_id = m.id
      LEFT JOIN niveis AS n ON a.nivel_id = n.id
      WHERE 1=1
    `;
    
    const params = [];

    // Construção dinâmica de filtros seguros (prevenindo SQL Injection)
    if (turno) {
      sql += ` AND a.turno = ?`;
      params.push(turno.toUpperCase());
    }
    if (modalidade) {
      sql += ` AND m.nome LIKE ?`;
      params.push(`%${modalidade}%`);
    }
    if (nivel) {
      sql += ` AND n.nome LIKE ?`;
      params.push(`%${nivel}%`);
    }
    if (local) {
      sql += ` AND a.local LIKE ?`;
      params.push(`%${local}%`);
    }

    // Query para contar o total de itens para metadados da paginação
    let countSql = `
      SELECT COUNT(*) AS total
      FROM atividades AS a
      LEFT JOIN modalidades AS m ON a.modalidade_id = m.id
      LEFT JOIN niveis AS n ON a.nivel_id = n.id
      WHERE 1=1
    `;
    const countParams = [...params]; // Copia os mesmos filtros

    // Adiciona paginação ao SQL principal
    sql += ` LIMIT ? OFFSET ?`;
    params.push(limit, offset);

    // Executa as queries em paralelo
    const [rows, countResult] = await Promise.all([
      connection.query(sql, params),
      connection.query(countSql, countParams)
    ]);

    const totalItems = Number(countResult[0].total);
    const totalPages = Math.ceil(totalItems / limit);

    // Envia a resposta padronizada
    res.json({
      success: true,
      data: rows,
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit
      }
    });

  } catch (err) {
    console.error('Erro na API Externa:', err);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Erro ao processar a consulta de atividades.'
    });
  } finally {
    if (connection) connection.release(); // Sempre libera a conexão
  }
};
```

---

### 3. Configurar a Rota no Express
Agora, criamos um arquivo de rotas específico para terceiros. 

Crie o arquivo `backend/routes/api.js`:

```javascript
// backend/routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const verifyApiKey = require('../middlewares/auth');

// Rota de consulta com autenticação obrigatória
router.get('/atividades', verifyApiKey, apiController.getAtividadesExterna);

module.exports = router;
```

---

### 4. Registrar a Rota Principal em `backend/app.js`
Abra o seu arquivo `backend/app.js` e adicione a nova rota versionada (boa prática para APIs REST):

```javascript
// Adicione a importação da rota no topo do backend/app.js
var apiRouter = require('./routes/api');

// ... outros middlewares e rotas ...

// Registre a rota com o prefixo '/api/v1'
app.use('/api/v1', apiRouter);
```

---

### Como Terceiros Consumirão a Sua API?

Depois de subir o servidor, a outra empresa ou sistema poderá realizar requisições passando o cabeçalho `X-API-Key`.

#### Exemplo usando `cURL` (Terminal):
```bash
curl -H "X-API-Key: chave-secreta-projeto-integrador" \
     "http://localhost:3000/api/v1/atividades?page=1&limit=5&turno=MATUTINO"
```

#### Exemplo em JavaScript (`fetch`):
```javascript
fetch('http://localhost:3000/api/v1/atividades?turno=VESPERTINO&modalidade=Voleibol', {
  method: 'GET',
  headers: {
    'X-API-Key': 'chave-secreta-projeto-integrador',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(result => {
  if (result.success) {
    console.log('Atividades obtidas:', result.data);
    console.log('Metadados de paginação:', result.pagination);
  } else {
    console.error('Erro na API:', result.message);
  }
})
.catch(err => console.error('Erro de rede:', err));
```

### Resumo do que foi feito
- Investigamos a estrutura do projeto Express com banco de dados MariaDB.
- Analisamos a modelagem das tabelas `atividades`, `modalidades` e `niveis`.
- Projetamos uma arquitetura limpa de API REST, abordando autenticação via middleware (`X-API-Key`), controladores desacoplados, queries dinâmicas protegidas contra SQL injection, e suporte a paginação e filtros de busca.

---
## Chave da API:
- `doHcKoFNSXBQSH5YuGKRll13Y4U9Ypm9lXbkXwYsuPPnT2tn9MBhi0TsWsAumIun`