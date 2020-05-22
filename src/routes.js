const express = require('express');
const OngController = require('./controllers/OngController');
const routes = express.Router();
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);


routes.get('/profile', ProfileController.index);


routes.post('/sessions', SessionsController.create);

module.exports = routes;