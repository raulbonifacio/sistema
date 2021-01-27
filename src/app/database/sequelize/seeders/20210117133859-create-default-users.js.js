module.exports = {
	up: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkInsert("Users", [
			{
				id: 1,
				firstName: "David",
				lastName: "Bowman",
				email: "dbowman@email.com",
				roleId: 1,
				password: "pa$$W0RD",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	down: async (queryInterface, _Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
