module.exports = function (app) {
    const UserController = app.controllers.EnderecoController;
    app.route('/api/endereco')
        .post(UserController.cadastrarEndereco);
}