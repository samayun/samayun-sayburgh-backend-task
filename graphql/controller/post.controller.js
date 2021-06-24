const { checkIsAuth } = require("../authorization/authentication.helper");

const postController = {
    posts: async (args, req) => {
        checkIsAuth(req);
        return await req.prisma.post.findMany()
    },
    createPost: async ({ postInput }, req) => {
        checkIsAuth(req);
        console.log(req.user);
        const createsPost = await req.prisma.post.create({ data: postInput });
        console.log(createsPost)
        return createsPost;
    }
}

module.exports = postController