# Desafio App - Criação de um ToDo

## Descrição do Projeto

Este projeto consiste na criação de uma aplicação ToDo, onde os usuários podem criar, visualizar, editar e excluir tarefas a fazer.

### Tecnologias Utilizadas

- Banco de dados: MySQL
- Backend: Nest.js
- Frontend: React com Vite

### Funcionalidades Implementadas

- Autenticação JWT para proteger rotas e garantir segurança.
- Modelagem e implementação do banco de dados utilizando MySQL.
- Desenvolvimento do backend utilizando Nest.js.
- Desenvolvimento do frontend utilizando React com Vite.

## Como Executar

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/adventureandre/desafio-todo.git`
2. Instale as dependências do backend: `cd back && pnpm install`
3. Inicie docker compose no servidor backend: `cd back && docker compose up -d`
4. Renomeie o arquivo `.env.exemple` para `.env` e configure as variáveis de ambiente conforme necessário.
5. Execute o `pnpm prisma migrate dev`
5. Inicie o servidor backend: `pnpm run start:dev`
6. Instale as dependências do frontend: `cd ../frontend && pnpm install`
7. Inicie o servidor frontend: `pnpm run dev`
8. Abra o navegador e acesse `http://localhost:3000` para visualizar a aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar uma solicitação de recebimento.

## Créditos

- [André Luíz F Souza](https://github.com/adventureandre) (Desenvolvedor)
- [ADVENTUREANDRE](https://www.linkedin.com/in/adventureandre) (Linkedin)
- [Adventure.dev.br](https://adventure.dev.br) (Site)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o [arquivo de licença](https://github.com/adventureandre/Lib/blob/main/LICENSE) para obter mais informações.

