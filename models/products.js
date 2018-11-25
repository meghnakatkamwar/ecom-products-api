/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'name'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'price'
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'description'
    },
    images: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      field: 'images'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updatedAt'
    }
  }, {
    tableName: 'products'
  });
};
