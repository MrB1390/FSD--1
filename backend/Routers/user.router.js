import express from 'express';
import { createUser, getUserAll, getUserById, userLogin, verifyEmail } from '../Controller/user.controller.js';

const router = express.Router();

router.get('/userDetails',getUserAll);
router.post('/userDetails',createUser);
router.get('/userDetails/:id',getUserById);
router.post('/login',userLogin);
router.post('/email',verifyEmail);


export default router;