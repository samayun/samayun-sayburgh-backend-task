const userResolver = require('./user.resolver');
const eventResolver = require('./event.resolver');
const bookingResolver = require('./booking.resolver');

const rootValue = {
    ...userResolver,
    ...eventResolver,
    ...bookingResolver
}

module.exports = rootValue;