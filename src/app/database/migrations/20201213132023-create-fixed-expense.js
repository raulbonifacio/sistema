module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("FixedExpenses", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.STRING,
			},
			value: {
				type: Sequelize.DOUBLE,
			},
			interest: {
				type: Sequelize.DOUBLE,
			},
			startsAt: {
				type: Sequelize.DATE,
			},
			endsAt: {
				type: Sequelize.DATE,
			},
			dueDay: {
				type: Sequelize.INTEGER,
			},
			dueAtBusinessDay: {
				type: Sequelize.INTEGER,
			},
			forMonth: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("FixedExpenses");
	},
};
