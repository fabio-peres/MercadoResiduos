module.exports = function (app) {
    const UserController = app.controllers.UserController;
    app.route('/api/user')
        .get(UserController.authorizeRequest, UserController.get);
}