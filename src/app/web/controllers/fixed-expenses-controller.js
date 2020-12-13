exports.index = async (request, response) => {
	response.render("pages/fixed-expenses/index");
};

exports.create = async (request, response) => {
	response.render("pages/fixed-expenses/create", {
		csrfToken: request.csrfToken(),
	});
};

exports.store = async (request, response) => {
	response.send(request.body);
};
