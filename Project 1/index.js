const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({ extended: false }));

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
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "Success", id: users.length});
    });
});

app.patch("/api/users/:id", (req, res) => {
    const
});

app.delete("/api/users/:id", (req, res) => {

})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));