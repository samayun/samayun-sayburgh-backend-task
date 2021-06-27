import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import { verifyToken } from '../utils/jwt'

const authenticateToken = handler => (req, res) => {
    req.prisma = prisma;
    const authHeader = req.headers['authorization']

    req.authHeader = authHeader

    if (!authHeader) {
        req.isAuth = false;
        const refreshTokenHeader = req.headers['refreshToken']
        // If get refresh token headers , authenticate this token
        if (refreshTokenHeader) {
            const refreshToken = refreshTokenHeader && refreshTokenHeader.split(' ')[1];
            const decodedRefreshToken = verifyToken(refreshToken);
            console.log(`decodedRefreshToken`, decodedRefreshToken);
            req.isAuth = true;
            req.user = decodedRefreshToken;
            req.userId = decodedRefreshToken._id;
            return handler(req, res);
        }
        return handler(req, res);
    }
    // authHeader : Bearer asjdgshjgfjhgfdajshg
    const token = authHeader && authHeader.split(' ')[1];

    if (!token || token == null || token == "") {
        req.isAuth = false;
        return handler(req, res);
    }

    const decodedToken = verifyToken(token);
    console.log(`decodedToken`, decodedToken);
    if (!decodedToken) {
        req.isAuth = false;
        return handler(req, res);
    }
    // res.cookie("access_token", decodedToken);
    // res.cookie("refresh_token", decodedToken);
    req.isAuth = true;
    req.user = decodedToken;
    req.userId = decodedToken._id;
    return handler(req, res);
}
module.exports = authenticateToken