const express = require('express');
const {json} = require('express');
const connect = require('./config/database');
const userRoute = require('./router/userRoutes');


connect();
const app = express();
app.use(json());
app.use('/todos', userRoute);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send('Zuri Training on MDB');
});

app.listen(PORT, () => console.log(`serving on port ${PORT} `));