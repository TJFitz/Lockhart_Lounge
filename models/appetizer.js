module.exports = function (sequelize, DataTypes) {
  const Appetizer = sequelize.define("Appetizer", {
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

  Appetizer.associate = function (models) {
    Appetizer.belongsTo(models.Menu, {
      foreignKey: {
        as: "MenuId",
      },
    });
  };
  return Appetizer;
};
