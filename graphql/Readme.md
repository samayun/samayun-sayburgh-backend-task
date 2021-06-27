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
*  I have handled token based authentication by JWT
* 2 Tier Architecture .Application & API server hosted on a server for low cost & DB server hosted on different server.
* MVC Design PAttern implemented
* Authentication Header verified on both side (Client & bServer Side )
* User can create blog, read others blog update own blog & delete own blog
* User can see his/her profile
* Data managed via GraphQL. Here is that playground  . You can query & mutate following this documentation
* Frontend managed via Next.js. Because a blog app should be SEO friendly. Next.js is a good solution for this. Auto code splitting , lazy loading, image progressive loading is implemented by default. 


# Queries & Mutation
 * query login(email:String, password: String): AuthData
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
*  @query register(userInput: {name:String", username:String, email:String, password:String, role: "ADMIN" | "USER"}: AuthData
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

* @query posts
```js
query fethPosts {
  posts {
    id
    title
    slug
    body
    image
    author {
      id
      name
      username
      email
      role
    }
    isPublished
    createdAt
  }
}

```
* fetch Single Post By Slug
```
  query fetchPost($slug: String) {
    post(slug: $slug) {
      id
      title
      slug
      body
      author {
        name
        email
        role
      }
      image
      isPublished
    }
  }
```
* @mutation createPost

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
* @mutation updatePost

```js
mutation UpdatePost($key: String, $title: String, $slug: String, $body: String, $image: String, $author: String, $isPublished: Boolean) {
  updatePost(slug: $key, postInput: {title: $title, slug: $slug, body: $body, image: $image, author: $author, isPublished: $isPublished}) {
    id
    title
    slug
    author {
      id
      name
      email
      username
      role
    }
    body
    image
    isPublished
  }
}

```

* delete a postBySlug 

```js
mutation DeletePost($slug: String) {
  deletePost(slug: $slug) {
    id
    title
    slug
    author {
      id
      name
      email
      username
      role
    }
    body
    image
    isPublished
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
  username String? @unique
  name     String?
  password String
  role     String  @default("USER")
}

model Post {
  id          String   @id @default(dbgenerated()) @map("_id") @db.ObjectId
  slug        String   @unique
  title       String
  body        String
  image       String
  isPublished Boolean  @default(true)
  author      String
  createdAt   DateTime @default(now())
}
```


```js


```