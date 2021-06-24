const { graphqlHTTP } = require("express-graphql");
const model = require("../../graphql/model/index");
const controllers = require("../../graphql/controller/index");
import authenticateToken from '../../graphql/middleware/isAuth';

const GraphQL = graphqlHTTP({
    schema: model,
    rootValue: controllers,
    graphiql: true,
    customFormatErrorFn(error) {
        return {
            ...error,
            message: error.message,
            name: error.name || "An error occured",
            code: error.originalError ? error.originalError.code : 500
        }
    }
});

export default authenticateToken(GraphQL);