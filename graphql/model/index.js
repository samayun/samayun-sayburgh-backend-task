const { buildSchema } = require("graphql");
const Types = require("./Types");
const Inputs = require("./Inputs");

const schema = buildSchema(`
    ${Inputs}
    ${Types}
    
    type RootQuery {
        post(slug:String, id: ID): Post!
        postByTag(tag:String):[Post!]!
        posts: [Post!]!
        login(email: String, password: String) : AuthData
    }
    
    type RootMutation {
        register(userInput: UserInput): AuthData
        createPost(postInput: PostInput): Post
        updatePost(slug:String , postInput: PostInput): Post
        deletePost(slug:String): Post
        profilePosts(slug:String): [Post!]!
    }

    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);

module.exports = schema;
