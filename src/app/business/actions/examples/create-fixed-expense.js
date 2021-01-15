const validateFixedExpenseDescription = require("./validate-fixed-expense-description");
const validateFixedExpenseDueAtBusinessDay = require("./validate-fixed-expense-due-at-business-day");
const validateFixedExpenseStartsAt = require("./validate-fixed-expense-starts-at");
const validateFixedExpenseValue = require("./validate-fixed-expense-value");

function createFixedExpense(context) {
	return Promise.resolve(context)
		.then(validateFixedExpenseDescription)
		.then(validateFixedExpenseValue)
		.then(validateFixedExpenseDueAtBusinessDay)
		.then(validateFixedExpenseStartsAt);
}

module.exports = createFixedExpense;
