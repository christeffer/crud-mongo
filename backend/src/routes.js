const { Router } = require('express');
const StateController = require('./controllers/StateController');
const CityController = require('./controllers/CityController');

const routes = Router();

routes.get('/state', StateController.index);
routes.post('/state', StateController.store);
routes.put('/state/:id', StateController.update);
routes.delete('/state/:id', StateController.destroy);

routes.get('/city', CityController.index);
routes.post('/city', CityController.store);
routes.put('/city/:id', CityController.update);
routes.delete('/city/:id', CityController.destroy);

module.exports = routes;
