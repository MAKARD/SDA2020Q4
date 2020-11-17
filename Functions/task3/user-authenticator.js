const userService = require('./lib/user-service');
const sessionManager = require('./lib/session-manager');

const authenticator = {
    login: function (userName, password) {
        const user = userService.getUserByName(userName);

        if (userService.isPasswordCorrect(user, password)) {
            sessionManager.setCurrentUser(user);
            return user;
        }

        throw new Error("Incorrect password");
    },
};

module.exports = authenticator;
