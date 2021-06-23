## Blog Application

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
## Used Technoligies

Backend
* API SERVER URI (`/api/graphql`);
*  Languege : Node.js
*  Framework : Express.js ( express-graphql wrapper )
*  ORM : Prisma
*  Database : MongoDB

Frontend

*  Languege : JavaScript
*  Framework : NEXT.js ( express-graphql wrapper )
*  UI component Library/framework : Tailwind CSS
*  State Mangement : Apollo
  