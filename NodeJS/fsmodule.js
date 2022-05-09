// Using CommonJS syntax:
const fs = require('fs');

// fs.readFile('npm commands.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })

// const a = fs.readFileSync('npm commands.txt')
// console.log(a.toString(k))

fs.writeFile('file.txt', "This is data.", ()=>{
    console.log("Written to the file.")
})

console.log("Finished reading file.")