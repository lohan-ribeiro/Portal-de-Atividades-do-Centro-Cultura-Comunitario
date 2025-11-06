
# Projeto CEU Rosa da China

## Visão Geral

Este é o portal do CEU Rosa da China, um espaço digital criado para que a comunidade possa se informar e se inscrever nas diversas atividades gratuitas que oferecemos. O objetivo deste projeto é facilitar o acesso à informação, centralizando em um único lugar todas as atividades disponíveis, com filtros e buscas que tornam a navegação mais ágil e intuitiva.

O site foi construído com uma arquitetura moderna, separando o `frontend` (a parte com a qual o usuário interage) do `backend` (a lógica e o banco de dados que alimentam o site). Essa separação garante mais flexibilidade para futuras manutenções e novas funcionalidades.

---

## Tecnologias Utilizadas

A seguir, uma lista das tecnologias que escolhemos para este projeto, com uma breve justificativa da razão pela qual cada uma foi selecionada.

### Frontend

O `frontend` é a camada visual do projeto, com a qual os usuários interagem diretamente. Foi desenvolvido com as seguintes tecnologias:

- **React:** Uma biblioteca JavaScript para a criação de interfaces de usuário. O React foi escolhido pela sua eficiência e componentização, o que nos permitiu criar uma interface dinâmica e responsiva, onde as informações são atualizadas em tempo real sem a necessidade de recarregar a página.

- **Vite:** Um ambiente de desenvolvimento moderno e ultrarrápido. O Vite acelera o processo de desenvolvimento, oferecendo um servidor de desenvolvimento com *hot-reload* (atualização automática) quase instantâneo, o que torna a criação e o teste de novas funcionalidades muito mais ágil.

- **React Router:** Para gerenciar a navegação entre as diferentes páginas do site (Home, Sobre, Contato) de forma fluida e sem a necessidade de recarregar o navegador, o que é característico de uma *Single-Page Application* (SPA).

- **Axios:** Um cliente HTTP para fazer a comunicação entre o `frontend` e o `backend`. O Axios foi utilizado para buscar as atividades no banco de dados e exibi-las na tela, de forma assíncrona e segura.

- **Fuse.js:** Uma biblioteca de *fuzzy search* (busca aproximada) que torna a barra de pesquisa mais inteligente. Com o Fuse.js, os usuários podem encontrar atividades mesmo que digitem o nome com algum erro de ortografia, melhorando a experiência de uso.

- **Email.js:** Para a funcionalidade de contato, o Email.js foi integrado para permitir que os usuários enviem mensagens diretamente do site, sem a necessidade de uma configuração de servidor de e-mail no `backend`.

- **Google Maps React:** Para exibir o mapa de localização do CEU Rosa da China, esta biblioteca oferece uma integração simples e direta com a API do Google Maps, facilitando a visualização do endereço.

### Backend

O `backend` é o cérebro do projeto. É ele quem processa as informações, se comunica com o banco de dados e envia os dados para o `frontend`.

- **Node.js e Express:** O Node.js é o ambiente que permite executar código JavaScript no servidor, enquanto o Express é um *framework* que simplifica a criação de APIs REST. Juntos, eles formam a base do nosso `backend`, gerenciando as rotas e a lógica de negócios.

- **MariaDB:** Um sistema de gerenciamento de banco de dados relacional, robusto e de código aberto. O MariaDB foi escolhido para armazenar as informações das atividades de forma organizada e segura, garantindo a integridade dos dados.

- **CORS:** Um pacote para habilitar o *Cross-Origin Resource Sharing*. O CORS é essencial para permitir que o `frontend`, que roda em um domínio, possa fazer requisições para o `backend`, que está em outro, de forma segura.

---

## Estrutura do Projeto

O projeto está organizado em duas pastas principais:

- **/frontend:** Contém todos os arquivos relacionados à interface do usuário, incluindo os componentes React, as folhas de estilo (CSS) e as imagens.
- **/backend:** Contém a lógica do servidor, a configuração do banco de dados e os *endpoints* da API.

---

## Como Executar o Projeto

Para executar o projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

- **Node.js:** Certifique-se de que você tem o Node.js instalado.
- **MariaDB:** É necessário ter o MariaDB (ou MySQL) instalado e em execução.

### 1. Configurar o Banco de Dados

- Crie um banco de dados com o nome `projeto_db`.
- Execute o script `backend/src/projeto_db.sql` para criar a tabela `atividades` e inserir os dados iniciais.

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
