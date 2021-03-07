import express from 'express';
const router = express.Router();
import Location from '../controllers/location.controller.js'

router.post('/add', Location.AddLocation);

export default router;