const jwt = require('jsonwebtoken');

module.exports = function (app) {
    const _self = {};
    const User = app.models.User;

    /**
     * getUser
     * @param {Object} req
     * @param {Object} res
     * @route /api/token
     * @method GET
     */
    _self.get = async (req, res) => {
        try {

            const { email = '', password = '' } = req.body;

            if (!email || !password) {
                return res.status(401).json({
                    errors: ['Credenciais inválidas'],
                });
            }

            const user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({
                    errors: ['Usuário não existe'],
                });
            }

            if (!(await user.passwordIsValid(password))) {
                return res.status(401).json({
                    errors: ['Senha inválida'],
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

    return _self;
}