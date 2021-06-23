const { graphqlHTTP } = require("express-graphql");
// const schema = require("../../graphql/schema/schema");
// const rootValue = require("../../graphql/controller/index");
const { buildSchema } = require("graphql");
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const schema = buildSchema(`
    type User {
        id: ID!
        name: String
        email: String!
        password: String
    }
    type Post {
        id: String
        title:String
        slug:String
        body:String
        image: String
    }
    input UserInput {
        name: String
        email: String!
        password: String!
    }
    type RootQuery {
        posts: [Post!]!
    }
    input PostInput {
        title:String
        slug:String
        body:String
        image: String
    }
    type RootMutation {
        createUser(userInput: UserInput): User
        createPost(postInput: PostInput): Post
    }

    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);
const posts = [
    {
        title: "Graph QL Blog",
        slug: "new-post",
        body: "sasdsf ",
        image: "https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react/react.png"
    }
]
const GraphQL = graphqlHTTP({
    schema,
    rootValue: {
        posts: async (args, req) => {
            console.log(req.user)
            console.log(process.env.DATABASE_URL)
            return await prisma.post.findMany()
        },
        createPost: async ({ postInput }, req) => {
            console.log(req.user)
            const createsPost = await prisma.post.create({ data: postInput });
            console.log(createsPost)
            return createsPost;
        }
    },
    graphiql: true,
    customFormatErrorFn(error) {
        // return {
        //     message: error.message,
        //     name: error.name,
        //     code: error.originalError || "An error occured"
        // }
        return error;
    }
});

function authenticateToken(req, res, next) {
    req.user = {
        _id: 5,
        name: "Samu",
        eamil: "Sas@gmail.com"
    }
    return next();
}

const handler = [
    authenticateToken,
    GraphQL
];

export default GraphQL;