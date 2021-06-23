exports.UserInput = `
    input UserInput {
        name: String
        email: String!
        password: String!
    }`;

exports.EventInput = `
    input EventInput {
        title : String!
        description : String!
        price : Float!
        date : String!
    }`;

module.exports = this.UserInput + this.EventInput