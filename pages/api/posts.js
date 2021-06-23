import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const posts = [
    {
        _id: 1,
        title: "OME",
        description: "sasdsf "
    }
]
const GraphQL = async (req, res) => {
    return res.json(await prisma.post.findMany());
}



export default GraphQL;