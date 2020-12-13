const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class FixedExpense extends Model {
		static associate(models) {}
	}

	FixedExpense.init(
		{
			description: DataTypes.STRING,
			value: DataTypes.DOUBLE,
			interest: DataTypes.DOUBLE,
			startsAt: DataTypes.DATE,
			endsAt: DataTypes.DATE,
			dueDay: DataTypes.INTEGER,
			dueAtBusinessDay: DataTypes.INTEGER,
			forMonth: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "FixedExpense",
			paranoid: true,
		}
	);

	return FixedExpense;
};

