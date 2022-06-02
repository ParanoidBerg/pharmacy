const Cart = require("../models/cart.model");
const Drug = require("../models/drug.model");
const User = require("../models/user.model");

module.exports.cartController = {
  addDrug: async (req, res) => {
    try {
      const cart = await Cart.findById(req.params.id);
      const drug = await Drug.findById(req.body.drugs);
      const user = await User.findById(cart.user);

      if (drug.needRecipe === true) {
        if (user.recipe === true) {
          await Cart.findByIdAndUpdate(req.params.id, {
            $push: { drugs: req.body.drugs },
            totalSum: cart.totalSum + drug.price,
          });
          res.json("Лекарство добавлено");
        } else {
          res.json("нет рецепта");
        }
      } else {
        await Cart.findByIdAndUpdate(req.params.id, {
          $push: { drugs: req.body.drugs },
          totalSum: cart.totalSum + drug.price,
        });
        res.json("Лекарство добавлено");
      }
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteDrug: async (req, res) => {
    try {
      await Drug.findByIdAndUpdate(req.params.id, {
        $pull: { drugs: req.body.drugs },
      });
      res.json("удалено");
    } catch (err) {
      res.json(err.message);
    }
  },
  cleanCart: async (req, res) => {
    try {
      await Cart.findByIdAndUpdate(req.params.id, {
        drugs: [],
        totalSum: 0,
      });
      res.json("корзина очищена");
    } catch (err) {
      res.json(err.message);
    }
  },
};
