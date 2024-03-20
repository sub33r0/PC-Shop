const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const routes = require('./routes');
const {authMiddleware} = require('./authMiddleware/authMiddleware');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
}));
app.use(express.json());
app.use(authMiddleware);

app.use(routes);

mongoose.connect('mongodb://localhost:27017/pc-shop')
    .then(() => {
        console.log('Connected to the database...');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}...`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

