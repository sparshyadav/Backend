const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname, "test.txt");

//Syncronous 
fs.writeFileSync(filePath, 'Hey There');