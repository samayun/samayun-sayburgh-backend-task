const EventModel = require("../../model/Event.model");
const UserModel = require("../../model/User.model");
const dateToString = require("../../utils/date");

const TransformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator: getUserData.bind(this, event._doc.creator)
    }
}

const TransformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        createdEvents: getEventsData.bind(this, user._doc.createdEvents)
    }
}
const TransformBooking = booking => ({
    ...booking._doc,
    event: getSingleEventData.bind(this, booking.event),
    user: getUserData.bind(this, booking.user),
    createdAt: dateToString(booking.createdAt),
    updatedAt: dateToString(booking.updatedAt),
})

const getEventsData = async eventIds => {
    try {
        const eventsArray = await EventModel.find({ _id: { $in: eventIds } })
        return eventsArray.map(TransformEvent);
    } catch (error) {
        throw new Error(error);
    }
}
const getUserData = async userId => {
    try {
        const user = await UserModel.findById(userId);
        return TransformUser(user);
    } catch (error) {
        throw new Error(error);
    }
}

const getSingleEventData = async eventId => {
    try {
        const event = await EventModel.findById(eventId);
        return TransformEvent(event);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getUserData,
    getEventsData,
    getSingleEventData,
    TransformEvent,
    TransformBooking
}