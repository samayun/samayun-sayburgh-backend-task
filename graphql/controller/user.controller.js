const { generateJWTToken, makeHash, compareHash } = require('../utils/jwt');
const { validateRegisterRequest, validateLoginRequest } = require('../validator/user.validator');

const responseAuthTokenFromUser = user => {
    const loggedInUser = {
        ...user,
        password: null
    }
    const access_token = generateJWTToken(loggedInUser);
    const refresh_token = generateJWTToken(loggedInUser, "7d");
    return {
        userId: user.id,
        user: loggedInUser,
        access_token,
        refresh_token
    };
}

const userController = {
    users: async (_, req) => {
        try {
            const users = await req.prisma.user.findMany();
            return users;
        } catch (error) {
            throw error;
        }
    },
    login: async ({ email, password }, { prisma }) => {
        try {
            // VALIDATION request
            validateLoginRequest({ email, password });
            // CHECK is the user is already exists on database otherwise show errors
            let user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                throw new Error("There has no user found with this email");
            }
            // when user is available , then check does unput password is valid with db hashed password
            // if doesn't match means password is incorrect
            let isMatch = await compareHash(password, user.password);
            if (user && !isMatch) {
                throw new Error("Password is incorrect");
            }
            // SEND RESPONSE TOKEN
            return responseAuthTokenFromUser(user);

        } catch (err) {
            throw new Error(err);
        }
    },
    register: async ({ userInput }, { prisma }) => {
        try {
            // 1. Validate request
            const { username, email, password } = userInput;
            validateRegisterRequest(userInput);
            // 2. CHECK is user account already exists
            const hasUserAccount = await prisma.user.findUnique({ where: { email } });
            if (hasUserAccount) {
                throw new Error("User account already exists");
            }
            // 3. HASH password
            // name , email, password
            const hashedPassword = await makeHash(password, 12);
            // 4. CREATE User & back response
            const user = { ...userInput, password: hashedPassword };
            const createdUser = await prisma.user.create({ data: user });

            // RESPONSE Token Credentials 
            return responseAuthTokenFromUser(createdUser);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = userController;
