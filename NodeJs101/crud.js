const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,"CRUD")
const filePath=`${dirPath}/apple.txt`;

//for create file
// fs.writeFileSync(filePath,"this is simple text file");

//for read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })

//for update file
// fs.appendFile(filePath,"this is update", (err)=>{
//     if(!err){
//         console.log("file upto-date")
//     }
// })


// for rename file
// fs.rename(filePath,`${dirPath}/furite.txt`, (err)=>{
//     if(!err){
//         console.log("File Renamed")
//     }
// })

// for Delete file
// fs.unlinkSync(`${dirPath}/furite.txt`, (err)=>{
//         console.log("file deleted")
// })
