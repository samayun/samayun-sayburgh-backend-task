const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "sayburgh-task";

exports.generateJWTToken = (userData, expireDate = '5m') => {
    // 86400
    return jwt.sign(userData, JWT_SECRET_KEY, {
        expiresIn: expireDate
    });
}
exports.verifyToken = jwtToken => {
    try {
        return jwt.verify(jwtToken, JWT_SECRET_KEY);
    } catch (e) {
        return null;
    }
}
