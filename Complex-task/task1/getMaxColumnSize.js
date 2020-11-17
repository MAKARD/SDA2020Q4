function getMaxColumnSizeByColumnNames(initialMaxLength = 0, columnNames) {
  let maxLength = initialMaxLength;

  for (const columnName of columnNames) {
    if (columnName.length > maxLength) {
      maxLength = columnName.length;
    }
  }

  return maxLength;
}

function getMaxColumnSizeByDataSets(initialMaxLength = 0, dataSets) {
  let maxLength = initialMaxLength;

  for (const dataSet of dataSets) {
    const values = dataSet.getValues();
    for (const value of values) {
      if (value.toString().length > maxLength) {
        maxLength = value.toString().length;
      }
    }
  }

  return maxLength;
}

function getAlignedMaxColumnSize(maxLength) {
  if (maxLength % 2 === 0) {
    return maxLength + 2;
  } else {
    return maxLength + 3;
  }
}

module.exports = {
  getMaxColumnSize: (dataSets, options = { align: true }) => {
    if (dataSets.length <= 0) {
      return 0;
    }

    let maxLength = getMaxColumnSizeByColumnNames(0, dataSets[0].getColumnNames());
    maxLength = getMaxColumnSizeByDataSets(maxLength, dataSets);

    if(options.align) {
      maxLength = getAlignedMaxColumnSize(maxLength);
    }

    return maxLength;
  }
}
