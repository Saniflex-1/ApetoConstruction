const fs = require('fs');

fs.readFile("./texst.txt", "utf-8", (err, data1)=>{
    if (err) return console.log("Error 🎆");
    fs.readFile(`./${data1}.txt`, "utf-8", (err, data2)=>{
    console.log(data2);
    });
});

// fs.writeFile("outgone.txt", "utf-8", (err, data)=>{
//     console.log(`This is alal`);
// });