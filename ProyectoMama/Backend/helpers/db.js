const mongoose = require('mongoose');
const config = require('../config/config.json');
require('dotenv').config();

// Opciones para la conexión
const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tlsAllowInvalidCertificates: false 
};

// Sobrescribimos el valor en config.json si hay .env
if (process.env.MONGO_URI) {
    config.connectionStringRemote = process.env.MONGO_URI;
}

// Definimos la URI final en base al entorno
const uri = process.env.MONGO_URI || (config.db === 'local' ? config.connectionStringLocal : config.connectionStringRemote);

// Función para conectar
async function connectDB() {
    try {
        await mongoose.connect(uri, connectionOptions);
        console.info(`✅ Conectado a MongoDB: ${uri.includes('localhost') ? 'Local' : 'Atlas'}`);
    } catch (err) {
        console.error('❌ Error al conectar MongoDB:', err.message);
        process.exit(1);
    }
}

mongoose.Promise = global.Promise;

// Exportamos conexión y modelos
module.exports = {
    connectDB,
    Customer: require("../routes/info/contactInfo.model").customer,
    Partner: require("../routes/info/contactInfo.model").partner,
    mongoose
};
