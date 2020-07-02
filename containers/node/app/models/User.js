const Mongoose = require('mongoose');
module.exports = function(app) {
    return app.mongoose.model('user', new Mongoose.Schema({
        name: {
            type: String,
            trim: true
        },
        cpf: {
            type: String,
            index: true,
            trim: true
        },
        email: {
            type: String,
            trim: true
        }
    },{ collection: 'user' }));
}
