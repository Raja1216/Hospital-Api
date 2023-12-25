const Patient = require('../models/patientModel');

// Patient registration
const registerPatient = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    let patient = await Patient.findOne({ phoneNumber });
    if (patient) return res.json(patient); // Patient already exists
    patient = new Patient({ phoneNumber });
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerPatient };
