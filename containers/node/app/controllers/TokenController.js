const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

module.exports = function (app) {
    const _self = {};
    const User = app.models.User;

    /**
     * get
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

            if (!(passwordIsValid(password))) {
                return res.status(401).json({
                    errors: ['Senha inválida'],
                });
            }

            const { id } = user;
            const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            });

            return res.json({ token, user: { nome: user.nome, id, email } });


        } catch (error) {
            app.logger.error('app - controllers - user - get: ' + error);
            res.status(500).json({
                status: 500,
                message: 'Internal server error',
                data: error.stack
            });
        }
    }

    const passwordIsValid = (password) => bcryptjs.compare(password, this.password_hash);

    return _self;
}
