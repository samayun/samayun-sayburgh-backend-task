const postController = {
    posts: async (args, req) => {
        console.log(req.user)
        console.log(process.env.DATABASE_URL)
        return await req.prisma.post.findMany()
    },
    createPost: async ({ postInput }, req) => {
        console.log(req.user)
        const createsPost = await req.prisma.post.create({ data: postInput });
        console.log(createsPost)
        return createsPost;
    }
}

module.exports = postController