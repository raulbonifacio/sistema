const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {}
	}
	User.init(
		{
			name: DataTypes.STRING,
			surname: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
			paranoid: true,
		}
	);
	return User;
};
