function checkIsAuth(req) {
    if (!req.isAuth) {
        throw new Error("Unauthenticated");
    }
}

function checkIsAdmin(req) {
    if (!req.isAuth) {
        throw new Error("Unauthenticated");
    }
    if (req.user & req.user.role !== 'ADMIN') {
        throw new Error("Admin previlege");
    }
}


module.exports = {
    checkIsAuth,
    checkIsAdmin
}