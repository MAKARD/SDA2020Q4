const os = require('os');

const { getMaxColumnSize } = require('./getMaxColumnSize');
const { getProceededRows } = require('./getProceededRows');
const { getProceededColumns } = require('./getProceededColumns');

function getEmptyTable(tableName) {
    const textEmptyTable = '║ Table "' + tableName + '" is empty or does not exist ║';

    let result = '╔';
    for (let i = 0; i < textEmptyTable.length - 2; i++) {
        result += '═';
    }

    result += '╗' + os.EOL;
    result += textEmptyTable + os.EOL;
    result += '╚';

    for (let i = 0; i < textEmptyTable.length - 2; i++) {
        result += '═';
    }

    result += '╝' + os.EOL;
    return result;
}

function getColumnCount(dataSets) {
    const result = 0;
    if (dataSets.length > 0) {
        return dataSets[0].getColumnNames().length;
    }

    return result;
}

function getHeaderOfTheTable(dataSets) {
    const maxColumnSize = getMaxColumnSize(dataSets);
    const columnCount = getColumnCount(dataSets);

    let result = '';

    result += getProceededRows(
        columnCount,
        maxColumnSize,
        {
            appendBeforeAll: '╔',
            appendAfterAll: '╗' + os.EOL,
            appendAfterEach: '╦'
        }
    );

    result += getProceededColumns(
        {
            columnNames: dataSets[0].getColumnNames(),
            columnCount,
            maxColumnSize,
        },
        {
            appendBeforeEach: '║',
            appendAfterAll: '║' + os.EOL,
        }
    );

    //last string of the header
    if (dataSets.length > 0) {
        result += getProceededRows(
            columnCount,
            maxColumnSize,
            {
                appendBeforeAll: '╠',
                appendAfterEach: '╬',
                appendAfterAll: '╣' + os.EOL
            }
        );
    } else {
        result += getProceededRows(
            columnCount,
            maxColumnSize,
            {
                appendBeforeAll: '╚',
                appendAfterEach: '╩',
                appendAfterAll: '╝' + os.EOL
            }
        );
    }
    return result;
}

function getStringTableData(dataSets) {
    const maxColumnSize = getMaxColumnSize(dataSets);
    const columnCount = getColumnCount(dataSets);
    const rowsCount = dataSets.length;

    let result = '';

    for (let row = 0; row < rowsCount; row++) {
        const values = dataSets[row].getValues();

        result += getProceededColumns(
            {
                columnNames: values,
                columnCount,
                maxColumnSize,
            },
            {
                appendBeforeAll: '║',
                appendAfterEach: '║',
                appendAfterAll: os.EOL
            }
        );

        if (row < rowsCount - 1) {
            result += getProceededRows(
                columnCount,
                maxColumnSize,
                {
                    appendBeforeAll: '╠',
                    appendAfterEach: '╬',
                    appendAfterAll: '╣' + os.EOL
                }
            );
        }
    }

    result += getProceededRows(
        columnCount,
        maxColumnSize,
        {
            appendBeforeAll: '╚',
            appendAfterAll: '╝' + os.EOL,
            appendAfterEach: '╩'
        }
    );

    return result;
}

function getTableString(data, tableName) {
    const maxColumnSize = getMaxColumnSize(data, { align: false });
    if (maxColumnSize === 0) {
        return getEmptyTable(tableName);
    } else {
        return getHeaderOfTheTable(data) + getStringTableData(data);
    }
}

module.exports = class Print {
    constructor(view, manager) {
        this.view = view;
        this.manager = manager;
    }

    canProcess(command) {
        return command.startsWith('print ');
    }

    process(input) {
        const command = input.split(' ');
        if (command.length !== 2) {
            throw new TypeError('Incorrect number of parameters. Expected 1, got ' + (command.length - 1));
        }
        const tableName = command[1];
        const data = this.manager.getTableData(tableName);
        this.view.write(getTableString(data, tableName));
    }
};
