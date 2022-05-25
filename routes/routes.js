import express from "express";

import { getTours } from "../controllers/tourController.js";

const router = express.Router();

router.get('/', getTours);
router.post('/', createTour);

export default router;