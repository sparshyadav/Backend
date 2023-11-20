const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "test.txt");

// Synchronous 
// fs.writeFileSync(filePath, 'Hey There');

//Asynchronous
// fs.writeFile(filePath, "Hello World", (err)=>(console.log(err)));

//Synchronous
// const result = fs.readFileSync(filePath, "utf-8");
// console.log(result);

//Asynchronous
// fs.readFile(filePath, "utf-8", (err, result) => {
//     if (err) {
//         console.log("ERROR: ", err);
//     }
//     else {
//         console.log(result);
//     }
// });

fs.appendFileSync(filePath, " Welcome to New York");
