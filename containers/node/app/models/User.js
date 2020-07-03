const Mongoose = require('mongoose');
module.exports = function(app) {
    return app.mongoose.model('User', new Mongoose.Schema({

    },{ collection: 'User' }));
}
