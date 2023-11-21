const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Request Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("Hello From Server");
    })
});

myServer.listen(3000, () => console.log("Server Started"));