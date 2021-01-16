const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Role extends Model {
		static associate({ Permission, User }) {
			Role.belongsToMany(Permission, { through: "PermissionsRoles" });
			Role.hasMany(User);
		}
	}

	Role.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Role",
			paranoid: true,
		}
	);

	return Role;
};
