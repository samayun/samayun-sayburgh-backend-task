const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "sayburgh-task";

exports.generateJWTToken = (userData, expireDate = '5m') => {
    // 86400
    return jwt.sign(userData, JWT_SECRET_KEY, {
        expiresIn: expireDate
    });
}
exports.verifyToken = jwtToken => {
    try {
        console.log(`JWT_SECRET_KEY`, JWT_SECRET_KEY)
        return jwt.verify(jwtToken, JWT_SECRET_KEY);
    } catch (e) {
        console.log('e:', e.message);
        return null;
    }
}
