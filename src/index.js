const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Zuri Training on MDB');
});

app.listen(PORT, () => console.log(`serving on port ${PORT} `));