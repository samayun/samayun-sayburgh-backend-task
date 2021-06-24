const typedefs = `
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
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: String!
    }
`

module.exports = typedefs;