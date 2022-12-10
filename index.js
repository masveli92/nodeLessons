const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));

 const reader = async () => {
    const buffer = await fs.readFile(path.join(__dirname, 'dataBase', 'users.json'));
    return JSON.parse(buffer.toString());
};
const writer = async (users) => {
    await fs.writeFile(path.join(__dirname, 'dataBase', 'users.json'), JSON.stringify(users));
};

//виводимо усіх юзерів з БД
server.get("/users", async (req, res) => {

    const users = await reader();

    res.json(users);
});

//додаємо юзера у БД
server.post("/users", async (req, res) => {
    const userInfo = req.body;

    if (userInfo.name.length < 2 || typeof userInfo.name !== 'string'){
        return res.status(400).json('User name is not correct')
    }

    if (userInfo.age < 1 || Number.isNaN(+userInfo.age) ){
        return res.status(400).json('Wrong user age')
    }

    const users = await reader();

    const newUser = {
        name: userInfo.name,
        age: userInfo.age,
        id: users[users.length - 1].id + 1}
    users.push(newUser);

    await writer(users);

    res.json(users);
});

//виводимо юзера за його ІД
server.get("/users/:userId", async (req, res) => {
    console.log(req.params);
    const {userId} = req.params;
    const users = await reader();

    const user = users.find((u) => u.id === +userId);
    if (!user) {
        return res.status(404).json(`User with Id ${userId} not found`)
    }

    res.json(user);
});

//замінюємо (коригуємо) юзера за ІД
server.put("/users/:userId", async (req, res) => {
    const newUserInfo = req.body;
    const {userId} = req.params;
    const users = await reader();

    const index = users.findIndex((u) => u.id === +userId);
    if (index === -1) {
        return res.status(404).json(`User with Id ${userId} not found`)
    }

    users[index] = {...users[index], ...newUserInfo};

    await writer(users);

    res.status(201).json(users[index]);
});

//видаляємо юзера за ІД
server.delete("/users/:userId", async (req, res) => {
    const {userId} = req.params;
    const users = await reader();
    const index = users.findIndex((u) => u.id === +userId);

    if (index === -1) {
        return res.status(404).json(`User with Id ${userId} not found`)
    }

    users.splice(index,1);

    await writer(users);

    res.sendStatus(204);
});

// слухаємо порт
server.listen(5000, () => {
    console.log("Server listen 5000");
});
