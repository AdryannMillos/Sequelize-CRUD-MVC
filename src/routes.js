const express = require('express');
const UserController = require('./controllers/Usercontroller');
const AddressController = require('./controllers/Addresscontroller');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/addresses', AddressController.store);

module.exports = routes;