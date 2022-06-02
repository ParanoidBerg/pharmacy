const User = require("../models/user.model");
const Cart = require("../models/cart.model");
const req = require("express/lib/request");

module.exports.userController = {
  postUser: async (req, res) => {
    try {
      newUser = await User.create({
        name: req.body.name,
        wallet: req.body.wallet,
        recipe: req.body.recipe,
      });
      await Cart.create({
        user: newUser._id,
      });
      res.json("создан");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удалён");
    } catch (err) {
      res.json(err.message);
    }
  },
  getUser: async (req, res) => {
    try {
      const getUser = await User.find();
      res.json(getUser);
    } catch (err) {
      res.json(err.message);
    }
  },
  updateUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        recipe: req.body.recipe,
      });
      res.json("Изменено");
    } catch (err) {
      res.json(err.message);
    }
  },
  addFunds: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const funds = user.money + req.body.money;
      await User.findByIdAndUpdate(req.params.id, { wallet: funds });
      res.json(`Кошелек поплнен на ${funds}`);
    } catch (err) {
      res.json(err.message);
    }
  },
  buy: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const cart = await Cart.findById(req.params.id);

      if (user.wallet > cart.totalSum) {
        await User.findByIdAndUpdate(cart.user, {
          wallet: user.wallet - cart.totalSum,
        });
        await Cart.findByIdAndUpdate(req.params.id, {
          drugs: [],
          totalSum: 0,
        });
        res.json("куплено");
      }
    } catch (err) {
      res.json(err.message);
    }
  },
};
