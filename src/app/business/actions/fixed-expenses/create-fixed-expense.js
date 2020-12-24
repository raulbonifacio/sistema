const validateFixedExpenseDescription = require('./validate-fixed-expense-description');
const validateFixedExpenseValue = require('./validate-fixed-expense-value');

function createFixedExpense(context) {
	return Promise.resolve(context)
		.then(validateFixedExpenseDescription)
		.then(validateFixedExpenseValue);
}

module.exports = createFixedExpense;
