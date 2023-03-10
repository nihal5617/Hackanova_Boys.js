import express from 'express';
import { signup, signin, getAllUsers, updateCoins } from '../controllers/user.js';
import { getCropDetailsById, postCropDetails } from '../controllers/cropdetails.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/getAllUsers', getAllUsers);
router.get('/getCropDetailsById/:id', getCropDetailsById);
router.post('/postCropDetails', postCropDetails);
router.post('/updateToken/:id', updateCoins);

export default router;