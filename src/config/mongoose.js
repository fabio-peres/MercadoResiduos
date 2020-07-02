import Mongoose from 'mongoose';

module.exports = function() {
    const _self = {};
    const _options = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        autoIndex: true, 
        reconnectTries: Number.MAX_VALUE, 
        reconnectInterval: 500, 
        poolSize: 10, 
        bufferMaxEntries: 0,
        connectTimeoutMS: 10000, 
        socketTimeoutMS: 45000, 
        family: 4, 
        auth: {
            user: null,
            password: null
        }
        
    };

    const getConfig = () => {
        const config = {
            database: process.env.NODE_MONGO_DBNAME || "monitor",
            host: process.env.NODE_MONGO_HOST || 'ec2-52-91-236-111.compute-1.amazonaws.com',
            user: process.env.NODE_MONGO_USER || '',
            pass: process.env.NODE_MONGO_PASS || '',
            port: process.env.NODE_MONGO_PORT || 27017
        };
        return config;
    }

    _self.getConnection = (cb) => {
        try {
            const config = getConfig();
            _options.auth.user = config.user;
            _options.auth.password = config.pass;
            config.uri = process.env == 'production' ? 'mongodb://' + config.host +':' + config.port + ',198.72.112.23:' + config.port + '/' + config.database + '?replicaSet=rsjmv' : 'mongodb://' + config.host +':' + config.port + '/' + config.database;
            Mongoose.connect(config.uri, _options, (error, conn) => {
                if (error) {
                    console.error(error);
                } else {
                    console.log("Mongo connected")
                    cb(conn);
                }
            });
        } catch (error) {
            console.error(error);   
        }
    }
    return _self;
}