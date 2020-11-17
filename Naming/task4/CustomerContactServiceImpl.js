module.exports = class CustomerContactServiceImpl {
    constructor(DAO) {
        this.DAO = DAO;
    }

    findDetailsByCustomerId(customerId) {
        return this.DAO.findById(customerId);
    }

    updateDetails(details) {
        this.DAO.update(details);
    }
};
