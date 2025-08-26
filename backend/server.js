const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(express.json());

// ✅ CORS config
var corsoptions = {
    origin: ['http://localhost:5173', 'https://portfolio-qjz6.onrender.com', 'https://portfolio-qjz6.onrender.com/'],
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
};
app.use(cors(corsoptions));

// ✅ Load old feedback data from file (if exists)
let allfeedback = [];
const feedbackFile = 'feedback.json';

if (fs.existsSync(feedbackFile)) {
    try {
        const data = fs.readFileSync(feedbackFile, 'utf8');
        allfeedback = JSON.parse(data);
        console.log("✅ Loaded old feedback:", allfeedback.length, "entries");
    } catch (err) {
        console.error("⚠️ Error reading feedback.json:", err);
    }
}

// GET route
app.get("/", (req, res) => {
    res.send(`Hello, your Portfolio server is working.`);
});

app.get("/feedbacks", (req, res) => {
    res.send(allfeedback)
})
// POST route
app.post("/post", (req, res) => {
    const data = req.body;

    // Add to in-memory array
    allfeedback.push(data);

    // Save updated feedbacks to JSON file
    fs.writeFile(feedbackFile, JSON.stringify(allfeedback, null, 2), (err) => {
        if (err) {
            console.error("❌ Error saving feedback:", err);
            return res.status(500).send("Error saving feedback");
        }
        console.log("✅ Data received from:", data.email, data.feedback);
        res.status(200).send("Feedback saved successfully ✅");
    });
});

// Server
app.listen(4000, () => {
    console.log("🚀 Server running at http://localhost:4000");
});
