var dice1 =  Math.floor((6*Math.random()) + 1);
var randomDiceImage = "dice" + dice1 + ".png";
document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // if (dice1 === 1){
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }else if(dice1 === 2){
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }else if(dice1 === 3){
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }else if(dice1 === 4){
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }else if(dice1 === 5){
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }else{
        //   document.querySelector(".dice .img1").setAttribute("src", "./images/" + randomDiceImage)
        // }
var dice2 =  Math.floor((6*Math.random()) + 1);
randomDiceImage = "dice" + dice2 + ".png";
document.querySelector(".dice .img2").setAttribute("src", "./images/" + randomDiceImage)
        // if (dice2 === 1){
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice1.png")
        // }else if(dice2 === 2){
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice2.png")
        // }else if(dice2 === 3){
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice3.png")
        // }else if(dice2 === 4){
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice4.png")
        // }else if(dice2 === 5){
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice5.png")
        // }else{
        //   document.querySelector(".dice .img2").setAttribute("src", "./images/dice6.png")
        // }

    function winnerText(){
          if (dice1 > dice2){
            document.querySelector("h1").textContent = ("🚩Player 1 Wins!");
          }else if (dice1 === dice2){
            document.querySelector("h1").textContent = ("It's a tie 🤝");
          }else{
            document.querySelector("h1").textContent = ("🚩Player 2 Wins!");
          }
    }

        winnerText();
        