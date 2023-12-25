const Doctor = require('../models/doctorModel');
const jwt = require('../config/jwt');

// Doctor registration
const registerDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = new Doctor({ username, password });
    await doctor.save();
    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Doctor login
const loginDoctor = async (req, res) => {
  try {
    const { username, password } = req.body;
    const doctor = await Doctor.findOne({ username, password });
    if (!doctor) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.generateToken({ id: doctor._id, username: doctor.username });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerDoctor, loginDoctor };
