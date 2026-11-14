# Índice
[TOC]
---
- # Hospedagem
	- ## Plataforma: Akamai (Linode)
	- ## Criação e Configuração da Máquina Virtual [⚠️TODO⚠️]
	*Inserir imagens do console da Linode para parte escrita do trabalho*
	- ### Criação e Configuração de Rede e Sub-rede [⚠️TODO⚠️]
	- ### Criação da Máquina Virtual [⚠️TODO⚠️]
	- ## Informações da instância da Máquina Virtual
		- IP Público: `203.0.113.1` (Exemplo)
		- Sistema Operacional: Debian 13
		- Acesso SSH via key-file
		- Usuário padrão: `root`
		- Usuários criados:
			- `deploy_user`
		- Senha do usuário `root` do `mariadb`: `<SUA_SENHA_ROOT_SEGURA>`
	- ## Configuração de acesso HTTP
		- ### Configurações na Plataforma Linode [⚠️TODO⚠️]
			- 1. 
	- ## Configuração de acesso HTTPS
		Para conseguir configurar o acesso via HTTPS é necessário possuir um domínio registrado.
		- ### Configurações na Plataforma Linode [⚠️TODO⚠️]
			- 1. 
  		- ### Máquina Virtual - Debian 13
			 - #### Obtenha um Certificado SSL do Let's Encrypt
				- **Let's Encrypt Certbot**: provê certificados grátis e auto renováveis.
					```bash
					sudo apt update
					sudo apt install certbot python3-certbot-nginx
					sudo certbot --nginx -d your_domain.com -d www.your_domain.com
					```
				- Siga os prompts interativos para completar a emissão do certificado e a configuração do Nginx. O Certbot irá modificar automaticamente a sua configuração do Nginx para incluir as diretivas SSL necessárias e configurar as renovações automáticas.
			- #### Teste e Aplicação das Configurações
				```bash
				sudo nginx -t
				sudo systemctl restart nginx
				```
	- ## Domínio
		- Plataforma utilizada para gerenciamento: [ClouDNS](https://www.cloudns.net)
		- Domínio: **centrocultural.exemplo.com**
		- Endereço do site do projeto: **atividades.centrocultural.exemplo.com**
		- A associação entre o IP público da máquina virtual e o domínio é realizado na plataforma da ClouDNS
---
# Deploy do Projeto
---
- ## 1. Preparação da Máquina Virtual (VM ou Virtual Machine)
	- ### 1.1 Atualização do sistema
	```bash
		sudo apt update && sudo apt -y full-upgrade && sudo apt -y dist-upgrade && sudo apt -y autoremove && sudo apt -y autoclean
	```
	- ### 1.2 Configuração dos usuários:
		- Criação de usuário(s):
			`sudo adduser <username>`
		- Adicionar usuário ao grupo `sudoers`:
			`sudo usermod -aG sudo <username>`
		- Outras operações relevantes:
			- Listar todos os usuários, filtrando as contas de sistema e serviços:
				`grep -E '/bin/(bash|sh)$' /etc/passwd`
			- Redefinição da senha de usuário:
				`sudo passwd <username>`
			- Desabilitar login como `root`:
				- Acesso local (não aplicável à máquinas virtuais remotas, como no nosso caso)
					`sudo passwd -l root`
				- Desabilitar acesso `root` via SSH
					- Procure ou insira no arquivo de configuração do SSH (`/etc/ssh/sshd_config`) o seguinte parâmetro:
						`PermitRootLogin no`
					- Reinicie o serviço do SSH:
						```bash
						sudo systemctl restart ssh
						```
	- ### 1.3 Instalação dos pacotes necessários para o projeto
		- `MariaDB`: SGBD para o banco de dados MySQL
		- `Node.js`: para o backend
		- `NPM`: gerenciador de pacotes do Node.js
		- `Nginx`: para servir o frontend da aplicação
		- `PM2`: para manter o processo do backend rodando
		- Comandos:
			```bash
			sudo apt install mariadb-server nodejs npm nginx
			sudo npm install -g pm2
			```
---
- ## 2. Configuração do Banco de Dados
	- ### 2.1. Configurações de segurança do MariaDB
		Isso irá tornar a instalação do MariaDB mais segura ao adicionar uma senha à conta `root`, remover acesso a usuários anônimos, etc.
		Use o comando:
		```bash
		sudo mariadb-secure-installation
		```
		Será feita uma série de perguntas. Geralmente é seguro responder sim ("Y") para todas elas.
	- ### 2.2. Criação do Banco de Dados e Usuário(s)
		- Autentique-se com o usuário `root` no  MariaDB, utilizando a senha configurada no passo anterior:
			```bash
			sudo mariadb -u root -p
			```
		- Crie o banco de dados:
			```sql
			CREATE DATABASE centro_cultural_db;
			```
		- Crie o novo usuário e conceda os privilégios necessários:
			```sql
			CREATE USER 'projeto'@'localhost' IDENTIFIED BY '<SUA_SENHA_BANCO>';
			GRANT ALL PRIVILEGES ON centro_cultural_db.* TO 'projeto'@'localhost';
			FLUSH PRIVILEGES;
			```
		- Saia do MariaDB
			```sql
			EXIT;
			```
		- Rode o script do banco de dados:
			```bash
			sudo mariadb -u projeto -p centro_cultural_db < projeto_db.sql
			```
		- Autentique-se novamente com o usuário `projeto` e visualize as tabelas
			```bash
			sudo mariadb -u projeto -p centro_cultural_db
			```
			```sql
			SHOW TABLES;
			```
		- Para verificar os registros execute:
			```sql
			SELECT * FROM nome_da_tabela;
			```
- ## 3. Configuração do Backend
	- ### 3.1. Copie para o servidor a pasta `/server` do projeto
		Local sugerido: `/var/www/my-app/server`
	- ### 3.2. Instale as dependências
		- Vá até a pasta `/server` no servidor, e execute:
			``` bash
			sudo npm install
			```
	- ### 3.3. Inicie o Backend com o `PM2`
		- A partir do diretório `/server`, execute:
			```bash
			sudo pm2 start index.js --name my-app-backend
			```
		Isso fará com que o backend rode de funfo e reinicie automaticamente em caso de falhas.
- ## 4. Configuração do Frontend
	- ###  4.1. Crie uma build do Frontend pronta para produção
		- Navegue até à pasta `/client` no projeto, e execute os comandos:
			```bash
			npm install
			npm run build
			```
	- ### 4.2. Copie a pasta `/client/build` para o servidor
		- Uma boa localização é a raiz web que o Nginx servirá, e.g., `/var/www/my-app/html`
- ## 5. Configuração do Nginx
	Nginx serve o frontend e roteia as requisições de API para o backend.
	- ### 5.1. Crie um arquivo de configuração do Nginx
		- Local: `/etc/nginx/sites-available/my-app`
		- Conteúdo:
			```
			server {
				listen 80;
				# Substitua pelo seu domínio ou endereço de IP
				server_name <your-domain.com>;

				root /var/www/my-app/html;
				index index.html;

				location / {
					try_files $uri /index.html;
				}

				location /api/ {
					# Assumindo que o seu backend esteja acessível através da porta 8080
					proxy_pass http://localhost:8080/;
				}
			}
			```
			* Obs.: Essa configuração é para acesso HTTP, para acesso via HTTPS é necessário seguir os passos descritos na seção ["Configuração de acesso HTTPS"](#configuração-de-acesso-https).
	- ### 5.2. Habilite a Configuração
		- Crie um link simbólico do arquivo de configuração criado para o diretório `/etc/nginx/sites-enabled`
			```bash
			sudo ln -s /etc/nginx/sites-available/my-app /etc/nginx/sites-enabled/my-app
			```
	- ### 5.3. Teste o Arquivo de Configuração
		- Teste o arquivo de configuração para verificar erros de sintaxe com o comando:
		```bash
		sudo nginx -t
		```
	- ### 5.4. Reinicie o serviço do Nginx para aplicar as mudanças
		```bash
		sudo systemctl restart nginx
		```

---
# API Rest
Para disponibilizar uma **API REST segura, robusta e escalável** para que terceiros consultem as atividades do banco de dados MariaDB, a melhor prática no Express é estruturar a solução com:
1. **Autenticação por API Key** (para controle de acesso e segurança).
2. **Rotas dedicadas** (com versionamento, ex: `/api/v1/atividades`).
3. **Filtros e Paginação** (essenciais para APIs consumidas por terceiros).
4. **Tratamento de erros padronizado em JSON**.

## 1. Criar o Middleware de Autenticação (`auth.js`)
Para evitar que qualquer pessoa acesse os dados sem permissão, vamos usar o arquivo `backend/src/middlewares/auth.js` para validar uma chave de API (`X-API-Key`) enviada no cabeçalho da requisição.

Adicionando o seguinte código em `backend/src/middlewares/auth.js`:

```javascript
// backend/src/middlewares/auth.js

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

## 2. Criar o Controller com Paginação e Filtros
Criar filtros dinâmicos e paginação protege o banco de dados contra sobrecargas (evitando que um terceiro puxe milhares de registros de uma vez).

Crie o arquivo `backend/src/controllers/apiController.js` (ou use o arquivo de controllers existente) com a lógica abaixo:

```javascript
// backend/src/controllers/apiController.js
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

## 3. Configurar a Rota no Express
Agora, criamos um arquivo de rotas específico para terceiros.

Crie o arquivo `backend/src/routes/api.js`:

```javascript
// backend/src/routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const verifyApiKey = require('../middlewares/auth');

// Rota de consulta com autenticação obrigatória
router.get('/atividades', verifyApiKey, apiController.getAtividadesExterna);

module.exports = router;
```

## 4. Registrar a Rota Principal em `backend/src/app.js`
Abra o arquivo `backend/src/app.js` e adicione a nova rota versionada (boa prática para APIs REST):

```javascript
// Adicione a importação da rota no topo do backend/src/app.js
var apiRouter = require('./routes/api');

// ... outros middlewares e rotas ...

// Registre a rota com o prefixo '/api/v1'
app.use('/api/v1', apiRouter);
```

## Como Terceiros Consumirão a API?

Depois de subir o servidor, a outra empresa ou sistema poderá realizar requisições passando o cabeçalho `X-API-Key`.

### Exemplo usando `cURL` (Terminal):
```bash
curl -H "X-API-Key: chave-secreta-projeto-integrador" \
     "http://localhost:3000/api/v1/atividades?page=1&limit=5&turno=MATUTINO"
```

### Exemplo em JavaScript (`fetch`):
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

## Resumo do que foi feito
- Projetamos uma arquitetura limpa de API REST, abordando autenticação via middleware (`X-API-Key`), controladores desacoplados, queries dinâmicas protegidas contra SQL injection, e suporte a paginação e filtros de busca.

## Chave da API (Exemplo para desenvolvimento):
- `chave-api-demonstrativa-12345`