function getProceededSpaces(
    maxColumnSize,
    columnNames,
    column,
) {
    const columnNamesLength = String(columnNames[column]).length;
    const isEven = columnNamesLength % 2 === 0;

    const limitMiddleware = !isEven ? Math.trunc : (result) => result;

    const getSpaces = (limitOffset = 0) => {
        let spaces = '';
        for (let i = 0; i < limitMiddleware((maxColumnSize - columnNamesLength) / 2) + limitOffset; i++) {
            spaces += ' ';
        }

        return spaces;
    }

    return getSpaces() + columnNames[column].toString() + getSpaces(!isEven ? 1 : 0);
}

module.exports = {
    getProceededColumns: function (
        loopParams = {
            columnCount: 0,
            columnNames: {},
            maxColumnSize: 0,
        },
        options = {
            appendBeforeEach: '',
            appendAfterEach: '',
            appendAfterAll: '',
            appendBeforeAll: ''
        }
    ) {
        const {
            columnCount,
            columnNames,
            maxColumnSize,
        } = loopParams;

        let result = options.appendBeforeAll || '';
        for (let column = 0; column < columnCount; column++) {
            result += options.appendBeforeEach || '';

            result += getProceededSpaces(
                maxColumnSize,
                columnNames,
                column,
            );

            result += options.appendAfterEach || '';
        }

        result += options.appendAfterAll || '';

        return result;
    }
}
