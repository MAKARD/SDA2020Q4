module.exports = {
  getProceededRows: function (
    columnCount,
    maxColumnSize,
    options = {
      appendBeforeAll: '',
      appendAfterAll: '',
      appendBeforeEach: '',
      appendAfterEach: ''
    }
  ) {
    let result = options.appendBeforeAll || '';

    for (let column = 1; column < columnCount; column++) {
      result += options.appendBeforeEach || '';

      for (let row = 0; row < maxColumnSize; row++) {
        result += '═';
      }

      result += options.appendAfterEach || '';
    }

    for (let row = 0; row < maxColumnSize; row++) {
      result += '═';
    }

    result += options.appendAfterAll || '';

    return result;
  }
};
