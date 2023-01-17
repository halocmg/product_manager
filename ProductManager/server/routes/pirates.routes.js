const PirateController = require('../controllers/pirates.controller');

module.exports = (app) => {
app.get('/api/pirates', PirateController.findAll);
app.get('/api/pirates/:id', PirateController.findOne);
app.post('/api/pirates/new', PirateController.create);
// app.put('/api/pirates/update/:id', PirateController.update);
app.delete('/api/pirates/delete/:id', PirateController.delete);
}