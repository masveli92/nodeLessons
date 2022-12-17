const router = require('express').Router();

const controller = require("../controller/user.controller");
const middleware = require("../middleware/user.middleware");


//виводимо ісіх юзерів з БД
router.get("/", controller.getAllUsers);

//додаємо юзера у БД
router.post(
    "/",
    middleware.IsBodyValidCreate,
    controller.createUser
);

//виводимо юзера за його ІД
router.get(
    "/:userId",
    middleware.IsIdValid,
    middleware.checkIsUserExist,
    controller.getUserById
);

//замінюємо (коригуємо) юзера за ІД
router.put(
    "/:userId",
    middleware.IsIdValid,
    middleware.checkIsUserExist,
    middleware.IsBodyValidUpdate,
    controller.updateUser
);

//видаляємо юзера за ІД
router.delete(
    "/:userId",
    middleware.IsIdValid,
    middleware.checkIsUserExist,
    controller.deleteUser
);

module.exports = router;