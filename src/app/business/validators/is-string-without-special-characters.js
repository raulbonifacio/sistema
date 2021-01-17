const SPECIAL_CHARACTERS = /[^a-zA-z]/;

/**
 * This function returns `true` if the provided
 * value contains special characters.
 */
function isStringWithoutSpecialCharacters(value) {
	return !SPECIAL_CHARACTERS.test(value);
}

module.exports = isStringWithoutSpecialCharacters;
