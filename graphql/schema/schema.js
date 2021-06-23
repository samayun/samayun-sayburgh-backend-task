const { buildSchema } = require("graphql");
const schema = buildSchema(`
    type User {
        _id: ID!
        name: String
        email: String!
        password: String
    }
    type Post {
        _id: String
        title
        description
    }
    input UserInput {
        name: String
        email: String!
        password: String!
    }
    type RootQuery {
        posts: [Post!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
    }

    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);

module.exports = schema;
