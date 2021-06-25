const inputs = `
    input UserInput {
        name: String
        username: String
        email: String!
        password: String!
        role: String
    }
    input PostInput {
        title:String
        slug:String
        body:String
        image: String
        isPublished: Boolean
        author: String
    }
`
module.exports = inputs;