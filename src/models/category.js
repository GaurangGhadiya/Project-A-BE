export default (sequelize, DataTypes) => {
    const Category = sequelize.define(
      'category',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique : true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        banner_image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          defaultValue:true,
        },
      },
      {
        tableName: 'category',
      },
    );
  
    return Category;
  };
  