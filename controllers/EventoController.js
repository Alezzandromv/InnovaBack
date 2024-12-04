const Evento = require('../models/Evento');

exports.registrarEvento = async (req, res) => {
    try {
        const nuevoEvento = new Evento(req.body);
        const eventoGuardado = await nuevoEvento.save();
        res.status(201).json({ 
            mensaje: 'Evento registrado con éxito', 
            evento: eventoGuardado 
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al registrar el evento', 
            error: error.message 
        });
    }
};



// Actualizar un evento existente
exports.actualizarEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const eventoActualizado = await Evento.findByIdAndUpdate(id, req.body, { 
            new: true, 
            runValidators: true 
        });
        if (!eventoActualizado) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
        res.status(200).json({ 
            mensaje: 'Evento actualizado con éxito', 
            evento: eventoActualizado 
        });
    } catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al actualizar el evento', 
            error: error.message 
        });
    }
};


// Obtener un evento por su ID
exports.obtenerEvento = async (req, res) => {
    const { id } = req.params;
    try {
        const evento = await Evento.findById(id).populate('anfitrionEvento usuariosInscritos');
        if (!evento) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
        res.status(200).json(evento);
    } catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al obtener el evento', 
            error: error.message 
        });
    }
};

// Obtener todos los eventos
exports.obtenerEventos = async (req, res) => {
    try {
        const eventos = await Evento.find().populate('anfitrionEvento usuariosInscritos');
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ 
            mensaje: 'Error al obtener los eventos', 
            error: error.message 
        });
    }
};