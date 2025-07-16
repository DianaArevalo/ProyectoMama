const mongoose = require('mongoose');


const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.info('conectado')
    } catch (error) {
        console.error("Error al conectar MongoDB:", error.message);
                
    }
};


module.exports = connectDB;