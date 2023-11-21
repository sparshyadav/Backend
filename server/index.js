const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/': res.end("Homepage")
                break;
            case '/about': res.end("About Page");
                break;
            default: res.end("ERROR 404 Page Not Found");
        }
    })
});

myServer.listen(5000, () => console.log("Server Started"));