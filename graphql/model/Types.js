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
        isPublished: Boolean
        author: User
        createdAt: String
    }
    type AuthData {
        userId: ID!
        user: User!
        access_token: String!
        refresh_token: String!
    }
`

module.exports = typedefs;