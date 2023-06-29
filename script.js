let player1 = "Tom";
let player2 = "Jerry";

function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  console.log(diceNum1, 'this is ane')

  diceNum1.setAttribute("src", "diceroll.gif");
  diceNum2.setAttribute("src", "diceroll.gif");

  let result = document.querySelector('h1');
  result.innerHTML = "";
  setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    diceNum1.setAttribute('src', 'dice' + randomNumber1 + '.png');
    diceNum2.setAttribute('src', 'dice' + randomNumber2 + '.png');

    //determine the winner
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      result.innerHTML = (player2 + " WINS!");
    } else {
      result.innerHTML = (player1 + " WINS!");
    }
  }, 2500);
}
