import userController from './/user.controller';
import postController from './post.controller';

const controllers = {
    ...postController,
    ...userController
}

module.exports = controllers;