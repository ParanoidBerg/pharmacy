const Category = require("../models/category.model");

module.exports.categoryController = {
  postCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Категория создана");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteCategorie: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err.message);
    }
  },
  updateCategorie: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json("Обновлено");
    } catch (err) {
      res.json(err.message);
    }
  },
  getCategories: async (req, res) => {
    try {
      const allCategories = await Categorie.find();
      res.json(allCategories);
    } catch (err) {
      res.json(err.message);
    }
  },
};
