const DataLoader = require('dataloader');
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const postLoader = new DataLoader(slug => {
    console.log(typeof slug.toString() + " ids Requested");
    return getPost(slug.toString());
});
const userLoader = new DataLoader(userIds => {
    return getUser(userIds.toString());
});

const getUser = async userId => {
    try {
        console.log(`Fetched UserData =>  ${typeof userId.toString()}`);
        return prisma.user.findMany({ where: { id: userId.toString() } });
    } catch (error) {
        throw new Error(error);
    }
}
const getPost = async slug => {
    try {
        console.log(`Fetched postId =>  ${slug.toString()}`);
        const post = await prisma.post.findMany({ where: { slug: slug.toString() } });
        // console.log(TransformPost(post));
        return post;
    } catch (error) {
        console.log(error)
        throw new Error(error);
    }
}
const getPostsByUser = async userId => {
    try {
        console.log(`getPostsByUser userId =>  ${userId}`);
        return await prisma.post.findMany({ where: { id: userId } });
    } catch (error) {
        throw new Error(error);
    }
}

const TransformPost = async post => {
    try {
        return {
            ...post,
            author: userLoader.load(post?.author?.toString())
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    postLoader,
    userLoader,
    TransformPost
}