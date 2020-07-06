module.exports = function (app) {
    const controller = app.controllers.PontosController;
    app.route('/api/pontos')
        .get(controller.calcularPontos);
}