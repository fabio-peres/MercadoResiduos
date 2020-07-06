const request = require('request');

module.exports = function (app) {
    const _self = {};
    const Endereco = app.models.Endereco;

    /**
     * cadastrarEnderecoUsuario
     * @param {Object} req
     * @param {Object} res
     * @route /api/endereco
     * @method POST
     */
    _self.cadastrarEnderecoUsuario = async (req, res) => {
        try {
            const novoEndereco = await Endereco.create(req.body);

            const { id, logradouro, numero, bairro, cep, cidade, usuario_id } = novoEndereco;

            return res.status(200).json({ id, logradouro, numero, bairro, cidade, cep, usuario_id });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errors: e.message,
            });
        }
    }

    /**
     * buscarAgenciaCorreios
     * @param {Object} req
     * @param {Object} res
     * @route /api/endereco/correios/:id
     * @method POST
     */
    _self.buscarAgenciaCorreios = async (req, res) => {
        try {
            const id = req.params.id;
            const endereco = await Endereco.findOne({ where: { id } });
            console.log(endereco)
            console.log(endereco.cidade)
            console.log(endereco.bairro)

            const { cidade, bairro } = endereco;
            const _options = {
                url: `https://maps.googleapis.com/maps/api/distancematrix/json?
                origins=30441011&
                destinations=correios+${cidade}+${bairro}&
                mode=CAR&
                language=PT&
                key=AIzaSyAcdewADbYDBKLbU4HlJkuxJ8st7rARuK4`
            }

            return await new Promise((resolve, reject) => {
                request.post(_options, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode == 201) {
                            resolve(body);
                        } else {
                            console.log(body);
                            reject(erroCode(body));
                        }
                    }
                });
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                errors: e.message,
            });
        }
    }

    return _self;
}