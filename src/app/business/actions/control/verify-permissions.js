
function verifyPermissions(...permissions) {

	return (context, next) => {
		//Check permissions
		//Break flow if not authorized.

		return next();
	}
}


module.exports = verifyPermissions;
