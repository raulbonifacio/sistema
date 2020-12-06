'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FixedCost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FixedCost.init({
    dueDate: DataTypes.DATE,
    description: DataTypes.STRING,
    begins: DataTypes.DATE,
    ends: DataTypes.DATE,
    everyMonths: DataTypes.INTEGER,
    forMonth: DataTypes.INTEGER,
    updateAt: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    cost: DataTypes.DOUBLE,
    interest: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'FixedCost',
  });
  return FixedCost;
};