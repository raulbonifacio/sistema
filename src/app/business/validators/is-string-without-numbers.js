const NUMBERS_REGEX = /[0-9]/;

function isStringWithoutNumbers(value) {
	return !NUMBERS_REGEX.test(value);
}

module.exports = isStringWithoutNumbers;
