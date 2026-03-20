const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, Images) from the current directory
app.use(express.static(path.join(__dirname, '')));

// Catch-all route to serve the main index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`[Node.js Future Server] Portfolio running beautifully at http://localhost:${PORT}`);
    console.log(`Ready to expand with APIs, Database connections, and MCP Tools!`);
});
