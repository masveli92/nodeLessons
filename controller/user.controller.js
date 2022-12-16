const userDb = require("../dataBase/users");
module.exports = {

//виводимо ісіх юзерів з БД
    getAllUsers: (req, res, next) => {
        try {
            res.json(userDb);
        } catch (e) {
            next(e);
        }
    },

//виводимо юзера за його ІД
    getUserById: (req, res, next) => {
        try {
            // res.json(userDb[userId]);
            res.json(req.user);
        } catch (e) {
            next(e);
        }
    },

//додаємо юзера у БД
    createUser: (req, res, next) => {
        try {
            const newUser = req.body;
            console.log(newUser);

            userDb.push(newUser);
            res.status(201).json("Created");
        } catch (e) {
            next(e);
        }
    },

//замінюємо (коригуємо) юзера за ІД
    updateUser: (req, res, next) => {
        try {
            const updateUser = req.body;
            const userID = req.params.userId;

            userDb[userID] = updateUser;
            res.json("Updated");
        } catch (e) {
            next(e);
        }
    }
}