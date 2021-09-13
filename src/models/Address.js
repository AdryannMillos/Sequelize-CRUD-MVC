const { Model, DataTypes, Sequelize} = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      user_id: Sequelize.NOW,
      zipcode: DataTypes.STRING,
      
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,      
   }, {
      sequelize,
      tableName: 'addresses',
    });
  }
}
module.exports = Address;
