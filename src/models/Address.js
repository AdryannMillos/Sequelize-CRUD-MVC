const { Model, DataTypes, Sequelize} = require('sequelize');

class Address extends Model {
  static init(sequelize) {
    super.init({
      
      zipcode: DataTypes.STRING,
      
      street: DataTypes.STRING,
      number: DataTypes.INTEGER,      
   }, {
      sequelize,
      tableName: 'addresses',
    });
  }
  static associate(models){
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
  }
}
module.exports = Address;
