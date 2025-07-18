require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./helpers/db');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MongoDB
connectDB();

// Puerto
const PORT = process.env.PORT || 3200;

// Rutas
app.use('/customer', require('./routes/info/contactInfo.controller'));

// Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
