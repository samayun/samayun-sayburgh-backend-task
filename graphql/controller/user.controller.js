const { generateJWTToken, makeHash, compareHash } = require('../utils/jwt');

const userController = {
    users: async (_, req) => {
        try {
            const users = await req.prisma.user.findMany();
            return users;
        } catch (error) {
            throw error;
        }
    },
    createUser: async ({ userInput }, { prisma }) => {
        try {
            // 1. Validate request
            const { name, email, password } = userInput;
            if (!name) {
                throw new Error("Name is required");
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
            const result = await prisma.user.create({ data: user })

            // const createUser = await req.prisma.user.create({ data: userInput });
            // console.log(createUser)
            // return createUser;
            return { ...result, password: null }
        } catch (error) {
            throw error;
        }
    },
    login: async ({ email, password }, { prisma }) => {

        try {
            // VALIDATION request
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
            let user = await prisma.user.findUnique({ where: { email } });
            if (!user) {
                throw new Error("There has no user found with this email");
            }
            // JWT VALIDATION
            let isMatch = await compareHash(password, user.password);
            if (user && !isMatch) {
                throw new Error("Password is incorrect");
            }
            // SEND RESPONSE TOKEN
            const loggedInUser = {
                id: user.id,
                name: user.name,
                email
            }
            const token = generateJWTToken(loggedInUser);
            return {
                userId: user.id,
                token,
                tokenExpiration: +Date.now() + 7 * 36000
            };

        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = userController;
