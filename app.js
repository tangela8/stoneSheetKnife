alert(" Welcome to Stone, Sheet, Knife Game! ");

//assign 1 = stone, 2 = sheet, 3 = knife for the computer to be chosen at random and will later use that to determine to who wins
let computer = Math.floor(Math.random() * 3);
if (computer <= 1) {
    computer = "rock";
    } else if(computer <= 2) {
    computer = "paper";
    } else {
    computer = "scissors";
    }

//make a button to start the game
function startGame() {
    //prompt the player to enter 1 of the 3 choices   
        const player = prompt("Type stone, sheet, or knife, if you dont spell it correctly, it will be undefined: ")
}


//make a function to check the 3 choices following the rules of the game.
//if it's the same choice then game is a tie
//stone beats knife, knife slice sheet, sheet wraps stone
