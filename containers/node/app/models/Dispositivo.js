const Mongoose = require('mongoose');
module.exports = function (app) {
    const schema = new Mongoose.Schema({
        marca: {
            type: Date,
            required: true
        },
        modelo: {
            type: String,
            required: true
        },
        tempo_uso: {
            type: Date,
            required: true
        },
        esta_funcionando: {
            type: Boolean,
            required: true
        },
        tela_quebrada: {
            type: Boolean,
            required: true
        },
        touch_funciona: {
            type: Boolean,
            required: true
        },
        botoes_funcionam: {
            type: Boolean,
            required: true
        },
        camera_funciona: {
            type: Boolean,
            required: true
        },
        audio_funciona: {
            type: Boolean,
            required: true
        },
        bateria_viciada: {
            type: Boolean,
            required: true
        },
        usuario_id: {
            type: String,
            required: true,
            index: true
        }
    });
    return app.mongoose.model('dispositivo', schema);
}