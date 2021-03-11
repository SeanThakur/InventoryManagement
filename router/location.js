import express from 'express';
const router = express.Router();
import Location from '../controllers/location.controller.js'

router.post('/add', Location.AddLocation);
router.get('/all', Location.AllLocation);

export default router;