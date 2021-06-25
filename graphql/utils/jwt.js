const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "NOOB";

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
        console.log('e:', e.message);
        return null;
    }
}

exports.makeHash = async data => await bcrypt.hash(data, 10);

exports.compareHash = async (data, hashedData) => await bcrypt.compare(data, hashedData);