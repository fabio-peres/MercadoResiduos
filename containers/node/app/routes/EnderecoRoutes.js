module.exports = function (app) {
    const UserController = app.controllers.EnderecoController;
    app.route('/api/endereco')
        .post(UserController.cadastrarEnderecoUsuario);
    app.route('/api/correios/:id')
        .get(UserController.buscarAgenciaCorreios);
}