// Backend server configuration
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Middleverse OS Backend Running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Middleverse Server running on port ${PORT}`);
});

module.exports = app;
