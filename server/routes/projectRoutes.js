const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');
const { createProject, getProjects } = require('../controllers/projectController');

router.post('/create', protect, createProject);
router.get('/', protect, getProjects);

module.exports = router;
