# 🧺 Feira & Cia (Full-Stack Monorepo)

> Plataforma inteligente para gestão de compras de mercado, listas em tempo real e controle de despesas por categoria. Desenvolvido em equipe simulando o fluxo de trabalho de uma empresa de tecnologia.

---

## ⚡ Inicialização Rápida em 1 Único Comando (Docker)

Se você tem o **Docker** instalado, você não precisa instalar Node.js nem rodar múltiplos terminais. Basta executar na raiz do projeto:

```bash
docker compose up --build
```
*(ou se preferir: `npm run docker:dev`)*

O Docker irá automaticamente:
1. Subir o banco de dados **PostgreSQL 16**.
2. Baixar a imagem do Node 22, instalar todas as dependências da API, gerar o cliente Prisma e iniciar o **NestJS** com hot-reload na porta **3000**.
3. Instalar as dependências do frontend e iniciar o **React (Vite)** com hot-reload na porta **5173**.
4. Qualquer linha de código que você editar no VS Code atualizará instantaneamente dentro do container!

### URLs da Aplicação:
* 🌐 **Frontend (React)**: [http://localhost:5173](http://localhost:5173)
* ⚙️ **Backend API (NestJS)**: [http://localhost:3000/api](http://localhost:3000/api)
* 📚 **Documentação Interativa (Swagger)**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)

---

## 🏛️ Arquitetura do Projeto

* **`apps/api` (Backend)**:
  * **NestJS** (Injeção de Dependência, DTOs, Decorators e Clean Architecture)
  * **Prisma ORM** + **PostgreSQL 16**
  * **Swagger/OpenAPI** em `/api/docs`
  * Validação global via `class-validator` e `class-transformer`
* **`apps/web` (Frontend)**:
  * **React 19** + **Vite** + **TypeScript**
  * **Tailwind CSS v4** com paleta temática
  * **Axios** com interceptor automático para renovação de token
  * **Lucide React** para ícones modernos

---

## 🛠️ Scripts Úteis

| Comando | Descrição |
| :--- | :--- |
| `docker compose up --build` | **(Recomendado)** Sobe Banco, Backend e Frontend juntos com hot-reload |
| `docker compose down` | Para todos os containers do projeto |
| `docker compose down -v` | Para os containers e reseta o banco de dados (limpa volumes) |
| `npm run dev:api` | Roda apenas o backend localmente no terminal |
| `npm run dev:web` | Roda apenas o frontend localmente no terminal |
| `npm run prisma:studio` | Abre a interface visual do Prisma para explorar o banco |

---

## 📋 Regras de Contribuição e Git Flow

1. **Nunca faça commits diretos na `main`**:
   * Crie uma branch para cada funcionalidade: `feat/issue-<numero>-nome-da-tarefa` ou `fix/...`.
2. **Abra um Pull Request**:
   * Preencha o template de PR detalhando o que foi feito e como testar.
3. **Code Review Obrigatório**:
   * Seu colega de equipe deve revisar e aprovar o código antes do merge.
