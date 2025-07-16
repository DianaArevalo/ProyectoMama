const express = require('express')
const app = express();
const cors = require('cors');
const connectDB = require('./helpers/db');
require('dotenv').config();

app.set('port', process.env.PORT || 3200);
app.listen(app.get('port'), () => {
console.log(`Servidor en puerto ${app.get('port')}`);
});


app.use(express.json());
app.use(cors());

connectDB();





