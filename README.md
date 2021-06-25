<h2 align="center"> Developer's Book Blog Application </h2>

<p align="center">      
      <img src="https://miro.medium.com/max/6000/1*ZQywXQQMs32Dray68Sjptg.jpeg" alt="conference-events"  width="500px" /> </br>
</p>

  * API : [Developer's Book GraphQL Playground](https://developersbook.vercel.app/api/graphql)

  * Demo : [Developer's Book Live Site](https://developersbook.vercel.app)

## Homepage
![Homepage Developer's Book](public/preview.png)
## Documentation

* [How to work with multiple branch or team collaboration](docs/multile-branch-team-collaboration-guideline.md)

* [How to Setup Prisma GrapHQL & Next.js Application ](docs/how-to-setup-graphql-prisma-nextjs-app.md)

## How to run this project
 * Clone first `git clone https://github.com/samayun/samayun-sayburgh-backend-task.git samayun-sayburgh-backend-task`
 * `cd samayun-sayburgh-backend-task`
 * run command `npm install` 
 * rename file `.default.env` to `.env` & must include database string on ENVIRONMENT VARIABLES
```
  DATABASE_URL  = DATABASE_CONNECTION_STRING_for_production
```
 * run command `npm run dev`
 * browse: http://localhost:3000 for seeing main application views
 * browse to api query by GraphiQL: http://localhost:3000/api/graphql
# Features
* User can create blog
* anyone can views blogs
# Used Technologies

Backend [API SERVER URI http://localhost:3000/api/graphql ]
*  Language : Node.js
*  Framework : Express.js ( express-graphql wrapper )
*  ORM : Prisma
*  Database : MongoDB

Frontend

*  Language : JavaScript
*  Framework : NEXT.js ( express-graphql wrapper )
*  UI component Library/framework : Tailwind CSS
*  State Mangement : Apollo
  