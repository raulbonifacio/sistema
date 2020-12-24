const validateFixedExpenseDescription = require('./validate-fixed-expense-description');

function createFixedExpense(context) {
	return Promise.resolve(context)
		.then(validateFixedExpenseDescription);
}

module.exports = createFixedExpense;
