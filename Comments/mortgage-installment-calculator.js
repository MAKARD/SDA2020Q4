const InvalidInputException = require('./lib/InvalidInputException');

exports.calculateMonthlyPayment = function (principalAmount, term, rate) {
    if (principalAmount < 0 || term <= 0 || rate < 0) {
        throw new InvalidInputException('Negative values are not allowed');
    }

    const rateDecimal = rate / 100;
    const termYears = term * 12;

    if (!rateDecimal) {
        return principalAmount / termYears;
    };

    const monthlyRate = rateDecimal / 12;

    const monthlyPayment = (principalAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termYears));

    return monthlyPayment;
}
