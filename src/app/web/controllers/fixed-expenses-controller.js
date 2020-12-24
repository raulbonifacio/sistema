
const {createFixedExpense} = require('../../business');

exports.index = async (request, response) => {
	response.render("pages/fixed-expenses/index");
};

exports.create = async (request, response) => {
	response.render("pages/fixed-expenses/create", {
		csrfToken: request.csrfToken(),
	});
};

exports.test = async (request, response) => {

	const result = await createFixedExpense(request.body);

	response.send(result);
};
