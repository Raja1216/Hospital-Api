const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const authMiddleware = require('../middlewares/authMiddleware');

// Protected routes
router.use(authMiddleware.authenticateToken);

router.post('/:id/create_report', reportController.createReport);
router.get('/:id/all_reports', reportController.getAllReports);
router.get('/reports/:status', reportController.getAllReportsByStatus);

module.exports = router;
