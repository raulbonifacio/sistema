const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class FixedCost extends Model {
		static associate(models) {
			// define association here
		}
	}
	FixedCost.init(
		{
			dueDay: DataTypes.INTEGER,
			businessDay: DataTypes.BOOLEAN,
			description: DataTypes.STRING,
			begins: DataTypes.DATE,
			ends: DataTypes.DATE,
			everyMonths: DataTypes.INTEGER,
			forMonth: DataTypes.INTEGER,
			updateAt: DataTypes.DATE,
			createdAt: DataTypes.DATE,
			deletedAt: DataTypes.DATE,
			cost: DataTypes.DOUBLE,
			interest: DataTypes.DOUBLE,
		},
		{
			sequelize,
			modelName: "FixedCost",
		}
	);
	return FixedCost;
};

