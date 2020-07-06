const Mongoose = require('mongoose');
module.exports = function (app) {
    const schema = new Mongoose.Schema({
        marca: {
            type: Date,
            required: true
        },
        modelo: {
            type: Date,
            required: true
        },
        tempo_uso: {
            type: String,
            required: true
        },
        esta_funcionando: {
            type: String,
            required: true
        },
        tela_quebrada: {
            type: String,
            required: true
        },
        touch_funciona: {
            type: String,
            required: true
        },
        botoes_funcionam: {
            type: String,
            required: true
        },
        camera_funciona: {
            type: String,
            required: true
        },
        audio_funciona: {
            type: String,
            required: true
        },
        bateria_viciada: {
            type: String,
            required: true
        }
    });
    return app.mongoose.model('dispositivo', schema);
}