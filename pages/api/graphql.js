const { graphqlHTTP } = require("express-graphql");
const schema = require("../../graphql/model/index");
const rootValue = require("../../graphql/controller/index");
import authenticateToken from "../../graphql/middleware/isAuth";

const GraphQL = graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
});

export default authenticateToken(GraphQL);
