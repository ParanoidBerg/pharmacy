const Drug = require("../models/drug.model");

module.exports.drugController = {
  postDrug: async (req, res) => {
    try {
      await Drug.create({
        name: req.body.name,
        price: req.body.price,
        needRecipe: req.body.needRecipe,
        category: req.body.category,
      });
      res.json("Добавлено");
    } catch (err) {
      res.json(err.message);
    }
  },
  deleteDrug: async (req, res) => {
    try {
      await Drug.findByIdAndRemove(req.params.id);
      res.json("удалёно");
    } catch (err) {
      res.json(err.message);
    }
  },
  updateDrug: async (req, res) => {
    try {
      await Drug.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        needRecipe: req.body.needRecipe,
        category: req.body.category,
      });
      res.json("обновлено");
    } catch (err) {
      res.json(err.message);
    }
  },
  getAllDrugs: async (req, res) => {
    try {
      const allDrug = await Drug.find();
      res.json(allDrug);
    } catch (err) {
      res.json(err.message);
    }
  },
  getDrugById: async (req, res) => {
    try {
      const drugId = await Drug.findById(req.params.id);
      res.json(drugId);
    } catch (err) {
      res.json(err.message);
    }
  },
  getDrugByCat: async (req, res) => {
    try {
      const drugCat = await Drug.findById({ category: req.param.id });
      res.json(drugCat);
    } catch (err) {
      res.json(err.message);
    }
  },
};
