const { buildSchema } = require("graphql");
const Types = require("./Types");
const Inputs = require("./Inputs");

const schema = buildSchema(`
    ${Inputs}
    ${Types}
    
    type RootQuery {
        posts: [Post!]!
        login(email: String, password: String) : AuthData
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

module.exports = schema;
