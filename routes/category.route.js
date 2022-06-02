const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");
const router = Router();

router.post("/admin/categories", categoryController.postCategory);
router.patch("/admin/categories/:id", categoryController.updateCategorie);
router.delete("/admin/categories/:id", categoryController.deleteCategorie);
router.get("/categories", categoryController.getCategories);

module.exports = router;
