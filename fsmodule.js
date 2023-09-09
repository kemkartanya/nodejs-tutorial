const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

fs.writeFileSync('file.txt', "hello file")

const a = fs.readFileSync('file.txt')
console.log(a.toString());

fs.writeFile('file2.txt', "this is a data", ()=>{
    console.log("written to the file")
})

console.log('finished reading file')