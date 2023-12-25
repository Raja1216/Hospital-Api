const Report = require('../models/reportModel');

// Create a patient report
const createReport = async (req, res) => {
  try {
    const { status } = req.body;
    const createdBy = req.user.id; // Assuming authentication middleware sets req.user
    const patientId = req.params.id;
    const report = new Report({ createdBy, patient: patientId, status });
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reports of a patient
const getAllReports = async (req, res) => {
  try {
    const patientId = req.params.id;
    const reports = await Report.find({ patient: patientId }).sort({ date: 'asc' });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all reports by status
const getAllReportsByStatus = async (req, res) => {
  try {
    const status = req.params.status;
    const reports = await Report.find({ status }).sort({ date: 'asc' });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createReport, getAllReports, getAllReportsByStatus };
