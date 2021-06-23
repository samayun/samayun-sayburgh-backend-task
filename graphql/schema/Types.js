exports.User = `
    type User {
        _id: ID!
        name: String
        email: String!
        password: String
        createdEvents : [Event!]!
    }`;

exports.Event = `
    type Event {
        _id: ID!,
        title: String!,
        description: String!,
        price: Float!,
        date: String!
        creator: User
    }`

exports.Booking = `
    type Booking {
        _id: ID!
        event: Event!
        user: User!
        createdAt: String!
        updatedAt: String!
    }`
exports.AuthData = `
    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: String!
    }
`
module.exports = this.Event + this.User + this.Booking + this.AuthData