const bcrypt = require("bcrypt");

const SALT_ROUNDS = 10;

module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Users", [
			{
				id: 1,
				firstName: "Root",
				lastName: "",
				email: "root@sistema.com",
				roleId: 1,
				password: await bcrypt.hash("0rootPassword_", SALT_ROUNDS),
				createdAt: new Date(),
				updatedAt: new Date(),

			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
