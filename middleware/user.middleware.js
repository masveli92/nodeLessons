const userDb = require("../dataBase/users")
const ApiError = require("../error/ApiError")

module.exports = {
    checkIsUserExist: (req, res, next) => {
        try {
            const {userId} = req.params;

            const user = userDb[userId];

            if (!user) {
                throw new ApiError('User not found', 404);
            }
            req.user = user; //для того щоб не робився додатковий запит у БД

            next(); // для того щоб після виконання цієї мідлвари перейти до наступного кроку
        } catch (e) {
            next(e); // помилка перекидається на найвищий рівень у індекс.джс файл
        }

    }
}