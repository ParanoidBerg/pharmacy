const { Router } = require("express");
const { userController } = require("../controllers/user.controller");
const router = Router();

router.post("/users", userController.postUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/admin/users", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.patch("/users/add/:id", userController.addFunds);
router.patch("/users/buy/:id", userController.buy);

module.exports = router;
