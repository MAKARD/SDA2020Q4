const LIMIT = 1000; // limit the seq of Harshad numbers

module.exports = class HarshadNumbersCalculator {
    static logNumbers() {
        for (let i = 1; i <= LIMIT; i++) {
            const isHarshadNumber = i % HarshadNumbersCalculator.calculate(i) === 0;
            if (isHarshadNumber) {
                console.log(i);
            }
        }
    }

    static calculate(givenNumber) {
        let result = 0;
        while (givenNumber > 0) {
            result += givenNumber % 10;
            givenNumber = givenNumber / 10;
        }
        return result;
    }
};
