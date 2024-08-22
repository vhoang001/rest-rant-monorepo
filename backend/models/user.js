'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Comment }) {
      User.hasMany(Comment, { as: 'author', foreignKey: 'author_id' })
    }

  };
  User.init({
    userId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // existing fields
    password_digest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User;
};

role: {
  type: Sequelize.ENUM('reviewer', 'admin'),
  defaultValue: 'reviewer',
  allowNull: false
}
