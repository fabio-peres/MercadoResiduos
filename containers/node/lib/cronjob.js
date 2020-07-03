module.exports = function(app) {
    const _self = {};
    const Queue = app.models.queue;
    const _timeOperation = 2000;

    /**
     * executarAlgo
     */
    const executarAlgo = async () => {
        try {

        } catch (error) {
            console.error('lib - cronjob - executarAlgo: ', error);
            app.logger.error('lib - cronjob - sendSMS: ' + error);
            setTimeout(() => {
                executarAlgo();
            }, _timeOperation);
        }
    }

    /**
     * init
     */
    _self.init = () => {
        //executarAlgo();
    }

    return _self;
}