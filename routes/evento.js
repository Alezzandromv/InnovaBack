const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/EventoController')


router.post('/registrar', eventoController.registrarEvento );
router.get('/', eventoController.obtenerEventos);
router.put('/:id', eventoController.actualizarEvento);
router.get('/:id', eventoController.obtenerEvento);


module.exports = router;