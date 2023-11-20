const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "test.txt");

// Synchronous 
// fs.writeFileSync(filePath, 'Hey There');

//Asynchronous
// fs.writeFile(filePath, "Hello World", (err)=>(console.log(err)));

//Synchronous
const result = fs.readFileSync(filePath, "utf-8");
console.log(result);