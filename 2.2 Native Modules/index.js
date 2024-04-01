const fs = require("fs");

//to write a file
fs.writeFile("message.txt", "Hello from Node ", (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });

  //to read a file
fs.readFile("message.txt", "utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });
