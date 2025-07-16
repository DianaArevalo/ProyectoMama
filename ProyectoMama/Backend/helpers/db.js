const mongoose = require('mongoose');
const config = require('../config/config.json');

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


let connect;
if (config.db === 'local') {
    connect = config.connectionStringLocal;
} else if(config.db === 'remote') {
    connect =  config.connectionStringRemote;
}

mongoose.connect(connect, connectionOptions)
    .then(() => console.info('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error al conectar MongoDB:', err));


    mongoose.Promise = global.Promise;


module.exports = {
    Customer: require("../routes/info/ContactInfo.model").customer,
    Partner: require("../routes/info/ContactInfo.model").partner,    
    mongoose
}


