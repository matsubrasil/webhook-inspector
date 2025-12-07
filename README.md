# Node + React - Desafio Rocketseat

Projeto full-stack com API backend em Node.js/Fastify e frontend em React/Vite, desenvolvido como desafio da Rocketseat.

## 📋 Tecnologias Utilizadas

### Backend (API)
- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Tipagem estática para JavaScript
- **Drizzle ORM** - ORM type-safe para SQL
- **PostgreSQL** - Banco de dados relacional
- **Zod** - Validação de schemas
- **Docker** - Containerização do banco de dados

### Frontend (Web)
- **React** - Biblioteca para construção de interfaces
- **Vite** - Build tool moderno e rápido
- **TypeScript** - Tipagem estática

### Ferramentas
- **pnpm** - Gerenciador de pacotes rápido
- **Biome** - Linter e formatter
- **Swagger/Scalar** - Documentação de API

## 🚀 Como Iniciar

### Pré-requisitos
- Node.js 18+
- pnpm 10.24.0+
- Docker e Docker Compose

### Instalação

1. Instale as dependências do projeto:
```bash
pnpm install
```

2. Configure as variáveis de ambiente. Crie um arquivo `.env` na pasta `api`:
```bash
# .env (exemplo)
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
```

3. Inicie o banco de dados com Docker:
```bash
cd api
docker-compose up -d
```

4. Configure o banco de dados:
```bash
# Gera as migrations
pnpm db:generate

# Executa as migrations
pnpm db:migrate
```

### Desenvolvimento

Execute os comandos na raiz do projeto ou em cada pasta específica:

**API:**
```bash
cd api
pnpm dev    # Inicia servidor em modo desenvolvimento
```

**Web:**
```bash
cd web
pnpm dev    # Inicia Vite em modo desenvolvimento
```

### Produção

**Build da API:**
```bash
cd api
pnpm build
pnpm start
```

**Build da Web:**
```bash
cd web
pnpm build
pnpm preview
```

## 📁 Estrutura do Projeto

```
node-react/
├── api/                    # Backend Fastify
│   ├── src/
│   │   ├── server.ts      # Configuração do servidor
│   │   ├── env.ts         # Variáveis de ambiente
│   │   ├── db/            # Configuração do banco
│   │   ├── schema/        # Schemas do Drizzle
│   │   └── routes/        # Rotas da API
│   ├── docker-compose.yml # Configuração do Docker
│   └── drizzle.config.ts  # Configuração do Drizzle
│
├── web/                    # Frontend React
│   ├── src/
│   │   ├── main.tsx       # Entrada da aplicação
│   │   ├── app.tsx        # Componente principal
│   │   └── index.css      # Estilos globais
│   └── vite.config.ts     # Configuração do Vite
│
└── pnpm-workspace.yaml     # Configuração do workspace
```

## 🛠️ Scripts Úteis

### API
- `pnpm dev` - Inicia servidor em desenvolvimento
- `pnpm start` - Inicia servidor em produção
- `pnpm format` - Formata código com Biome
- `pnpm db:generate` - Gera migrations
- `pnpm db:migrate` - Executa migrations
- `pnpm db:studio` - Abre Drizzle Studio

### Web
- `pnpm dev` - Inicia servidor Vite
- `pnpm build` - Build para produção
- `pnpm preview` - Preview do build

## 📚 Documentação Adicional

A API inclui documentação interativa do Swagger/Scalar. Acesse em `http://localhost:3000/reference` quando o servidor estiver rodando.

## 📝 Notas

- Projeto utiliza **monorepo** com pnpm workspaces
- Banco de dados PostgreSQL é containerizado com Docker Compose
- Code formatting automático com Biome
- Type-safe em toda a aplicação com TypeScript

## 📄 Licença

ISC
