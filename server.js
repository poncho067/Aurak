const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

let appointments = [];

// Endpoint to handle appointment scheduling
app.post('/appointments', (req, res) => {
    const appointment = req.body;
    if (!appointment.name || !appointment.email || !appointment.datetime) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    appointments.push(appointment);
    res.status(201).json({ message: 'Appointment scheduled successfully', appointment });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});