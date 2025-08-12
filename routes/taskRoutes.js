// routes/taskRoutes.js
import express from 'express';
import { createTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/api/recommendation', createTask); // POST route

export default router;
