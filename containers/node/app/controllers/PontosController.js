const bcryptjs = require('bcryptjs');

module.exports = function (app) {
    const _self = {};
    const User = app.models.Dispositivo;

    /**
     * calcularPontos
     * @param {Object} req
     * @param {Object} res
     * @route /api/pontos
     * @method POST
     */
    _self.calcularPontos = async (req, res) => {
        try {

        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errors: e.message,
            });
        }
    }

    return _self;
}