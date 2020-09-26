module.exports = function (sequelize, DataTypes) {
  const Drink = sequelize.define("Drink", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    tags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.DATE.NOW,
    },
  });

  Drink.associate = function (models) {
    Drink.belongsTo(models.Menu, {
      foreignKey: "MenuId",
    });
  };
  return Drink;
};
