// const { rejects } = require("assert")
const { promises } = require("dns");
const { readFile,writeFile } = require("fs").promises;
// const { resolve } = require("path");
// const util = require('util')
// const readfilepromise = util.promisify(readFile)
// const writefilepromise = util.promisify(writeFile)

// getText("./firstFile.txt").then(data => console.log(data)).catch(err => console.log(err))
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
const start = async () => {
  try {
    let start = await readFile("./firstFile.txt","utf-8");
    let second = await readFile("./thirdFile.txt","utf-8");
    // let write = await writefilepromise("./secondFile.txt",start);
    await writeFile("./newwritefile","new file is good")
    console.log(start,second);
  } catch (error) {
    console.log(error);
  }
};
start(); 
