/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
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
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'email'
    },
    passwordHash: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'password_hash'
    },
    mobileNumber: {
      type: DataTypes.STRING(45),
      allowNull: true,
      field: 'mobile_number'
    }
  }, {
    tableName: 'user'
  });
};
