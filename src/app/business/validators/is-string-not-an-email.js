const SUPER_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * This function returns `true` if the provided
 * value is not an e-mail.
 */
function isStringNotAnEmail(value) {
	return !SUPER_EMAIL_REGEX.test(value);
}

module.exports = isStringNotAnEmail;
