const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,"files");
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(dirPath+"/files"+Math.random(Math.random(Math.random(Math.random(Math.random(Math.random(Math.random()))))))+i+".txt", "this is simple text file")
}
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        if (item) {
            console.log(item)
        }else{
            console.log(err.message)
        }
    })
})