const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
    'mongodb+srv://omnistack:omnistack@cluster0-0gotz.mongodb.net/nodeapi?retryWrites=true&w=majority', 
    { useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);