const http=require("http");

const myServer=http.createServer((req, res)=>{
    console.log("New Requence Received");
    res.end("Hello From Server");
});

myServer.listen(8000, ()=>console.log("Server Started"));