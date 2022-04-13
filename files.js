const fs = require('fs');

/////////////////////////////////////////////////////////////////////
// ///////////////FILES

// how read and write file
//             Blocking, synchronous way
// const tekxtIN = fs.readFileSync('./txt/append.txt', 'utf-8');
// console.log("-----\n");
// console.log(tekxtIN);

// const textOut = `This is me : ${tekxtIN}.\nCreated on ${Date.now()}` ;
// fs.writeFileSync('./txt/output.txt',textOut);
// console.log('File written !!');


//            Blocking and Non-Blocking: Asynchronous Nature of Node.js             good one
 //           Non-blocking and Asynchronous way
fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
    if(err)
    return console.log("Upps Error 💥")
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8',(err,data3) => {
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err=>{
                console.log("The file is written!. 😂 ");
            });

        });
    });
});
console.log('will read file');
