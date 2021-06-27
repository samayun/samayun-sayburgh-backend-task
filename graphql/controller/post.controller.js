const { checkIsAuth } = require("../authorization/authentication.helper");
const { TransformPost, userLoader, postLoader } = require('../dataloader/transformed.dataloader')
const postController = {
    posts: async (args, req) => {
        console.log(`req. console.log(req.user);`, req.user)
        console.log(req.isAuth)
        // checkIsAuth(req);

        const posts = await req.prisma.post.findMany();
        return posts.sort((a, b) => b.createdAt - a.createdAt).map(TransformPost)
    },
    createPost: async ({ postInput }, req) => {
        try {
            checkIsAuth(req);
            // console.log(`createPost `, req.isAuth)
            // console.log(`createPost req.user `, req.user)
            // const credentials = {
            //     ...postInput,
            //     // author: req.userId
            // }
            // console.log(`credentials `, credentials);
            const createdPost = await req.prisma.post.create({ data: postInput });
            return {
                ...createdPost,
                author: req.user
            };
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },
    post: async ({ slug }, req) => {
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
