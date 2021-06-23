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