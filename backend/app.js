const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const wordRoutes = require('./routes/wordRoutes');

app.use('/api/word', wordRoutes);

module.exports = app;
