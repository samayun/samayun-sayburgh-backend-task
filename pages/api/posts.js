import authenticateToken from '../../graphql/middleware/isAuth';
// const posts = [
//     {
//         id: "1",
//         slug: "graphql-what-why-how",
//         title: "GraphQL what ? why? how?",
//         body: "It's a great allterrnative waay of rest to make flexible API",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44sFJWGraHIV6K6lAGdC4IXmLElNaOjkgbQ&usqp=CAU"
//     }
// ]

const GraphQL = async (req, res) => {
    console.log(req.user)
    console.log(req.prisma.post)
    return res.json(await req.prisma.post.findMany());
}

export default authenticateToken(GraphQL)