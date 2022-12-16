const router = require('express').Router();

const controller = require("../controller/user.controller");
const middleware = require("../middleware/user.middleware");


//виводимо ісіх юзерів з БД
router.get("/", controller.getAllUsers);

//виводимо юзера за його ІД
router.get("/:userId", middleware.checkIsUserExist, controller.getUserById);

//додаємо юзера у БД
router.post("/", middleware.checkIsUserExist, controller.createUser);

//замінюємо (коригуємо) юзера за ІД
router.put("/:userId", middleware.checkIsUserExist, controller.updateUser);

module.exports = router;