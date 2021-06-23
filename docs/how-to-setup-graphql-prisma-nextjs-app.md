# how-to-setup-graphql-prisma-nextjs-tailwindcss-app

1. Install Tailwind template `npx create-next-app -e with-tailwindcss my-project`
2. `npm install graphql express-graphql`
    It works like this 
```js
// /pages/api/graphql.js
// Browse : /api/graphql
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = buildSchema(`
    type Todo {
        id: ID!
        title: String
        isCompleted: Boolean 
    }
    type RootQuery {
        todos: [Todo!]!
    }
    type RootMutation {
        createTodo(title: String , isCompleted: Boolean ): Todo
    }
    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);

const todos = [{id: 1,title: "GraphQL Next.js" , isCompleted: false}]

const rootValue = {
    todos: (args , req) => {
        return todos;
    },
    createTodo: (args , req) => {
        let todo = {
            id : Math.floor(Math.random() * 1000),
            title: args.title,
            isCompleted: args.isCompleted
        }
        todos.unshift(todo);
        return todo;
    },
}
const GraphQL = graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
});

export default GraphQL;
```
3. Wrap GraphQL with middleware 
  Create middleware function like this
    
```js
  // use on /graphql/middleware/isAuth.js
    const authenticateToken = handler => (req, res) => {
        req.user = {
            id: 5,
            name: "tested middleware",
            email: "Samu@gmail.com"
        }
        return handler(req, res)
    }
    // use like this 
    const GraphQL = graphqlHTTP({  })
    export default authenticateToken(GraphQL);

```
1. Setup Prisma & MongoDB
  Install Prisma as Dev Dependency: `npm install -D prisma`  & Prisma Client which connect with DB Client & works on schema definition  `npm install @prisma/client`

  * Init prisma schema `npx prisma init`
  * Create Model Schema on `prisma/schema.prisma` & add DATABASE_URL on `.env`
  PSL
```js
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["mongodb"]
}

model User {
  id        String   @id @default(dbgenerated()) @map("_id") @db.ObjectId
  email     String   @unique
  username  String?
  name      String?
  role      Role     @default(USER)
  createdAt DateTime @default(now())
}

model Post {
  id         String @id @default(dbgenerated()) @map("_id") @db.ObjectId
  slug       String
  title      String
  body       String
  image      String
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  published  Boolean  @default(false)
  userId     String?
}

enum Role {
  USER
  ADMIN
}

```
  * Genarate Schema `npx prisma generate`
 * Make Sure DATABASE_URL on `.env` file is correct.

2. Works :smile: