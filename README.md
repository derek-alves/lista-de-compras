# 🧺 Feira & Cia (Full-Stack Monorepo)

> Plataforma inteligente para gestão de compras de mercado, listas em tempo real e controle de despesas por categoria. Desenvolvido em equipe simulando o fluxo de trabalho de uma empresa de tecnologia.

---

## 📚 Guias de Estudo e Documentações (Wiki)

Consulte os guias detalhados criados para guiar o desenvolvimento:

* 📋 **[Plano de Engenharia & Backlog de Tarefas](docs/base/plano-projeto-feira-e-cia.md)**: Todas as 22 issues detalhadas com checklists passo a passo, contratos de API e divisão pareada (Dev A vs Dev B).
* 🌿 **[Guia de Git, Branches, Commits e Pull Requests](docs/guia-git-e-governanca.md)**: Padrão de branches (`feat/`, `fix/`), Conventional Commits e passo a passo de Code Review.
* 🧠 **[Guia de Tecnologias, Conceitos e Arquitetura](docs/guia-tecnologias-e-conceitos.md)**: Explicação direta sobre NestJS, Prisma, Swagger, Tailwind, Docker, React, Zod e JWT.

---

## 🚀 Como Executar o Projeto

Escolha a forma que achar mais conveniente:
* **Método 1 (Principal / Recomendado)**: Rodar os projetos de forma independente (ideal para o dia a dia de desenvolvimento).
* **Método 2 (Alternativo)**: Rodar tudo junto em 1 único comando no Docker.

---

### 💻 Método 1: Rodar os Projetos de Forma Independente (Principal)

Este é o método padrão para o dia a dia. Você sobe o banco de dados via Docker e roda o Backend e o Frontend individualmente em terminais na sua máquina, com total visibilidade dos logs de cada um.

#### 1. Instalar as dependências do Monorepo
Na raiz do projeto, instale os pacotes de todos os apps:
```bash
npm install
```

#### 2. Subir o Banco de Dados (PostgreSQL)
Inicie o container do PostgreSQL em segundo plano:
```bash
npm run docker:up
```
*(O banco ficará rodando na porta `5432` com volume persistente).*

#### 3. Iniciar o Backend (NestJS)
Em um terminal na raiz do projeto:
```bash
npm run dev:api
```
* A API estará rodando com hot-reload em: `http://localhost:3000/api`
* A documentação interativa estará em: `http://localhost:3000/api/docs`

#### 4. Iniciar o Frontend (React + Vite)
Em **outro terminal**, também na raiz do projeto:
```bash
npm run dev:web
```
* O frontend estará rodando com hot-reload em: `http://localhost:5173`

---

### 🐳 Método 2: Rodar Tudo com 1 Único Comando (Docker)

Se você preferir rodar toda a aplicação (Banco, Backend e Frontend) conteinerizada sem precisar abrir múltiplos terminais:

```bash
docker compose up --build
```
*(ou pelo atalho: `npm run docker:dev`)*

O Docker irá automaticamente:
1. Subir o banco **PostgreSQL 16**.
2. Instalar dependências e subir o **NestJS** na porta **3000**.
3. Instalar dependências e subir o **React** na porta **5173**.
4. Qualquer linha de código alterada atualiza instantaneamente nos containers (hot-reload).

> **Para parar os containers**: Pressione `Ctrl + C` ou digite `docker compose down`.

---

## 🌐 URLs e Acessos da Aplicação

* 💻 **Frontend (React)**: [http://localhost:5173](http://localhost:5173)
* ⚙️ **Backend API (NestJS)**: [http://localhost:3000/api](http://localhost:3000/api)
* 📚 **Documentação Interativa (Swagger)**: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
* 🗄️ **Prisma Studio (Visualizador do Banco)**: `npm run prisma:studio` -> [http://localhost:5555](http://localhost:5555)

---

## 🧪 Como Testar uma Feature Nova / Pull Request

Quando um colega de equipe abrir um Pull Request (ex: `feat/issue-03-crud-usuarios`), você pode testar a branch dele:

1. **Baixe e troque para a branch da feature**:
   ```bash
   git fetch origin
   git checkout feat/issue-03-crud-usuarios
   ```

2. **Inicie o ambiente**:
   * Se usa o **Método 1**: certifique-se de que o banco está de pé (`npm run docker:up`), rode `npm install` e inicie `npm run dev:api` e `npm run dev:web`.
   * Se usa o **Método 2**: execute `docker compose up --build`.

3. **Valide a funcionalidade**:
   * Teste os endpoints e retornos no **Swagger** (`http://localhost:3000/api/docs`).
   * Teste a usabilidade visual no **Frontend** (`http://localhost:5173`).
   * Se precisar limpar dados de teste do banco e começar do zero:
     ```bash
     docker compose down -v
     npm run docker:up
     ```

---

## 🛠️ Tabela de Scripts Úteis

Todos os comandos podem ser executados diretamente da raiz do monorepo:

| Comando | Descrição |
| :--- | :--- |
| `npm run docker:up` | **(Dia a dia)** Inicia apenas o container do PostgreSQL em background |
| `npm run dev:api` | **(Dia a dia)** Roda o backend NestJS localmente (modo watch) |
| `npm run dev:web` | **(Dia a dia)** Roda o frontend React localmente (modo watch) |
| `npm run build` | Valida se a tipagem e compilação do front e back passam sem erros |
| `npm run prisma:studio` | Abre a interface visual para ver tabelas e dados do banco |
| `docker compose up --build` | Sobe Banco, Backend e Frontend juntos em containers Docker |
| `docker compose down` | Para todos os containers do projeto |
| `docker compose down -v` | Para os containers e **reseta o banco de dados** (limpa volumes) |

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
   * O proprietário (@derek-alves) é o Code Owner obrigatório para o merge final.
