/**
 * This function returns the Dashboard view with
 * the proper information.
 */
exports.index = (_, response) => {
	response.render("dashboard/index");
};
