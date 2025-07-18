const db = require('../../helpers/db');


const Customer = db.Customer
const Partner = db.Partner


module.exports = {
    getCustomer,
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getPartner,
    getPartners,
    createPartner, 
    updatePartner,
    deletePartner
}

//
// Clientes
//

async function getCustomer(id) {
  return await Customer.findById(id);
}

async function getCustomers() {
  return await Customer.find();
}

async function createCustomer(data) {
  const c = new Customer(data);
  return await c.save();
}

async function updateCustomer(id, data) {
  return await Customer.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
}

async function deleteCustomer(id) {
  return await Customer.findByIdAndDelete(id);
}

//
// Partners
//

async function getPartner(id) {
  return await Partner.findById(id);
}

async function getPartners() {
  return await Partner.find();
}

async function createPartner(data) {
  const p = new Partner(data);
  return await p.save();
}

async function updatePartner(id, data) {
  return await Partner.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
}

async function deletePartner(id) {
  return await Partner.findByIdAndDelete(id);
}
