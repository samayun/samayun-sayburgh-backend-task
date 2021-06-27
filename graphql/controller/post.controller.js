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
            const fetchedPost = await req.prisma.post.findFirst({ where: { slug } });
            console.log(fetchedPost)
            return TransformPost(fetchedPost);
        } catch (error) {
            throw new Error(error);
        }
    },
    updatePost: async ({ slug, postInput }, req) => {
        try {
            // checkIsAuth(req);
            const updatedPost = await req.prisma.post.update({
                where: {
                    slug: slug,
                },
                data: postInput,
            })
            console.log(`updatedPost`, updatedPost);
            return TransformPost(updatedPost);
        } catch (error) {
            throw new Error(error);
        }
    },
    deletePost: async ({ slug }, req) => {
        // checkIsAuth(req);
        try {
            const deletedPost = await req.prisma.post.delete({ where: { slug } });
            return TransformPost(deletedPost);
        } catch (error) {
            console.log(error);
            throw new Error("Record not found");
        }
    },
    profilePosts: async ({ userId }, req) => {
        // checkIsAuth(req);
        try {
            const profilePosts = await req.prisma.post.findMany({ where: { author: userId } });
            return profilePosts;
        } catch (error) {
            console.log(error);
            throw new Error("posts failed fetch");
        }
    },
}

module.exports = postController
