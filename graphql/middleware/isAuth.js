function authenticateToken(req, res, next) {
    req.user = {
        _id: 5,
        name: "Samu",
        eamil: "Sas@gmail.com"
    }
    return next();
}

module.exports = authenticateToken