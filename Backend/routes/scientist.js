import express from 'express';
import { signup, signin, getAllUsers } from '../controllers/scientist.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/getAllUsers', getAllUsers);

export default router;