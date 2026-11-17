# 🧠 Guia Rápido de Tecnologias, Conceitos e Arquitetura

Esta documentação explica de forma simples, direta e prática as principais ferramentas e conceitos modernos do ecossistema JavaScript/TypeScript utilizados no projeto Feira & Cia.

---

## 1. 🦁 NestJS (Backend Corporativo)

O **NestJS** é um framework para Node.js construído com TypeScript estrito, fortemente inspirado na arquitetura do Angular. Ele é o padrão de ouro adotado por bancos, fintechs e grandes empresas de tecnologia porque impõe organização e escalabilidade.

### Pilares fundamentais do NestJS:
* **Controllers**: Responsáveis apenas por receber a requisição HTTP (rotas, verbos `GET`, `POST`, query params, body) e devolver a resposta ao cliente.
* **Services / Providers**: Onde mora a **Regra de Negócio** real (cálculo de descontos, validação de regras de mercado, integração com o banco).
* **Modules**: Agrupadores que encapsulam controllers e services relacionados (ex: `UsersModule`, `AuthModule`, `ProductsModule`).
* **Injeção de Dependência (IoC / DI)**: Em vez de você criar manualmente classes com `new MinhaClasse()`, o NestJS gerencia e "injeta" as dependências automaticamente nos construtores (ex: `constructor(private readonly prisma: PrismaService) {}`).
* **Decorators (`@`)**: Anotações que modificam o comportamento de classes e métodos de forma declarativa (ex: `@Get()`, `@Post()`, `@Body()`, `@UseGuards()`).

---

## 2. 💎 Prisma ORM (Banco de Dados Relacional)

O **Prisma** é um Object-Relational Mapper (ORM) de última geração para Node.js e TypeScript. Ele substitui queries SQL manuais em texto puro por métodos TypeScript 100% tipados e seguros contra SQL Injection.

### Como funciona no projeto:
* **`schema.prisma`**: Arquivo declarativo onde definimos as tabelas (`models`), colunas, tipos e relacionamentos (`User`, `Product`, `PurchaseHistory`).
* **Prisma Client (`@prisma/client`)**: Código gerado automaticamente que fornece autocompletion em tempo real. Se você digitar `prisma.user.`, o VS Code sugere `findUnique`, `create`, `findMany` com os tipos exatos de cada coluna.
* **Prisma Studio**: Uma interface web visual nativa para você ver e editar dados do banco sem precisar de programas como DBeaver ou pgAdmin. Para abrir:
  ```bash
  npm run prisma:studio
  ```
* **Transações Atômicas (`prisma.$transaction`)**: Permite rodar múltiplos comandos no banco como uma única operação indissolúvel. Se o comando 3 falhar, os comandos 1 e 2 sofrem *rollback* automático, garantindo que o banco nunca fique com dados corrompidos.

---

## 3. 📚 Swagger / OpenAPI (Documentação Viva da API)

O **Swagger** gera automaticamente uma interface web interativa onde qualquer desenvolvedor ou recrutador pode testar todos os endpoints da API pelo navegador, sem precisar abrir o Postman ou Insomnia.

### No nosso projeto:
* Fica disponível em: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
* **Como documentar seus controllers**:
  * `@ApiTags('Users')`: Agrupa os endpoints em uma seção visual.
  * `@ApiOperation({ summary: 'Cadastra um novo usuário' })`: Explica o que o endpoint faz.
  * `@ApiResponse({ status: 201, description: 'Usuário criado com sucesso' })`: Mostra o status esperado.
  * `@ApiBearerAuth()`: Adiciona o botão de cadeado para testar rotas protegidas por token JWT.

---

## 4. 🎨 Tailwind CSS v4 (Estilização Utility-First)

O **Tailwind CSS** é um framework de utilitários CSS. Em vez de criar arquivos `.css` gigantes com nomes de classes arbitrários (`.minha-classe-header-top`), você estiliza diretamente no JSX com classes pré-definidas (`flex`, `items-center`, `p-4`, `rounded-xl`).

### Vantagens:
* **Fim do CSS órfão**: Se você deletar o componente, o CSS é removido junto.
* **Tokens e Tema no `@theme`**: No arquivo `apps/web/src/index.css`, já configuramos as cores da Feira (`bg-awning`, `bg-accent`, `bg-cat-limpeza`) e as fontes (`font-serif`, `font-mono`). Você pode usar essas classes diretamente em qualquer componente!

---

## 5. 🐳 Docker & Docker Compose (Isolamento de Ambiente)

O **Docker** cria "containers" (máquinas virtuais extremamente leves) para rodar serviços de forma idêntica em qualquer computador.

### Por que usamos no projeto?
* Em vez de você ter que instalar o PostgreSQL na sua máquina Windows, configurar usuário, senha, portas e serviços do Windows, o Docker sobe o banco em 3 segundos através do container `postgres:16-alpine`.
* O comando `npm run docker:db` inicia apenas o banco PostgreSQL em background.
* O comando `npm run docker:up` inicia todos os containers (banco, api e web) em background.
* O comando `docker compose down -v` apaga o container e o volume, permitindo resetar o banco do zero a qualquer momento.

---

## 6. ⚛️ React 19 + Vite (Frontend Moderno)

O **Vite** é a ferramenta de build e servidor de desenvolvimento mais rápida do mercado hoje (substituiu o Create React App). Ele compila TypeScript instantaneamente via Hot Module Replacement (HMR).

### Conceitos-chave no React:
* **Componentes Funcionais**: Funções que recebem propriedades (`props`) e retornam a interface em JSX.
* **Hooks Principais**:
  * `useState`: Armazena o estado dinâmico da tela (ex: texto da busca, produtos selecionados).
  * `useEffect`: Executa efeitos colaterais (ex: buscar dados da API quando a tela abre).
  * `useContext`: Compartilha dados globalmente sem precisar passar props de pai para filho em cadeia (*prop drilling*).
  * `useReducer`: Alternativa poderosa ao `useState` para gerenciar estados complexos com múltiplas transições de ação.

---

## 7. 📋 React Hook Form + Zod (Formulários de Alta Performance)

Controlar formulários no React com `useState` em cada input é lento e gera renderizações excessivas a cada tecla digitada. A dupla **React Hook Form + Zod** é o padrão corporativo de mercado para formulários profissionais.

### Como funciona:
* **Zod**: Biblioteca que define o "schema" (a regra dos dados) e gera o tipo TypeScript automaticamente:
  ```ts
  const loginSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
  });
  type LoginFormData = z.infer<typeof loginSchema>;
  ```
* **React Hook Form**: Conecta o schema do Zod ao formulário, valida os dados em tempo real e bloqueia o envio caso algum campo esteja incorreto com zero re-renders desnecessários.

---

## 8. 🔐 Autenticação com JWT e Cookie HttpOnly

O **JSON Web Token (JWT)** é um padrão para autenticação segura entre SPA (React) e API REST (NestJS).

### O fluxo de segurança moderno:
1. O usuário digita email e senha.
2. O NestJS valida a senha com o hash do `bcrypt`.
3. Se válido, a API gera dois tokens:
   * **Access Token**: Token JWT de curta duração (15 minutos) enviado no corpo da resposta para autenticar requisições no cabeçalho `Authorization: Bearer <token>`.
   * **Refresh Token**: Token de longa duração (7 dias) enviado em um **Cookie HttpOnly**.
4. **Por que Cookie HttpOnly?** Porque scripts maliciosos em JavaScript no navegador (ataques XSS) **não conseguem ler cookies HttpOnly**, tornando impossível que um invasor roube o refresh token de sessão do usuário.

