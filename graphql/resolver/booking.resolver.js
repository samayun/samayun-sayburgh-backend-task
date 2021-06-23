const Booking = require('../../model/Booking.model');
const Event = require('../../model/Event.model');
const { TransformEvent, TransformBooking } = require('../functions/populate.function');

const bookingResolver = {
    bookings: async () => {
        try {
            const bookingsArray = await Booking.find({});
            return bookingsArray.map(TransformBooking);
        } catch (error) {
            throw error;
        }
    },
    bookEvent: async ({ eventId }, req) => {
        try {
            if (!req.isAuth) {
                throw new Error("Unauthenticated");
            }
            const event = await Event.findById(eventId);
            const booking = new Booking({
                event: event._id,
                user: req.userId
            });
            const bookingData = await booking.save();
            return TransformBooking(bookingData);
        } catch (error) {
            throw error;
        }
    },
    cancelBooking: async ({ bookingId }, req) => {
        try {
            if (!req.isAuth) {
                throw new Error("Unauthenticated");
            }
            const booking = await Booking.findById(bookingId).populate('event');
            await Booking.deleteOne({ _id: bookingId });
            return TransformEvent(booking.event);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = bookingResolver;
