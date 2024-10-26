// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection(require('./config'));

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) throw err;
        res.render('index', { tasks: results });
    });
});

app.post('/add', (req, res) => {
    const { title, description } = req.body;
    db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    db.query('UPDATE tasks SET status = ? WHERE id = ?', [status, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});