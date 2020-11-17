module.exports = class AccountDetails {
    constructor(birth, startDate, balance, age) {
        this.setBirth(birth);
        this.setStartDate(startDate);
        this.setBalance(balance);
        this.setAge(age);
    }

    getBirth() {
        return this.birth;
    }

    setBirth(birth) {
        this.birth = birth;
    }

    getStartDate() {
        return this.startDate;
    }

    setStartDate(startDate) {
        this.startDate = startDate;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }
};
