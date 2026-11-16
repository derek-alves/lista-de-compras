# 🧺 Feira & Cia (Full-Stack Monorepo)

> Plataforma inteligente para gestão de compras de mercado, listas em tempo real e controle de despesas por categoria. Desenvolvido em equipe simulando o fluxo de trabalho de uma empresa de tecnologia.

---

## 🚀 Como Executar o Projeto

Você pode rodar o projeto de duas maneiras:
* **Método 1 (Recomendado / Mais Fácil)**: Tudo em **1 único comando no Docker** (sobe Banco, Back e Front juntos).
* **Método 2 (Independente / Nativo)**: Sobe apenas o banco no Docker e roda o Backend e o Frontend individualmente em terminais na sua máquina.

---

### 🐳 Método 1: Rodar Tudo com 1 Único Comando (Docker)

Ideal para quem quer começar a codar de imediato sem instalar nada além do Docker, ou para **testar uma branch/feature nova rapidamente**.

Execute na raiz do projeto:

```bash
docker compose up --build
```
*(ou pelo atalho: `npm run docker:dev`)*

O Docker irá automaticamente:
1. Subir o banco de dados **PostgreSQL 16**.
2. Instalar as dependências do backend, gerar o Prisma Client e iniciar o **NestJS** em modo watch na porta **3000**.
3. Instalar as dependências do frontend e iniciar o **React (Vite)** com hot-reload na porta **5173**.
4. Qualquer linha de código alterada no seu editor atualizará instantaneamente nos containers.

> **Para parar os containers**: Pressione `Ctrl + C` ou abra outro terminal e digite `docker compose down`.

---

### 💻 Método 2: Rodar os Projetos de Forma Independente

Ideal para o dia a dia quando você estiver trabalhando especificamente apenas no frontend ou apenas no backend e prefere rodar nativamente com o Node.js da sua máquina.

#### Passo 1: Subir apenas o Banco de Dados no Docker
Em um terminal na raiz:
```bash
npm run docker:up
```
*(Isso iniciará apenas o container do PostgreSQL em segundo plano na porta 5432).*

#### Passo 2: Instalar dependências e rodar o Backend (NestJS)
Em um terminal na raiz:
```bash
npm run dev:api
```
* A API estará rodando com hot-reload em: `http://localhost:3000/api`
* A documentação interativa estará em: `http://localhost:3000/api/docs`

#### Passo 3: Rodar o Frontend (React + Vite)
Em outro terminal na raiz:
```bash
npm run dev:web
```
* O frontend estará rodando com hot-reload em: `http://localhost:5173`

---

## 🌐 URLs e Acessos da Aplicação

* 💻 **Frontend (React)**: [http://localhost:5173](http://localhost:5173)
* ⚙️ **Backend API (NestJS)**: [http://localhost:3000/api](http://localhost:3000/api)
* 📚 **Documentação Interativa (Swagger)**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
* 🗄️ **Prisma Studio (Visualizador do Banco)**: `npm run prisma:studio` -> [http://localhost:5555](http://localhost:5555)

---

## 🧪 Como Testar uma Feature Nova / Pull Request

Quando um colega de equipe abrir um Pull Request (ex: `feat/issue-03-crud-usuarios`), você pode testar a branch dele em 3 passos:

1. **Baixe e troque para a branch da feature**:
   ```bash
   git fetch origin
   git checkout feat/issue-03-crud-usuarios
   ```

2. **Suba o ambiente em 1 comando**:
   ```bash
   docker compose up --build
   ```

3. **Valide a funcionalidade**:
   * Teste os endpoints e retornos no **Swagger** (`http://localhost:3000/api/docs`).
   * Teste a usabilidade visual no **Frontend** (`http://localhost:5173`).
   * Se os dados do banco ficarem "sujos" durante os testes e você quiser resetar o banco do zero:
     ```bash
     docker compose down -v
     docker compose up
     ```

---

## 🛠️ Tabela de Scripts Úteis

Todos os comandos podem ser executados diretamente da raiz do monorepo:

| Comando | Descrição |
| :--- | :--- |
| `docker compose up --build` | Sobe Banco, Backend e Frontend juntos em containers com hot-reload |
| `docker compose down` | Para todos os containers do projeto |
| `docker compose down -v` | Para os containers e **reseta o banco de dados** (limpa volumes) |
| `npm run docker:up` | Inicia apenas o container do PostgreSQL em background |
| `npm run dev:api` | Roda apenas o backend NestJS localmente (modo watch) |
| `npm run dev:web` | Roda apenas o frontend React localmente (modo watch) |
| `npm run build` | Valida se a tipagem e compilação do front e back passam sem erros |
| `npm run prisma:studio` | Abre a interface visual para ver tabelas e dados do banco |

---

## 📋 Regras de Contribuição em Equipe (Git Flow)

1. **A branch `main` é protegida**: Não faça commits diretos nela.
2. **Crie uma branch para cada Issue**:
   * Padrão de nome: `feat/issue-<numero>-descricao-curta` ou `fix/issue-<numero>-descricao-curta`.
3. **Abra um Pull Request**:
   * O GitHub carregará automaticamente o checklist do template de PR.
   * Cole prints, evidências dos testes do Swagger e passos para testar.
4. **Code Review Obrigatório**:
   * O colega de equipe deve revisar o código, tirar dúvidas e aprovar o PR antes de realizar o merge.
