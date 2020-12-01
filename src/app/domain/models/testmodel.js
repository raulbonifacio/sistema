const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {

	class TestModel extends Model {
		static associate(models) {
			// define association here
		}
	}

	TestModel.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "TestModel",
		}
	);

	return TestModel;
};

