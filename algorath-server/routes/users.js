

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.post('/' ,userController.createUsuario);
router.get('/' , userController.getUsuarios);
router.get('/:id' , userController.getUsuarioId )
router.put('/:id' , userController.updateUsuario );
router.delete('/:id' , userController.deleteUsuario);


module.exports = router;