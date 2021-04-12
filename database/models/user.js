module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Note, {
      foreignKey: 'userId',
      as: 'posts',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
