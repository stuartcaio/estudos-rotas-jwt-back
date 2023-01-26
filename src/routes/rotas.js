const express = require('express');
const Router = require('router');
const UserController = require('../controllers/UserController');
const router = Router();
const app = express();

app.use(express.json());

const user = new UserController;

router.get('/', user.inicio);
router.get('/mostrar', user.mostrar);
router.post('/adicionar', user.adicionar);
router.put('/editar/:id', user.editar);
router.delete('/excluir/:id', user.excluir);
router.post('/logar', user.logar);
router.get('/sistema', user.sistema);

module.exports = router;