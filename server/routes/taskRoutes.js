const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');

router.post('/create', protect, createTask);
router.get('/', protect, getTasks);
router.get('/:taskId', protect, getTaskById);
router.put('/:taskId', protect, updateTask);
router.delete('/:taskId', protect, deleteTask);

module.exports = router;
