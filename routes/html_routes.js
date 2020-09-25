const db = require("../models");
const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
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
      res.render("index", menuObj);
    });
  });

  app.get("/order", (req, res) => {
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
      res.render("order", menuObj);
    });
  });

  app.get("/success", (req, res) => {
    res.render("success");
  });

  app.get("/cancel", (req, res) => {
    res.render("cancel");
  });
};
