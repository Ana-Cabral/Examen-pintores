const express = requiere('express');
//Vamos a routear a los pintores
let pintor = requiere('../controllers/PintoresController.js');

//creamos nuestras rutas
let router = express.router();

router.get('/, pintor.list'());

module.exports = router;