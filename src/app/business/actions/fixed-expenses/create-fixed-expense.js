const { models, transaction } = require("../../models");

const {} = models;

function createFixedExpense(payload) {

	return transaction(() => Promise.resolve(payload).then(payload => {

	}));
}

module.exports = createFixedExpense;
