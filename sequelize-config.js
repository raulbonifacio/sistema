module.exports = {
	production: {
		username: process.env.SEQUELIZE_PRODUCTION_USERNAME,
		password: process.env.SEQUELIZE_PRODUCTION_PASSWORD,
		database: process.env.SEQUELIZE_PRODUCTION_DATABASE,
		host: process.env.SEQUELIZE_PRODUCTION_HOST,
		dialect: process.env.SEQUELIZE_PRODUCTION_DIALECT,
		port: process.env.SEQUELIZE_PRODUCTION_PORT,
	},
	development: {
		username: process.env.SEQUELIZE_DEVELOPMENT_USERNAME,
		password: process.env.SEQUELIZE_DEVELOPMENT_PASSWORD,
		database: process.env.SEQUELIZE_DEVELOPMENT_DATABASE,
		host: process.env.SEQUELIZE_DEVELOPMENT_HOST,
		dialect: process.env.SEQUELIZE_DEVELOPMENT_DIALECT,
		port: process.env.SEQUELIZE_DEVELOPMENT_PORT,
	},
	test: {
		username: process.env.SEQUELIZE_TEST_USERNAME,
		password: process.env.SEQUELIZE_TEST_PASSWORD,
		database: process.env.SEQUELIZE_TEST_DATABASE,
		host: process.env.SEQUELIZE_TEST_HOST,
		dialect: process.env.SEQUELIZE_TEST_DIALECT,
		port: process.env.SEQUELIZE_TEST_PORT,
	},
};
