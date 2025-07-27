const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/level1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'level1.html'));
});

app.get('/level2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'level2.html'));
});

app.get('/level3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'level3.html'));
});

app.get('/level4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'level4.html'));
});

app.get('/level5', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'level5.html'));
});

app.get('/final', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'final.html'));
});

// API endpoints for validating answers - EXACT MATCH REQUIRED
app.post('/validate-level1', (req, res) => {
    const { answer } = req.body;
    // Coffee riddle but answer is about Cabel
    const correctAnswers = ['cabel', 'Cabel', 'CABEL'];
    
    res.json({ 
        success: correctAnswers.includes(answer.trim())
    });
});

app.post('/validate-level2', (req, res) => {
    const { answer } = req.body;
    // Mouse reveal riddle
    const correctAnswers = ['mouse', 'computer mouse', 'pink mouse'];
    
    res.json({ 
        success: correctAnswers.includes(answer.toLowerCase().trim())
    });
});

app.post('/validate-level3', (req, res) => {
    const { answer } = req.body;
    // Room riddle - where they meet most often
    const correctAnswers = ['room', 'kavya\'s room', 'kavyas room', 'my room', 'your room', 'bedroom'];
    
    res.json({ 
        success: correctAnswers.includes(answer.toLowerCase().trim())
    });
});

app.post('/validate-level4', (req, res) => {
    const { answer } = req.body;
    // Almirah furniture question
    const correctAnswers = ['almirah', 'wardrobe', 'closet', 'dresser'];
    
    res.json({ 
        success: correctAnswers.includes(answer.toLowerCase().trim())
    });
});

app.post('/validate-level5', (req, res) => {
    const { answer } = req.body;
    // Final location riddle
    const correctAnswers = ['mist', 'behind mists', 'bombshell', 'perfume', 'love spell', 'peach'];
    
    res.json({ 
        success: correctAnswers.includes(answer.toLowerCase().trim())
    });
});

app.listen(PORT, () => {
    console.log(`🌸 Mystery website running on http://localhost:${PORT}`);
    console.log('💕 Ready to create magical moments!');
}); 