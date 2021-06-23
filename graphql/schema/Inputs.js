const inputs = `
    input UserInput {
        name: String
        email: String!
        password: String!
    }
    input PostInput {
        title:String
        slug:String
        body:String
        image: String
    }
`
module.exports = inputs;