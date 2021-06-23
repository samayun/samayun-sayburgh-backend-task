const Event = require('../../model/Event.model');
const UserModel = require('../../model/User.model');
// const toHashMap = require('../../utils/Array.toHashMap');
const { getUserData, TransformEvent } = require('../functions/populate.function');

const eventResolver = {
    events: async () => {
        try {
            const eventsArray = await Event.find({})
            return eventsArray.map(TransformEvent);
        } catch (error) {
            throw error;
        }
    },
    createEvent: async (args, req) => {
        try {
            console.log(`creating event by userId =>  ` + req.userId)
            if (!req.isAuth) {
                throw new Error("Unauthenticated");
            }
            const event = new Event({
                ...args.eventInput,
                date: new Date(args.eventInput.date),
                creator: req.userId
            });

            const user = await getUserData(req.userId);
            if (!user) {
                throw new Error("User account not found");
            }
            const result = await event.save();
            user.createdEvents.push(event);
            await user.save();

            return TransformEvent(result);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = eventResolver;

