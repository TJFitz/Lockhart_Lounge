module.exports = function (sequelize, DataTypes) {
  const Entree = sequelize.define("Entree", {
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

  Entree.associate = function (models) {
    Entree.belongsTo(models.Menu, {
      foreignKey: "MenuId",
    });
  };
  return Entree;
};
