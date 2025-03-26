const fs = require('fs'); 

const filePath = process.argv[2]; 

const numberoflines = fs.readFileSync(filePath).split("\n").length; 

console.log('Anzahl der Zeilenumbrüche:', numberoflines.length);
