const express = require("express");
require('dotenv').config()

const configs = require('./config/config');
const userRouter = require('./router/user.router');
const {log} = require("debug");

const app = express();

// для того щоб можна було додати джейсонку у БД (щоб зчитувались дані при методах пост, пут і т.д.)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.get("/", (req, res) => {
    res.json('Welcome');
});

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
