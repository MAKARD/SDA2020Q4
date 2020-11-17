const NotDeliverableOrderError = require('./lib/NotDeliverableOrderError');

module.exports = class DeliveryOrderService {
    constructor(deliveryService, orderFulfillmentService) {
        this.setDeliveryService(deliveryService);
        this.setOrderFulfillmentService(orderFulfillmentService);
    }

    submitOrder(order) {
        if (this.deliveryService.isDeliverable(order)) {
            const products = order.getProducts();
            this.orderFulfillmentService.fulfilProducts(products);
        } else {
            throw new NotDeliverableOrderError();
        }
    }

    setDeliveryService(deliveryService) {
        this.deliveryService = deliveryService;
    }

    setOrderFulfillmentService(orderFulfillmentService) {
        this.orderFulfillmentService = orderFulfillmentService;
    }
};
