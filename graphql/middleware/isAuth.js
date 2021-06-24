import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const authenticateToken = handler => (req, res) => {
    req.prisma = prisma;
    const authHeader = req.headers['authorization']

    if (!authHeader) {
        req.isAuth = false;
        return handler(req, res);
    }
    // authHeader : Bearer asjdgshjgfjhgfdajshg
    const token = authHeader && authHeader.split(' ')[1]

    if (!token || token == null || token == "") {
        req.isAuth = false;
        return handler(req, res);
    }

    const decodedToken = verifyToken(token);
    console.log(`decodedToken`, decodedToken)
    if (!decodedToken) {
        req.isAuth = false;
        return handler(req, res);
    }
    req.isAuth = true;
    req.user = decodedToken;
    req.userId = decodedToken._id;
    return handler(req, res);
}
module.exports = authenticateToken