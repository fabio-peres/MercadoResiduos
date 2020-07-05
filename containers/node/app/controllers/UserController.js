module.exports = function (app) {
    const _self = {};
    const StatusReport = app.models.User;

    /**
     * getUser
     * @param {Object} req
     * @param {Object} res
     * @route /api/status-report/:imei
     * @method GET
     */
    _self.get = async (req, res) => {
        try {
            const statusReport = await StatusReport.findOne({ dev_id: req.params.imei })
                .sort({ date_module: -1 });

            if (statusReport) {
                res.status(200).json({
                    status: 200,
                    message: 'Status Report',
                    data: statusReport,
                    total: 1
                });
            } else {
                res.status(400).json({
                    status: 400,
                    message: 'module not found',
                    data: null,
                    total: 0
                });
            }
        } catch (error) {
            app.logger.error('app - controllers - StatusRepost - get: ' + error);
            res.status(500).json({
                status: 500,
                message: 'Internal server error',
                data: error.stack
            });
        }
    }

    /**
     * authorizeRequest
     * @param {Object} req
     * @param {Object} res
    */
    _self.authorizeRequest = async (req, res, next) => {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).json({
                errors: ['Login required'],
            });
        }

        const [, token] = authorization.split(' ');

        try {
            const dados = jwt.verify(token, process.env.TOKEN_SECRET);
            const { id, email } = dados;

            const user = await User.findOne({
                where: {
                    id,
                    email,
                },
            });

            if (!user) {
                return res.status(401).json({
                    errors: ['Usuário inválido'],
                });
            }

            req.userId = id;
            req.userEmail = email;
            return next();
        } catch (e) {
            return res.status(401).json({
                errors: ['Token expirado ou inválido.'],
            });
        }

    }

    return _self;
}