const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/doctors', require('./routes/doctorRoutes'));
app.use('/patients', require('./routes/patientRoutes'));
app.use('/reports', require('./routes/reportRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
