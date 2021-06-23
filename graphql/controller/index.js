
const resolvers = {
    posts: async () => {
        try {
            return [
                {
                    _id: 1,
                    title: "OME",
                    description: "sasdsf "
                }
            ]
        } catch (error) {
            throw error;
        }
    }
}

module.exports = resolvers;