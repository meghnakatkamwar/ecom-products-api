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
      allowNull: true,
      field: 'name'
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
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
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated'
    }
  }, {
    tableName: 'products'
  });
};
