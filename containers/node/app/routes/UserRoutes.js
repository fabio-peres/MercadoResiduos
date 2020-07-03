module.exports = function(app) {
    const controller = app.controllers.UserController;
    app.route('/api/user')
        .get(controller.get);
}