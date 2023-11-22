const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

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
        <li>${user.job_title}</li>`).join("")}
    </ul>
    `
    return res.send(html);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});



app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));