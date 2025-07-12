import express from 'express'
const userRouter=express.Router();

import contact from '../controller/userController.js';

userRouter.post('/email',contact);

export default userRouter;
