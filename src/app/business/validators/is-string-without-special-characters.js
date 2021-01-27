const SPECIAL_CHARACTERS = /[^a-zA-Z0-9]/;

/**
 * This function returns `true` if the provided
 * value contains special characters.
 */
function isStringWithoutSpecialCharacters(value) {
	return !SPECIAL_CHARACTERS.test(value);
}

module.exports = isStringWithoutSpecialCharacters;
