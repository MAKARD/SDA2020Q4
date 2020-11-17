const WrongAccountNameException = require('./lib/WrongAccountNameException');
const WrongPasswordException = require('./lib/WrongPasswordException');

module.exports = class RegisterAccountAction {
    constructor() {
        this.passwordChecker = null;
        this.accountManager = null;
    }

    validateName(name) {
        if (name.length <= 5) {
            throw new WrongAccountNameException(account.name);
        }
    }

    validatePassword(password) {
        if (password.length <= 8) {
            if (this.passwordChecker.validate(password) !== this.passwordChecker.result.OK) {
                throw new WrongPasswordException();
            }
        }
    }

    validateAccount(account) {
        this.validateName(account.name);
        this.validatePassword(account.password);
    }

    register(account) {
        this.validateAccount(account);

        account.setCreatedDate(new Date());

        account.setAddresses(this.getFullAddress(account));
        this.accountManager.createNewAccount(account);
    }

    getFullAddress(account) {
        const addresses = new Set();
        addresses.add(account.getHomeAddress());
        addresses.add(account.getWorkAddress());
        addresses.add(account.getAdditionalAddress());

        return addresses
    }

    setAccountManager(accountManager) {
        this.accountManager = accountManager;
    }

    setPasswordChecker(passwordChecker) {
        this.passwordChecker = passwordChecker;
    }
};
