const { msg } = require('./lib/constants');

module.exports = class CollectOrderService {
    constructor(mainServer, echoServer) {
        this.setMainServer(mainServer);
        this.setEchoServer(echoServer);
    }

    submitOrder(order) {
        if (this.mainServer.isEligibleForCollection(order)) {
            this.echoServer.notifyCustomer(msg.READY_FOR_COLLECT, 4); // 4 - info notification level
        } else {
            this.echoServer.notifyCustomer(msg.IMPOSSIBLE_TO_COLLECT, 1); // 1 - critical notification level
        }
    }

    setMainServer(mainServer) {
        this.mainServer = mainServer;
    }

    setEchoServer(echoServer) {
        this.echoServer = echoServer;
    }
};
