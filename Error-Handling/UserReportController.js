module.exports = class UserReportController {
    constructor() {
        this.userReportBuilder = null;
    }

    handleError = (error) => {
        switch (Number(error.message)) {
            case 0: {
                return null;
            }
            case -1: {
                return 'WARNING: User ID doesn\'t exist.';
            }
            case -2: {
                return 'WARNING: User have no submitted orders.';
            }
            case -3: {
                return 'ERROR: Wrong order amount.';
            }
            default: {
                return null;
            }
        }
    }

    getUserTotalOrderAmountView(userId, model) {
        const totalMessage = this.getUserTotalMessage(userId);
        if (totalMessage === null) 
            return 'technicalError';

        model.addAttribute('userTotalMessage', totalMessage);

        return 'userTotal';
    }

    getUserTotalMessage(userId) {
        let amount;
        try {
            amount = this.userReportBuilder.getUserTotalOrderAmount(userId);
        } catch (error) {
            return this.handleError(error);
        }

        return `User Total: ${amount}$`;
    }

    getUserReportBuilder() {
        return this.userReportBuilder;
    }

    setUserReportBuilder(userReportBuilder) {
        this.userReportBuilder = userReportBuilder;
    }
}
