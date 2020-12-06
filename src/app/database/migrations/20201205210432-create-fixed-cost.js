module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("FixedCosts", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			dueDay: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			businessDay: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			begins: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			ends: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			everyMonths: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			forMonth: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			cost: {
				allowNull: false,
				type: Sequelize.DOUBLE,
			},
			interest: {
				allowNull: false,
				type: Sequelize.DOUBLE,
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

	down: async (queryInterface, _) => {
		await queryInterface.dropTable("FixedCosts");
	},
};

