const express = require('express');
const router = express.Router();
const contactInfoService = require('./contactInfo.service')


//customer
router.post('/getCustomer',  createCustomer);
//partner
router.post('/getPartner', createPartner)



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


async function createPartner(req, res) {
    try {
        const partner = await contactInfoService.createPartner(req.body);
        res.status(201).json({
            message: 'Datos guardados correctamente',
            data: partner
        })
    } catch (err) {
        res.status(500).json({
            message: 'Error al guardar los datos',
            error: err.message
        })        
    }
    
}

