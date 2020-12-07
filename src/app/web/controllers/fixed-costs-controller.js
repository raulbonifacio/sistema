exports.index = (request, response) => {
	response.render("pages/fixed-costs/index");
};

exports.create = (request, response) => {
	response.render("pages/fixed-costs/create", {
		csrfToken: request.csrfToken(),
	});
};

exports.store = (request, response) => {
	response.send(request.body);
};
