const typedefs = `
    type User {
        id: ID!
        name: String
        username: String
        email: String!
        password: String
        role: String
    }

    type Post {
        id: String
        title:String
        slug:String
        body:String
        image: String
    }
    type AuthData {
        userId: ID!
        user: User!
        token: String!
        tokenExpiration: String!
    }
`

module.exports = typedefs;