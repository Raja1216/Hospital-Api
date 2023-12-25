const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', patientController.registerPatient);

module.exports = router;
