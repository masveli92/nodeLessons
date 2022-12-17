const ApiError = require("../error/ApiError")
const {fileServices} = require("../services");

module.exports = {
    IsIdValid: (req, res, next) => {
        try {
            const {userId} = req.params;

            if (userId < 0 || Number.isNaN(+userId)) {
                throw new ApiError('ID is not valid', 400);
            }

            next(); // для того щоб після виконання цієї мідлвари перейти до наступного кроку
        } catch (e) {
            next(e); // помилка перекидається на найвищий рівень у індекс.джс файл
        }
    },

    IsBodyValidCreate: (req, res, next) => {
        try {
            const {name, age} = req.body;
            if (!name || name.length < 2 || typeof name !== 'string') {
                throw new ApiError('User name is not valid', 400);
            }
            if (!age || age < 1 || Number.isNaN(+age)) {
                throw new ApiError('User age is not valid', 400);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    IsBodyValidUpdate: (req, res, next) => {
        try {
            const {name, age} = req.body;
            if (name && (name.length < 2 || typeof name !== 'string')) {
                throw new ApiError ('User name is not valid', 400);
            }

            if (age && (age === 0 || age < 2 || Number.isNaN(+age))) { // не розумію чомусь не працює перевірка щоб вік не дорівнював 0
                throw new ApiError ('User age is not valid', 400);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserExist: async (req, res, next) => {
        try {
            const {userId} = req.params;
            const users = await fileServices.reader();

            const user = users.find((u) => u.id === +userId);

            if (!user) {
                throw new ApiError('User not found', 404);
            }
            req.users = users; //для того щоб не робився додатковий запит у БД на масив юзерів
            req.user = user; //для того щоб не робився додатковий запит у БД на юзера

            next();
        } catch (e) {
            next(e);
        }
    }
}