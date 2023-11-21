const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") {
        return res.end();
    }
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/': res.end("Homepage")
                break;
            case '/about':
                const qp = myUrl.query.name;
                res.end(`Hi, ${qp}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here Are Your Search Results for ${search}`);
            default: res.end("ERROR 404 Page Not Found");
        }
    })
});

myServer.listen(5000, () => console.log("Server Started"));