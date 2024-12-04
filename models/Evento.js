const mongoose = require('mongoose');

const EventoSchema = mongoose.Schema({
    tituloEvento: {
        type: String,
        require: true
    },
    facultadEvento: {
        type: String,
        require: true
    },
    fechaInicio: {
        type: Date,
        require: true
    },
    horaInicio: {
        type: String,
        require: true
    },
    validezEvento:{
        type:String,
        require:true
    },
    maximoAsistentes: {
        type: Number,
        require: true
    },
    lugarEvento: {
        type: String,
        require: true
    },
    imagenEvento: {
        type: String,
        require: true
    },
    anfitrionEvento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    estadoEvento: {
        type: String,
        default: "iniciado",
        require: false
    },
    usuariosInscritos: [
        {
            usuario: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            asistencia: {
                type: Boolean,
                default: false,
            }
        }
    ], 
    codigoAsistencia: {
        code: String,
        expiresAt: Date,
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Evento', EventoSchema);