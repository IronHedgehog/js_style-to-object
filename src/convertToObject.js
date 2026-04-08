'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitStr = sourceString.split(';');

  const filterSpaces = splitStr.map((item) => item.trim());

  const filterEmptyLines = filterSpaces.filter((item) => {
    return item.length > 0 && item.includes(':');
  });

  const keyValue = filterEmptyLines.map((item) => {
    const parts = item.split(':');

    return [parts[0].trim(), parts[1].trim()];
  });

  return Object.fromEntries(keyValue);
}

module.exports = convertToObject;
