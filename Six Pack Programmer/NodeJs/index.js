const http = require("http");
const { gfName, gfName2, gfName3 } = require("./features");
console.log(http);
console.log(gfName, gfName2, gfName3);

const server = http.createServer((req, res) => {
    if (req.url === "/about") {
        res.end("<h1>About Page</h1>");
    }
    if (req.url === "/") {
        res.end("<h1>Home Page</h1>");
    }
    if (req.url === "/contact") {
        res.end("<h1>Contact Page</h1>");
    }
})

server.listen(5000, () => {
    console.log("Server is Working");
});

