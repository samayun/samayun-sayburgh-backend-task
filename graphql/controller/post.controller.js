const { checkIsAuth } = require("../authorization/authentication.helper");
const { TransformPost, userLoader, postLoader } = require('../dataloader/transformed.dataloader')
const postController = {
    posts: async (args, req) => {
        console.log(`req.authHeader`, req.authHeader)
        console.log(req.isAuth)

        // checkIsAuth(req);
        console.log(process.env.DATABASE_URL)
        const posts = await req.prisma.post.findMany();
        return posts.map(TransformPost)
    },
    createPost: async ({ postInput }, req) => {
        try {
            // checkIsAuth(req);
            console.log(req.user);
            const createdPost = await req.prisma.post.create({ data: postInput });
            return TransformPost(createdPost);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    post: async ({ id, slug }, { req, prisma }) => {
        // checkIsAuth(req);
        try {
            const fetchedPost = await postLoader.load(slug);
            return TransformPost(fetchedPost);
        } catch (error) {
            throw new Error("post failed");
        }
    },
    updatePost: async ({ slug, postInput }, req) => {
        try {
            // checkIsAuth(req);
            console.log(req.user);
            const fetchedPost = await prisma.post.findUnique({ where: { slug } });
            const createsPost = await req.prisma.post.create({ data: postInput });
            console.log(createsPost);
            return createsPost;
        } catch (error) {
            throw new Error("post failed");
        }
    },
    deletePost: async ({ slug }, { req, prisma }) => {
        // checkIsAuth(req);
        try {
            const fetchedPost = await prisma.post.findUnique({ where: { slug } });
            return fetchedPost;
        } catch (error) {
            console.log(error);
            throw new Error("post failed");
        }
    },
    profilePosts: async ({ userId }, { req, prisma }) => {
        // checkIsAuth(req);
        try {
            const profilePosts = await prisma.post.findMany({ where: { author: userId } });
            return profilePosts;
        } catch (error) {
            console.log(error);
            throw new Error("posts failed fetch");
        }
    },
}

module.exports = postController