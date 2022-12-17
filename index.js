const express = require("express");
require('dotenv').config();

const configs = require('./config/config');
const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json('Welcome');
});

app.use('/users', userRouter); //шлях до всх ендпоінтів юзера

// сюди виводяться всі помилки з усієї аплікухи
app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
})

// слухаємо порт
app.listen(5000, () => {
// app.listen(configs.PORT, ()=>{     // не розумію чому не працює, вивалює помилку
    console.log(`Server listen ${configs.PORT}`);
    //     console.log(`Server listen 5000`);
});
