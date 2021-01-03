const { createFixedExpense } = require("../../business");

exports.index = async (_request, response) => {
	response.render("pages/fixed-expenses/index");
};

exports.new = async (_request, response) => {
	response.render("pages/fixed-expenses/new");
};

exports.store = async (_request, response) => {
	response.redirectBack();
};

exports.test = async (request, response) => {
	const result = await createFixedExpense(request.body);

	response.send(result);
};
