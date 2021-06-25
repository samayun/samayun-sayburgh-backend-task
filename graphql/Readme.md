# Developer's Book 

<h2 align="center"> SDL-first GraphQL Blog API Application </h2>

<p align="center">      
  <img src="https://miro.medium.com/max/6000/1*ZQywXQQMs32Dray68Sjptg.jpeg" alt="conference-events"  width="500px" /> </br>
</p>

Production Playground URL : https://developersbook.vercel.app/api/graphql

Development Playground URL : http://localhost:3000/api/graphql

# Technical Features

* GraphQL Server which gives a flexible way to query/exchange data between server & client
* MVC Design Pattern implemented for easy mangement
* Prisma used for flexible Database Query. If team decides to change Database no need to change any codes just change the DB_CONNECTION_STRING from Hosted Server's ENVIRONMENT_VARIABLE
* Batch Query for optimize fetching data
* 

# Queries & Mutation
### @query login(email:String, password: String): AuthData
```js
{
  login(email:"samayun.m.chowdhury@gmail.com", password:"123456") {
    userId
    user {
      id
      name
      username
      email
    }
		access_token
    refresh_token
  }
}
```
### @query register(userInput: {name:String", username:String, email:String, password:String, role: "ADMIN" | "USER"}: AuthData
```js
  mutation {
    register(userInput: {name: "Zahid Khan", username: "samayunmc", email: "samayun.m.chowdhury@gmail.com", password: "123456", role: "ADMIN"}) {
    userId
    user {
      id
      name
      username
      email
    }
		access_token
    refresh_token
    }
  }

```

### @query posts
```js
{
  posts {
    id
    slug
    title
    body
    image
	}
}
```

### @mutation createPost

```js
mutation {
  createPost(postInput: {
    title: "GraphQL what ? why? how?", 
    slug: "graphql-what-why-how", 
    body: "It's a great allterrnative waay of rest to make flexible API", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44sFJWGraHIV6K6lAGdC4IXmLElNaOjkgbQ&usqp=CAU"
}){
    id
    title
    slug
    body
    image
  }
}

```


# PSR (Prisma Schema)

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
  id       String  @id @default(dbgenerated()) @map("_id") @db.ObjectId
  email    String  @unique
  username String?
  name     String?
  password String
  role     String  @default("USER")
}

model Post {
  id         String   @id @default(dbgenerated()) @map("_id") @db.ObjectId
  slug       String
  title      String
  body       String
  image      String
  isPulished Boolean
  author     String
  createdAt  DateTime @default(now())
}

```