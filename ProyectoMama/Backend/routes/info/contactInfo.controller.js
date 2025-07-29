const express = require('express');
const router = express.Router();
const contactInfoService = require('./contactInfo.service')


//customer
router.post('/getCustomer',  createCustomer);


//partner



module.exports = router


//funciones
async function createCustomer(req, res) {
    try {
        const customer = await contactInfoService.createCustomer(req.body);
        res.status(201).json({
            message: 'Datos guardados correctamente',
            data: customer
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error al guardar datos',
            error: err.message
        });
    }
}


