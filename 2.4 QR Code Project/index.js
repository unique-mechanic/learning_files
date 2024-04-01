/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//importing inquirer
import inquirer from "inquirer";
var urlCaptured = "";

//importing qr-image generator
import qr from "qr-image";

//import from fs:
import * as fs from 'node:fs';

//creating inquirer prompt
inquirer.prompt([
    {
        type: 'input',
        name: 'name', 
        message: 'What is your name?'

    }
  ])
  .then((answers) => {
        //accessing name attribute from the 
        urlCaptured = answers.name;
        console.log(urlCaptured);
        const qr_png = qr.image(urlCaptured, {type: 'png'});

        // Save QR code image to a file
        qr_png.pipe(fs.createWriteStream('qr-code.png'));

        //writes a file and paste the url in it
        fs.writeFile("urlnew.txt", urlCaptured, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment"); 
    } else {
      console.log("Something else went wrong");
    }
  });


  //console.log("Your URL is " + urlCaptured);