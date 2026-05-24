
# Portal de Atividades do CEU Rosa da China

Sistema web para visualização das atividades gratuitas do CEU Rosa da China.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-FFB000?style=for-the-badge)
![Google Maps](https://img.shields.io/badge/Google%20Maps%20API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white)

---

## Visão Geral

Este é o portal do CEU Rosa da China, um espaço digital criado para que a comunidade possa se informar e se inscrever nas diversas atividades gratuitas que oferecemos. O objetivo deste projeto é facilitar o acesso à informação, centralizando em um único lugar todas as atividades disponíveis, com filtros e buscas que tornam a navegação mais ágil e intuitiva.

A aplicação foi estruturada com frontend e backend separados, permitindo que a interface e a lógica do sistema evoluam de forma independente, facilitando a manutenção e a adição de novas funcionalidades.

---

## 🚀 Tecnologias Utilizadas

### 🎨 Frontend

[![React.js]][React-url] [![Vite]][Vite-url] [![Styled Components]][StyledComponents-url]
[![Fuse.js]][Fuse-url] [![Regex]][Regex-url]
---

### ⚙️ Backend

[![Node.js]][NodeJS-url] [![Express.js]][Express-url] [![CORS]][CORS-url]

---

### 🗄️ Banco de Dados

[![MariaDB]][MariaDB-url]

---

### 🔌 APIs e Integrações

[![EmailJS]][EmailJS-url] [![Google Maps]][GoogleMaps-url]

---

## ⚙️ Funcionalidades

-  Busca inteligente de atividades com base em palavras-chave
-  Filtro de atividades por diferentes critérios
-  Visualização em mapa interativo
-  Envio de formulário para contato
-  Validação de e-mail no frontend
-  Interface dinâmica com renderização condicional de componentes


## 📚 Estrutura do Projeto

O projeto está organizado em duas partes principais:

### 🎨 Frontend

Responsável pela interface do usuário, desenvolvido com React.

Principais diretórios:
- `assets/` → Imagens e arquivos estáticos
- `components/` → Componentes reutilizáveis da interface
- `pages/` → Páginas da aplicação
- `routes/` → Rotas para as páginas

---

### ⚙️ Backend

Responsável pela lógica de negócio e comunicação com o banco de dados.

Principais diretórios:
- `bin/` → Arquivos de inicialização do servidor  
    - `www` → Responsável por iniciar a aplicação  

- `config/` → Configurações da aplicação  
    - `database.js` → Configuração da conexão com o banco de dados  
    - `test-db.js` → Script para testar a conexão com o banco  

- `app/` → Contém a lógica principal da aplicação  


## 🔐 Variáveis de Ambiente

Este projeto utiliza APIs externas e requer chaves de acesso (API Keys).

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_EMAILJS_SERVICE_ID=ID_SERVICE_AQUI
VITE_EMAILJS_TEMPLATE_ID=ID_TEMPLATE_AQUI
VITE_EMAILJS_PUBLIC_KEY=CHAVE_API_AQUI

VITE_GOOGLE_MAPS_API_KEY=CHAVE_API_AQUI
```

## 🔧 Como Executar

Para executar o projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

- **IDE:** Recomendado o uso do VS Code  
- **Node.js:** Versão LTS recomendada (>= 18)  
- **Banco de Dados:** MariaDB ou MySQL

### 1. Configurar o Banco de Dados

- Configurações de segurança do MariaDB
		Isso irá tornar a instalação do MariaDB mais segura ao adicionar uma senha à conta `root`, remover acesso a usuários anônimos, etc.
		Use o comando:
		```bash
		sudo mariadb-secure-installation
		```
		Será feita uma série de perguntas. Geralmente é seguro responder sim ("Y") para todas elas.
	- Criação do Banco de Dados e Usuário(s)
		- Autentique-se com o usuário `root` no  MariaDB, utilizando a senha configurada no passo anterior:
			```bash
			sudo mariadb -u root -p
			```
		- Crie o banco de dados:
			```sql
			CREATE DATABASE ceu;
		- Crie o novo usuário e conceda os privilégios necessários:
			```sql
			CREATE USER 'projeto'@'localhost' IDENTIFIED BY 'senha';
			GRANT ALL PRIVILEGES ON ceu.* TO 'projeto'@'localhost';
			FLUSH PRIVILEGES;
			```
		- Saia do MariaDB
			```sql
			EXIT;
			```
		- Rode o script do banco de dados:
			```bash
			sudo mariadb -u projeto -p ceu < projeto_db.sql
			```
		- Autentique-se novamente com o usuário `projeto` e visualize as tabelas
			```bash
			sudo mariadb -u projeto -p ceu
			```
			```sql
			SHOW TABLES;
			```
		- Para verificar os registros execute:
			```sql
			SELECT * FROM nome_da_tabela;
			```

### 2. Iniciar o Backend

Abra um terminal e navegue até a pasta do `backend`:

```bash
cd backend
npm install
npm start
```

O servidor `backend` estará em execução em `http://localhost:3000`.

### 3. Iniciar o Frontend

Abra um segundo terminal e navegue até a pasta do `frontend`:

```bash
cd frontend
npm install
npm run dev
```

O site estará acessível em `http://localhost:5173`.

---

## 📝 Licença

Esse projeto está sob licença apache. Veja o arquivo [LICENÇA](https://gitlab.com/grupo-pi-ii/projeto-integrador-ii/-/blob/main/LICENSE?ref_type=heads) para mais detalhes.


## 📚 Saiba mais

Quer entender melhor como o projeto foi desenvolvido? Confira a documentação abaixo:

- [Repositório do Backend](https://gitlab.com/grupo-pi-ii/projeto-integrador-ii/-/tree/main/backend?ref_type=heads)
- [Repositório do Frontend](https://gitlab.com/grupo-pi-ii/projeto-integrador-ii/-/tree/main/frontend?ref_type=heads)
- [Documentação da API React Google Maps](https://visgl.github.io/react-google-maps/docs)
- [Documentação da API EmailJS](https://www.emailjs.com/docs/tutorial/overview/)





[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/

[Vite]: https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=FFD62E
[Vite-url]: https://vitejs.dev/

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[NodeJS-url]: https://nodejs.org/

[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/

[CORS]: https://img.shields.io/badge/CORS-00599C?style=for-the-badge
[CORS-url]: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS

[MariaDB]: https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white
[MariaDB-url]: https://mariadb.org/

[Styled Components]: https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[StyledComponents-url]: https://styled-components.com/

[Fuse.js]: https://img.shields.io/badge/Fuse.js-000000?style=for-the-badge
[Fuse-url]: https://fusejs.io/

[EmailJS]: https://img.shields.io/badge/EmailJS-FFB000?style=for-the-badge
[EmailJS-url]: https://www.emailjs.com/

[Google Maps]: https://img.shields.io/badge/Google%20Maps%20API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white
[GoogleMaps-url]: https://developers.google.com/maps

[Regex]: https://img.shields.io/badge/Regex-FF6F00?style=for-the-badge
[Regex-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

