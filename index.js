const express = require ("express");

const userDb = require ('./dataBase/users');

const server = express();

// для того щоб можна було додати джейсонку у БД (щоб зчитувались дані при методах пост, пут і т.д.)
server.use(express.json());
server.use(express.urlencoded ({extended: true}));

server.get("/", (req, res)=>{
    res.json('Welcome');
  });

//виводимо ісіх юзерів з БД
server.get("/users", (req, res)=>{
    console.log("Users endpoint");
    // res.json({user: "Mariia"});
    // res.end('Only string data in this case');
    // res.status(200).json('It`s OK');
    // res.sendFile('./pathToFile');
    res.json(userDb);
});

//виводимо юзера за його ІД
server.get("/users/:userId", (req, res)=>{
    console.log(req.params);
    const {userId} = req.params;
    res.json(userDb[userId]);
});

//додаємо юзера у БД
server.post("/users", (req, res)=>{
    const newUser = req.body;
    console.log(newUser);

    userDb.push(newUser);
    res.status(201).json("Created");
});

//замінюємо (коригуємо) юзера за ІД
server.put("/users/:userId", (req, res)=>{
    const updateUser = req.body;
    const userID = req.params.userId;

    userDb[userID]=updateUser;
    res.json("Updated");
});

// слухаємо порт
server.listen(5000, ()=>{
    console.log("Server listen 5000");
});