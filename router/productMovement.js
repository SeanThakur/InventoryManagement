import express from 'express';
const router = express.Router();
import productMovement from '../controllers/productMovement.controller.js'

router.get('/', productMovement.AllMovement);
router.post('/add', productMovement.AddMovement);

export default router;