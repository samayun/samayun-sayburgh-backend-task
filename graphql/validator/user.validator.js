function validateRegisterRequest(userInput) {
    const { name, username, email, password, role } = userInput;
    if (!name) {
        throw new Error("Name is required");
    }
    if (!username) {
        throw new Error("Username is required");
    }
    if (!email) {
        throw new Error("Email is required");
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(email)) {
        throw new Error("You must use valid email ");
    }
    if (!password) {
        throw new Error("Password is required");
    }
    if (password.length < 6) {
        throw new Error("Password must be at least 6 character");
    }
    // if (role !== "USER" || role !== "ADMIN") {
    //     throw new Error("Invalid user type . only USER & ADMIN availavle for our app");
    // }
}
function validateLoginRequest({ email, password }) {
    if (!email) {
        throw new Error("Email is required");
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(email)) {
        throw new Error("You must use valid email ");
    }
    if (!password) {
        throw new Error("Password is required");
    }
    if (password.length < 6) {
        throw new Error("Password must be at least 6 character");
    }

}

module.exports = {
    validateRegisterRequest,
    validateLoginRequest
}