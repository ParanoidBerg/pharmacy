const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller");
const router = Router();

router.patch("/carts/add/:id", cartController.addDrug);
router.patch("/carts", cartController.cleanCart);
router.patch("/carts", cartController.deleteDrug);

module.exports = router;
