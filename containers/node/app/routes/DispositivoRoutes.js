module.exports = function (app) {
    const UserController = app.controllers.EnderecoController;
    app.route('/api/dispositivo')
        .post(UserController.cadastrarDispositivo);
}