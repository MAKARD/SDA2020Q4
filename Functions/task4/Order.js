module.exports = class Order {
    getPriceOfAvailableProducts() {
        this.products.forEach((product, index) => {
            if (!product.isAvailable) {
                this.products.splice(index, 1);
            }
        });

        return this.products.reduce((orderPrice, product) => {
            return orderPrice + product.productPrice;
        }, 0);
    }

    setProducts(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }
};
