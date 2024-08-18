export default (sequelize, DataTypes) => {
    const User = sequelize.define(
      'user',
      {
        user_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique : true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique : true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique : true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        token: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue:true,
        },
        userType: {
          type: DataTypes.INTEGER,
          defaultValue : 1
        },
      },
      {
        tableName: 'users',
      },
    );
  
    return User;
  };
  