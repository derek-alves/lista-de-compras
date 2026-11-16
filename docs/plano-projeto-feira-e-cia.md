# 🧺 Plano de Engenharia e Mentoria: Projeto Feira & Cia (Full-Stack)

Este documento estabelece o plano diretor técnico, a governança de equipe e o **backlog executivo pareado** para capacitar dois desenvolvedores juniores em um ambiente de simulação real de empresa de tecnologia.

---

## 📌 Status Atual do Projeto (Entregas Realizadas)

As etapas fundamentais de infraestrutura, arquitetura e governança já foram **entregues e validadas**:

* ✅ **Monorepo TypeScript**: Workspaces `/apps/api` e `/apps/web` configurados.
* ✅ **Infraestrutura Docker**: PostgreSQL 16 pronto com `npm run docker:up` ou ambiente completo via `docker compose up --build`.
* ✅ **Backend Base (NestJS)**: Prisma ORM v6 integrado, Swagger ativo em `/api/docs`, CORS habilitado e pipes de validação globais.
* ✅ **Frontend Base (React Vite)**: Tailwind CSS v4, Lucide icons, cliente Axios com interceptor de renovação de token e tela de status operacional.
* ✅ **Governança Git Ativa**: Branch `main` protegida, `.github/CODEOWNERS` configurado (Derek como aprovador obrigatório), template de PR padronizado e repositório público no GitHub ([derek-alves/lista-de-compras](https://github.com/derek-alves/lista-de-compras)).

---

## 🎨 A Estratégia "Component-First": Por que criar o UI Kit Antes de Tudo?

Antes de mergulhar no backend e regras de negócio, a dupla passará pela **Milestone 0: Design System & UI Kit Reutilizável**.

### Por que essa abordagem é transformadora para um júnior?
1. **Evita JSX Espaguete**: Sem um kit pronto, juniores costumam recriar botões e inputs copiando e colando classes Tailwind em todas as páginas.
2. **Ensina os Fundamentos Mais Cobrados em Front-end**:
   * **Props Tipadas com TypeScript**: `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`.
   * **Variantes de Estilo e Estados**: Cores primárias, secundárias, ativo, desabilitado e estados de hover/focus.
   * **Composição de Componentes**: Uso de `children`, ícones via composição e slots.
3. **Showcase Visual Imediato**: Eles montam uma página de galeria (`/ui-kit`) onde você (Tech Lead) e eles conseguem visualizar e testar todos os componentes isolados antes de conectá-los com a API.

---

## 👥 Como a Dupla Trabalha: Trilhas Pareadas e Pontos de Encaixe

```mermaid
flowchart TD
    subgraph M0 ["Milestone 0: UI Kit & Componentização (Base)"]
        direction LR
        DevA0["🧑‍💻 Dev A: Botões, Chips, Inputs & Toast"] <--> DevB0["👩‍💻 Dev B: Header, Tabs, FloatBar & KPI Cards"]
        DevA0 & DevB0 --> Sync0["🔗 Encaixe: Galeria de Componentes (/ui-kit)"]
    end

    subgraph M1 ["Milestone 1: Autenticação & Usuários"]
        direction LR
        DevA1["🧑‍💻 Dev A: Cadastro & Users"] <--> DevB1["👩‍💻 Dev B: Login & JWT"]
        DevA1 & DevB1 --> Sync1["🔗 Encaixe: Fluxo Completo de Sessão"]
    end

    subgraph M2 ["Milestone 2: Catálogo & Listas"]
        direction LR
        DevA2["🧑‍💻 Dev A: Produtos & Busca"] <--> DevB2["👩‍💻 Dev B: Seleção & Persistência"]
        DevA2 & DevB2 --> Sync2["🔗 Encaixe: Lista Interativa"]
    end

    subgraph M3 ["Milestone 3: Compras & Transações"]
        direction LR
        DevA3["🧑‍💻 Dev A: Carrinho & Preço Estimado"] <--> DevB3["👩‍💻 Dev B: Transação & Mercados"]
        DevA3 & DevB3 --> Sync3["🔗 Encaixe: Finalização Atômica"]
    end

    subgraph M4 ["Milestone 4: Dashboards & Compartilhamento"]
        direction LR
        DevA4["🧑‍💻 Dev A: Métricas & KPIs"] <--> DevB4["👩‍💻 Dev B: Histórico & Convites"]
        DevA4 & DevB4 --> Sync4["🔗 Encaixe: Sistema Completo"]
    end

    M0 --> M1 --> M2 --> M3 --> M4
```

---

## 📋 Backlog Completo Agrupado por Milestone e Trilha

---

### 🎨 Milestone 0: Design System & UI Kit Reutilizável (Component-First)

Nesta fase inicial, os dois desenvolvedores analisam o [lista-mercado.html](file:///c:/Users/derek/Documents/projeto%20de%20carreira/lista-de-compras/docs/lista-mercado.html) e extraem todo o visual para componentes React reutilizáveis dentro de `apps/web/src/components/ui/`.

#### 🧑‍💻 Pacote Dev A — Componentes Atômicos, Inputs e Feedback
* **[ISSUE-00A] Componentes Atômicos: Button, Input e SearchBar**
  * *O que fazer*: 
    * `Button`: Componente flexível com suporte a variantes (`primary`, `secondary`, `danger`, `clear-link`), tamanhos e estado `disabled`.
    * `Input` e `SearchBar`: Campo de texto com suporte a ícone de busca à esquerda e botão de limpar texto à direita.
  * *Critérios de Aceite*: Componentes aceitam todas as props nativas de HTML via TypeScript e suportam ref (`React.forwardRef`).
* **[ISSUE-00B] Componentes de Dados: ProductChip, CategoryBadge e Toast**
  * *O que fazer*:
    * `ProductChip`: O chip de produto original com a bolinha colorida (`CategoryDot`), estado ativo/selecionado com mudança de background e escala no clique (`active:scale-95`).
    * `Toast`: Componente flutuante inferior para notificações rápidas de sucesso/erro com auto-dismiss.
  * *Critérios de Aceite*: Recebe a cor da categoria via prop ou variável CSS e reage visualmente de forma idêntica ao protótipo original.

---

#### 👩‍💻 Pacote Dev B — Estrutura de Layout, Barras e Cartões
* **[ISSUE-00C] Layout e Navegação: Header e TabsNav**
  * *O que fazer*:
    * `Header`: Top bar com o título "🧺 Feira & Cia", tipografia serifada/elegante e slogan temático.
    * `TabsNav`: Navegação por abas com transição ativa estilizada (Lista, Compra, Painel).
  * *Critérios de Aceite*: Aceita a aba ativa como prop e dispara callback `onTabChange(tab)`.
* **[ISSUE-00D] Barras Fixas e Cartões: FloatBar, ReceiptBar e KpiCard**
  * *O que fazer*:
    * `FloatBar`: A barra inferior vermelha com o contador de itens selecionados e slots para botões de ação ("limpar" e "iniciar compra").
    * `ReceiptBar`: A barra estilo cupom fiscal com borda serrilhada superior (`.torn`), exibição de total grande e botão de finalizar compra.
    * `KpiCard` & `CategoryProgressBar`: Cartão de métricas e barra de progresso horizontal colorida para os gráficos de despesas por categoria.
  * *Critérios de Aceite*: Layout 100% responsivo (max-w-xl centralizado para mobile) e estilizado com Tailwind CSS.

> 🔗 **Ponto de Integração da Milestone 0 (Showcase)**:
> Dev A e Dev B criam a página `/ui-kit` (Galeria de Componentes) onde colocam todos os botões, chips, barras e inputs lado a lado funcionando. Derek revisa a qualidade e o acabamento dos componentes antes de avançarem para o backend.

---

### 🟢 Milestone 1: Autenticação e Gestão de Usuários

#### 🧑‍💻 Pacote Dev A — Cadastro e Gestão de Usuários
* **[ISSUE-01] Backend: Modelagem e CRUD de Usuários**
  * *Camada*: NestJS (`UsersModule`) + Prisma.
  * *O que fazer*: Criar endpoint `POST /users` com validação de email (`@IsEmail()`) e hashing de senha seguro usando `bcrypt` (10 rounds).
  * *Contrato de API*: Recebe `{ name, email, password }` e devolve `{ id, name, email, createdAt }` (sem a senha).
* **[ISSUE-02] Frontend: Tela e Formulário de Cadastro**
  * *Camada*: React + Hook Form + Zod.
  * *O que fazer*: Criar a tela de Registro utilizando os componentes `Button` e `Input` criados na Milestone 0, com validação em tempo real e feedback de erro amigável.
  * *Conexão direta*: Envia os dados para o endpoint `POST /users` criado na ISSUE-01.

---

#### 👩‍💻 Pacote Dev B — Login, JWT e Sessão
* **[ISSUE-03] Backend: Autenticação JWT, Refresh Token e Guards**
  * *Camada*: NestJS (`AuthModule`) + Passport JWT.
  * *O que fazer*: Criar `POST /auth/login` (gera Access Token de 15 min + Refresh Token em Cookie HttpOnly), `POST /auth/refresh`, decorator `@CurrentUser()` e `JwtAuthGuard`.
  * *Contrato de API*: Recebe `{ email, password }` e devolve `{ accessToken, user }`.
* **[ISSUE-04] Frontend: Tela de Login e Contexto de Autenticação**
  * *Camada*: React Context (`AuthContext`) + Hook Form + Zod.
  * *O que fazer*: Criar a tela de Login utilizando o `Button` e `Input` da Milestone 0, salvar a sessão no `AuthContext` e proteger as rotas.
  * *Conexão direta*: Consome `POST /auth/login` e armazena os dados da sessão.

> 🔗 **Ponto de Integração da Milestone 1**: 
> Usuário se cadastra pela tela do Dev A, é redirecionado para a tela do Dev B, faz login com sucesso e entra na aplicação autenticada.

---

### 🟡 Milestone 2: Catálogo de Produtos e Gestão de Listas

#### 🧑‍💻 Pacote Dev A — Catálogo e Busca de Produtos
* **[ISSUE-05] Backend: Seed do Banco com as 10 Categorias e Produtos**
  * *Camada*: Prisma (`prisma/seed.ts`).
  * *O que fazer*: Script para popular o banco com as 10 categorias padrão com cores temáticas e produtos reais do protótipo.
* **[ISSUE-06] Backend: API de Listagem e Criação de Produtos**
  * *Camada*: NestJS (`ProductsModule`).
  * *O que fazer*: Criar `GET /products` com busca por texto (`search`) e categoria (`categoryId`), além de `POST /products` para novos produtos criados pelo usuário.
* **[ISSUE-07] Frontend: Aba Lista com os Componentes Reutilizáveis**
  * *Camada*: React + Tailwind.
  * *O que fazer*: Montar a aba Lista integrando os componentes `SearchBar` e `ProductChip` da Milestone 0, renderizando os produtos da API com busca em tempo real.

---

#### 👩‍💻 Pacote Dev B — Seleção de Itens e Persistência da Lista
* **[ISSUE-08] Frontend: ListContext e Conexão com a FloatBar**
  * *Camada*: React Context (`ListContext`).
  * *O que fazer*: Conectar o `ListContext` aos chips do Dev A e à `FloatBar` da Milestone 0. Corrigir o bug do protótipo: o botão "Limpar" zera os chips e oculta a barra sem deixar lixo de estado.
* **[ISSUE-09] Full-stack: Persistência da Lista Ativa no Backend**
  * *Camada*: NestJS (`ListsModule`) + React.
  * *O que fazer*: Endpoints `GET /lists/active` e `PUT /lists/active` para salvar a lista em andamento do usuário no PostgreSQL.
  * *Conexão direta*: O `ListContext` sincroniza com o backend via debounce para não perder a seleção ao fechar o navegador.

> 🔗 **Ponto de Integração da Milestone 2**:
> Os produtos que o Dev A exibe com o `ProductChip` reagem aos cliques controlados pelo `ListContext` do Dev B, atualizando a `FloatBar` e salvando a seleção do usuário no banco.

---

### 🟠 Milestone 3: Execução de Compras e Regras de Negócio

#### 🧑‍💻 Pacote Dev A — Experiência do Carrinho e Inteligência de Preço
* **[ISSUE-10] Frontend: Aba de Compra (Carrinho em Tempo Real)**
  * *Camada*: React.
  * *O que fazer*: Montar a aba *Compra* exibindo apenas os itens marcados na aba anterior, utilizando os inputs numéricos estilizados. Preencher quantidade default como `1` e calcular subtotais instantaneamente.
* **[ISSUE-11] Full-stack: Preenchimento com o Último Preço Pago**
  * *Camada*: NestJS (`GET /products/:id/last-price`) + React.
  * *O que fazer*: Criar endpoint que busca no histórico de compras o valor pago anteriormente pelo usuário naquele item e pré-preenche o preço estimado no carrinho.

---

#### 👩‍💻 Pacote Dev B — Supermercados e Finalização Atômica
* **[ISSUE-12] Full-stack: Cadastro e Seleção de Supermercados**
  * *Camada*: NestJS + Prisma (`Market`) + React.
  * *O que fazer*: Criar endpoints para listar e registrar mercados onde as compras foram realizadas (ex: "Carrefour", "Assaí", "Feira da Praça").
* **[ISSUE-13] Backend: Finalização de Compra com Transação Atômica**
  * *Camada*: NestJS (`POST /purchases`) + Prisma `$transaction`.
  * *O que fazer*: Endpoint que valida subtotais no backend, cria a transação em `PurchaseHistory`, adiciona os `PurchaseItem` e esvazia a lista ativa do usuário com garantia de *rollback* em caso de erro.
* **[ISSUE-14] Frontend: Sincronização Cruzada de Itens (Correção de Bug)**
  * *Camada*: React.
  * *O que fazer*: Conectar a remoção de itens na aba Compra com o desmarque do chip na aba Lista e a atualização do total na `ReceiptBar`.

> 🔗 **Ponto de Integração da Milestone 3**:
> O carrinho montado pelo Dev A consome o cadastro de mercados e dispara o endpoint de finalização atômica criado pelo Dev B, registrando a compra com segurança no banco.

---

### 🟣 Milestone 4: Dashboards, Histórico e Compartilhamento

#### 🧑‍💻 Pacote Dev A — Dashboard Financeiro e Estatísticas
* **[ISSUE-15] Backend: API de Agregações Financeiras e Gastos por Categoria**
  * *Camada*: NestJS (`GET /dashboard/summary`) + SQL/Prisma.
  * *O que fazer*: Calcular total gasto, ticket médio por compra, quantidade de compras e gastos agrupados por categoria com filtro de data.
* **[ISSUE-16] Frontend: Painel de Métricas Conectando os KpiCards**
  * *Camada*: React.
  * *O que fazer*: Construir a aba *Painel* consumindo o endpoint do resumo: conectar os `KpiCard` e as `CategoryProgressBar` criados na Milestone 0 com os dados reais da API.

---

#### 👩‍💻 Pacote Dev B — Histórico de Compras e Compartilhamento
* **[ISSUE-17] Full-stack: Histórico de Compras com Edição de Data**
  * *Camada*: NestJS + React.
  * *O que fazer*: Listagem sanfonada (accordion) de compras passadas com detalhe de itens, botão de exclusão com modal de confirmação e possibilidade de alterar a data pós-finalizada.
* **[ISSUE-18] Full-stack: Compartilhamento de Lista entre Usuários**
  * *Camada*: NestJS + React.
  * *O que fazer*: Sistema de convite por email para que dois usuários visualizem e gerenciem a mesma lista de feira simultaneamente.

> 🔗 **Ponto de Integração da Milestone 4**:
> Todas as compras salvas na Milestone 3 alimentam o Dashboard e os gráficos do Dev A e o Histórico com filtros do Dev B. O projeto atinge 100% de maturidade comercial!
