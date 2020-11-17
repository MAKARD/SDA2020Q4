module.exports = {
    changeToMidnight: function (date, increase) {
        const newDate = new Date(date.getTime());

        newDate.setDate(newDate.getDate() + (increase ? 1 : -1));
        newDate.setHours(0, 0, 0, 0);

        return newDate;
    },
};
