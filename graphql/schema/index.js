const { buildSchema } = require("graphql");
const Types = require("./Types");
const Inputs = require("./Inputs");

const schema = buildSchema(`
    ${Types}    

    ${Inputs}

    type RootQuery {
        events: [Event!]!
        users: [User!]!
        bookings:[Booking!]!
        login(email:String!, password: String!): AuthData
    }

    type RootMutation {
        createEvent(eventInput: EventInput): Event
        createUser(userInput: UserInput): User
        bookEvent(eventId: ID!): Booking
        cancelBooking(bookingId: ID!): Event
    }

    schema {
        query: RootQuery,
        mutation : RootMutation
    }
`);

module.exports = schema;
