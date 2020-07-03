module.exports = function(app) {
    const controller = app.controllers.StatusReportController;
    app.route('/api/user')
        .get(controller.get);
}