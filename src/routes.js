const express = require('express');
const UserController = require('./controllers/Usercontroller');
const AddressController = require('./controllers/Addresscontroller');
const TechController = require('./controllers/TechController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.delete('/users/:user_id/techs', TechController.delete);



module.exports = routes;