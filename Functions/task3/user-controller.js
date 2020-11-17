const userAuthenticator = require('./user-authenticator');
const controller = require('./lib/controller');

module.exports = {
    authenticateUser: function (userName, password) {
        try {
            userAuthenticator.login(userName, password);
        } catch (error) {
            throw controller.generateFailLoginResponse();
        }

        return controller.generateSuccessLoginResponse(userName);
    },
};
