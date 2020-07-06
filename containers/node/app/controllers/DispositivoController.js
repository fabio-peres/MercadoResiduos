module.exports = function (app) {
    const _self = {};
    const Dispositivo = app.models.Dispositivo;

    /**
     * cadastrarDispositivo
     * @param {Object} req
     * @param {Object} res
     * @route /api/dispositivo
     * @method POST
     */
    _self.cadastrarDispositivo = async (req, res) => {
        try {
            const dispositivoInfos = req.body;

            const dispositivo = await Dispositivo.create(dispositivoInfos);

            return res.status(200).json({ data: dispositivo });

        } catch (error) {
            return res.status(500).json({
                errors: e.message,
            });
        }
    }

    return _self;
}