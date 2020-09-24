const db = require("../models");

module.exports = function (app) {
  app.get("/api/menu", (req, res) => {
    db.Menu.findAll({
      where: {
        id: 1,
      },
      include: [
        { model: db.Appetizer },
        { model: db.Entree },
        { model: db.Dessert },
        { model: db.Drink },
      ],
    }).then((dbMenu) => {
      let menuArr = [];
      let menuObj = {
        menu: menuArr,
      };
      for (const [key, value] of Object.entries(dbMenu[0])) {
        if (Array.isArray(value)) {
          value.forEach((element) => {
            menuArr.push(element.dataValues);
          });
        }
      }
      res.json(menuObj);
    });
  });

  app.get("/api/menu/appetizers", (req, res) => [
    db.Appetizer.findAll().then((dbApps) => {
      res.json(dbApps);
    }),
  ]);

  app.get("/api/menu/entrees", (req, res) => [
    db.Entree.findAll().then((dbApps) => {
      res.json(dbApps);
    }),
  ]);

  app.get("/api/menu/desserts", (req, res) => [
    db.Dessert.findAll().then((dbApps) => {
      res.json(dbApps);
    }),
  ]);

  app.get("/api/menu/drinks", (req, res) => [
    db.Drink.findAll().then((dbApps) => {
      res.json(dbApps);
    }),
  ]);
};
