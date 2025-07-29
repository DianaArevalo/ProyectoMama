const { Schema } = require('mongoose');
const mongoose = require('mongoose');

/**
 * Modelo de datos del contacto venta
 */

var contactCustomerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    title: {type: String},
    message: {type: String}
})

var contactTeamSchema = new Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true},
    phone: {type: String},
    area: {
        type: String,
        enum: [
            'Descuento al 20%',
            'Ser distribuidor Independiente',
            'Compra Normal'
        ],

        required: true,
    },

    createdAt: {type: Date, default: Date.now}
});


const customer = mongoose.model("customer", contactCustomerSchema);
const partner = mongoose.model("partner", contactTeamSchema);

module.exports = {
    customer,
    partner
}