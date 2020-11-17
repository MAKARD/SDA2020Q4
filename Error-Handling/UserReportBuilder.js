module.exports = class UserReportBuilder {
    constructor() {
        this.userDao = null;
    }

    getUserTotalOrderAmount(userId) {
        const userDao = this.getUserDao();

        const user = userDao.getUser(userId);
        if (user === null) {
            throw new Error(-1);
        }

        const orders = user.getAllOrders();
        if (!orders.length) {
            throw new Error(-2);
        }

        let sum = 0;
        for (let order of orders) {
            if (order.isSubmitted()) {
                const total = order.total();
                if (total < 0) {
                    throw new Error(-3);
                }

                sum += total;
            }
        };

        return sum;
    }

    getUserDao() {
        if (!this.userDao) {
            throw new Error(0);
        }

        return this.userDao;
    }

    setUserDao(userDao) {
        this.userDao = userDao;
    }
}
