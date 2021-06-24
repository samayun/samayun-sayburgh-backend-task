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
    }
`
module.exports = inputs;