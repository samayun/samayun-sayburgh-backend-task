import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const authenticateToken = handler => (req, res) => {
    req.user = {
        id: 5,
        name: "tested middleware",
        email: "Samu@gmail.com"
    }
    req.prisma = prisma;
    return handler(req, res)
}
module.exports = authenticateToken