module.exports = function (app) {
    const _self = {};
    const Endereco = app.models.Endereco;

    /**
     * cadastrarEndereco
     * @param {Object} req
     * @param {Object} res
     * @route /api/endereco
     * @method POST
     */
    _self.cadastrarEndereco = async (req, res) => {
        try {
            const novoEndereco = await User.create(req.body);

            const { id, logradouro, numero, bairro, cep, usuario_id } = novoEndereco;

            return res.status(200).json({ id, logradouro, numero, bairro, cep, usuario_id });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errors: e.message,
            });
        }
    }

    return _self;
}