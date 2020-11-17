function repeat(symbol, times) {
    let result = '';
    for (let i = 0; i < times; i++) {
        result += symbol;
    }
    return result;
}

/*
    output example:
    +-------------+
    |enable _ true|
    +-------------+
*/
function formatKeyValue(key, value) {
    const content = key + ' _ ' + value;
    const outLine = repeat('-', content.length);

    return `+${outLine}+\n` +
           `|${content}|\n` +
           `+${outLine}+\n`;
}

function main() {
    console.log(formatKeyValue('enable', 'true'));
    console.log(formatKeyValue('name', 'Bob'));
}

main();
