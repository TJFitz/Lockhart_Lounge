module.exports = function (sequelize, DataTypes) {
  const Menu = sequelize.define(
    "Menu",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: true,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.DATE.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.DATE.NOW,
      },
    },
    {
      freezeTableName: true,
    }
  );

  Menu.associate = function (models) {
    Menu.hasMany(models.Appetizer, {
      // foreignKey: "MenuId",
    });
    Menu.hasMany(models.Entree, {
      //foreignKey: "MenuId",
    });
    Menu.hasMany(models.Dessert, {
      // foreignKey: "MenuId",
    });
    Menu.hasMany(models.Drink, {
      // foreignKey: "MenuId",
    });
  };
  return Menu;
};
