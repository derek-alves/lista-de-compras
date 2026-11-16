# 🧺 Feira & Cia (Full-Stack Monorepo)

> Plataforma inteligente para gestão de compras de mercado, listas em tempo real e controle de despesas por categoria. Desenvolvido em equipe simulando o fluxo de trabalho de uma empresa de tecnologia.

---

## 🏛️ Arquitetura do Projeto

O projeto é estruturado como um **Monorepo TypeScript**:

* **`apps/api` (Backend)**:
  * **NestJS** (Arquitetura corporativa, Injeção de Dependência, DTOs e Decorators)
  * **Prisma ORM** + **PostgreSQL 16**
  * **Swagger/OpenAPI** em `/api/docs`
  * Validação global via `class-validator` e `class-transformer`
* **`apps/web` (Frontend)**:
  * **React 19** + **Vite** + **TypeScript**
  * **Tailwind CSS v4** com a paleta de cores temática do Feira & Cia
  * **Axios** com interceptor automático para renovação de token
  * **Lucide React** para ícones modernos

---

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos
* **Node.js** (v18+)
* **Docker & Docker Compose** (para o PostgreSQL)

### 2. Configurar o Ambiente
Copie o arquivo de exemplo de variáveis de ambiente:
```bash
cp .env.example .env
```

### 3. Subir o Banco de Dados (Docker)
Inicie o container do PostgreSQL em segundo plano:
```bash
npm run docker:up
```

### 4. Instalar Dependências e Gerar o Prisma Client
```bash
npm install
npm run prisma:generate
```

### 5. Iniciar as Aplicações em Desenvolvimento

Você pode rodar as aplicações em terminais separados a partir da raiz:

* **Terminal 1 - Backend (NestJS)**:
  ```bash
  npm run dev:api
  ```
  * A API estará rodando em: `http://localhost:3000/api`
  * O Swagger interativo estará em: `http://localhost:3000/api/docs`

* **Terminal 2 - Frontend (React)**:
  ```bash
  npm run dev:web
  ```
  * A aplicação web estará rodando em: `http://localhost:5173`

---

## 🛠️ Scripts Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev:api` | Inicia o NestJS em modo de desenvolvimento (com watch/hot-reload) |
| `npm run dev:web` | Inicia o frontend Vite em modo de desenvolvimento |
| `npm run build` | Compila o backend e o frontend para produção |
| `npm run prisma:studio` | Abre a interface visual do Prisma para explorar o banco |
| `npm run docker:up` | Sobe o container do banco PostgreSQL |
| `npm run docker:down` | Para e remove os containers Docker |

---

## 📋 Regras de Contribuição e Git Flow

1. **Nunca faça commits diretos na `main`**:
   * Crie uma branch para cada funcionalidade: `feat/issue-<numero>-nome-da-tarefa` ou `fix/...`.
2. **Abra um Pull Request**:
   * Preencha o template de PR detalhando o que foi feito e como testar.
3. **Code Review Obrigatório**:
   * Seu colega de equipe deve revisar e aprovar o código antes do merge.
