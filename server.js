const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the enhanced version if requested
app.get('/enhanced', (req, res) => {
    res.sendFile(path.join(__dirname, 'final-enhanced-index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🇻🇳 Vietnam Holiday Planner running on port ${PORT}`);
    console.log(`🚀 Environment: ${process.env.NODE_ENV || 'development'}`);
});