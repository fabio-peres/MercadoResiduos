const bcryptjs = require('bcryptjs');

module.exports = function (app) {
    const _self = {};
    const User = app.models.User;

    /**
     * createUser
     * @param {Object} req
     * @param {Object} res
     * @route /api/user
     * @method POST
     */
    _self.createUser = async (req, res) => {
        try {
            const { senha } = req.body;

            const salt = await bcryptjs.genSalt(10);
            const hash = await bcryptjs.hash(senha, salt);

            req.body.senha = hash;

            const newUser = await User.create(req.body);

            const { id, nome, email, documento, categoria } = newUser;
            return res.status(200).json({ id, nome, email, documento, categoria });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errors: e.message,
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