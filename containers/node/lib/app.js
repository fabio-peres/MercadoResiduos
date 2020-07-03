const express = require("express");
const consign = require("consign");
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require("./logger")();
const helpers = require("./helpers");
const expressValidator = require('express-validator');
const connectorSequelize = require('./sequelize')();
const mongoose = require('./mongoose')();
const cronjob = require('./cronjob');
module.exports = function () {
    const app = express();
    app.connector = connectorSequelize;
    app.logger = logger.getLogger();
    app.debugging = logger.getDebug();
    app.helpers = helpers(app); 
    app.helpers.checkBasicFolders();
    app.set('port', process.env.NODE_PORT || 3000);
    app.env = process.env.NODE_ENV || 'local';
    app.debug = process.env.NODE_DEBUG || false;
    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true }));
    app.use(bodyParser.json({ limit: '1024mb' }));
    app.use(require('method-override')());
    app.use(cors());
    app.use(expressValidator());
    app.use(helmet());
    mongoose.getConnection((connection) => {
        if (connection) {
            app.mongoose = connection;
            consign({cwd: 'app', verbose: false})
                .include("models")
                .then("controllers")
                .then("routes")
                .into(app);
            app.cronjob = new cronjob(app);
            //app.cronjob.init();
            app.get('*', (req, res) => {
                res.status(200).json({
                    message: "Mercado Resíduos - Mega Hack 3.0"
                });
            });
        }
    });
    return app;
}