const { Router } = require('express');
const StateController = require('./controllers/StateController');
const CityController = require('./controllers/CityController');
const isAuthorized = require('./middleware/isAuthorized');

const routes = Router();

routes.get('/state', isAuthorized, StateController.index);
routes.get('/state/:id', isAuthorized, StateController.show);
routes.post('/state', isAuthorized, StateController.store);
routes.put('/state/:id', isAuthorized, StateController.update);
routes.delete('/state/:id', isAuthorized, StateController.destroy);

routes.get('/city', isAuthorized, CityController.index);
routes.get('/city/:id', isAuthorized, CityController.show);
routes.post('/city', isAuthorized, CityController.store);
routes.put('/city/:id', isAuthorized, CityController.update);
routes.delete('/city/:id', isAuthorized, CityController.destroy);

module.exports = routes;
