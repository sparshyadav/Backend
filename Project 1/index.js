const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile("log.txt", `\n${Date.now()}: ${req.method}: ${req.path}`, (err, data) => {
        next();
    })
})

app.use((req, res, next) => {
    // return res.json({msg: "Hello From MiddleWare 1"});
    console.log("Hello from Middleware 1");
    req.myUserName = "Sparsh Yadav";
    next();
});

app.use((req, res, next) => {
    console.log("Hello from Middleware 2", req.myUserName);
    next();
});

//Routes
app.get('/', (req, res) => {
    return res.send("Welcome to Home Page");
});

app.get('/users', (req, res) => {
    const html =
        `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li> 
        <li>${user.last_name}</li> 
        <li>${user.email}</li> 
        <li>${user.gender}</li> 
        <li>${user.job_title}</li> 
        <br> <br>`).join("")}
    </ul>
    `
    return res.send(html);
});

//REST API 
app.get('/api/users', (req, res) => {
    console.log("I am in get route", req.myUserName);
    // res.setHeader("myName", "Sparsh Yadav");
    console.log(req.headers);
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json("User Not Found"); // 404 Status Code
    }
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    if (!body.first_name || body.last_name || body.email || body.gender || body.job_title) {
        return res.status(400).json({ msg: "Bad Request, Data Missing" }); // 400 Status Code
    }

    app.patch("/api/users/:id", (req, res) => {
        const id = Number(req.params.id);
        const idx = users.find((user) => user.id === id);
        users[idx] = { ...users[idx], ...req.body };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            return res.json({ status: "Success", id: users[idx] })
        })
    });

    app.delete("/api/users/:id", (req, res) => {

    });
});


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));