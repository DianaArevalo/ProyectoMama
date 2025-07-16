const express = require('express')
const app = express();
const cors = require('cors');
const db = require('./helpers/db');
require('dotenv').config();

app.set('port', process.env.PORT || 3200);
app.listen(app.get('port'), () => {
console.log(`Servidor en puerto ${app.get('port')}`);
});


app.use(express.json());
app.use(cors());

const isProduction = process.env.MONGO_URI === 'produccion';
app.set('port', process.env.PORT || 3200);

let server;

if (isProduction) {

    const options = {
        //cuando tenga produccion AWS S3 importar fs y 
        // key: fs.readFileSync(process.env.SSL_KEY),
        // cert: fs.readFileSync(process.env.SSL_CERT)
    }
     
        server = https.createServer(options, app).listen(app.get('port'), ()=> {
            console.info('servidor iniciado en PRODUCCION con HTTPS');
            console.info(`endpoint: https://localhost:${app.get('port')}`)
        })   
} else {

    server = app.listen(app.get('port'), ()=>{
        console.info('servidor iniciado en DESARROLLO sin HTTPS');
        console.info(`endpoint: http://localhost:${app.get('port')}`)
    })    
}





