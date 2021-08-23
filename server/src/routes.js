const UserController = require('./controllers/UserController.js');
const UserAuthenController =  require('./controllers/UserAuthenController');


module.exports = (app) => {
    app.post('/mouse',UserController.create)
    app.put('/mouse/:mouseId',UserController.put)
    app.delete('/mouse/:mouseId',UserController.remove)
    app.get('/mouse/:mouseId',UserController.show)
    app.get('/mouses',UserController.index)
   // app.post('/login',UserAuthenController.login)
}