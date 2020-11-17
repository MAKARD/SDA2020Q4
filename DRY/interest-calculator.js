const AGE = 60;
const INTEREST_PERCENT = 4.5;
const SENIOR_PERCENT = 5.5;
const BONUS_AGE = 13;

function getDiffYear(start, end) {
    const diffYear = end.getFullYear() - start.getFullYear();

    if (end.getMonth() < start.getMonth()) {
        return diffYear - 1;
    }
    if (
        end.getMonth() === start.getMonth()
        && end.getDate() < start.getDate()
    ) {
        return diffYear - 1;
    }

    return diffYear;
}

function getDurationBetweenDatesInYears(from, to) {
    return getDiffYear(new Date(from), new Date(to));
}

function getDurationSinceStartDateInYears(startDate) {
    return getDiffYear(new Date(startDate), new Date());
}

function isAccountStartedAfterBonusAge(accountDetails) {
    return getDurationBetweenDatesInYears(
        accountDetails.getBirth(),
        accountDetails.getStartDate()
    ) > BONUS_AGE;
}

function calculateInterest(accountDetails) {
    if (!isAccountStartedAfterBonusAge(accountDetails)) {
        return 0;
    }

    const durationSinceStartDateInYears = getDurationSinceStartDateInYears(accountDetails.getStartDate()) / 100;

    if (AGE <= accountDetails.getAge()) {
        return accountDetails.getBalance() * durationSinceStartDateInYears * SENIOR_PERCENT;
    }

    return accountDetails.getBalance().doubleValue() * durationSinceStartDateInYears * INTEREST_PERCENT;
}

module.exports = {
    calculateInterest,
};
