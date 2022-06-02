const { Router } = require("express");
const { drugController } = require("../controllers/drug.controller");
const router = Router();

router.post("/admin/drugs", drugController.postDrug);
router.delete('/admin/drugs/"id', drugController.deleteDrug);
router.patch("/admin/drugs/:id", drugController.updateDrug);
router.get("/drugs", drugController.getAllDrugs);
router.get("/drugs/:id", drugController.getDrugById);
router.get('/drugs/categories/"id', drugController.getDrugById);

module.exports = router;
