alert(" Welcome to Stone, Sheet, Knife Game! ");

//assign less than 1 = stone, less than 2 = sheet, then else less than 3 = knife for the computer to be chosen at random and will later use that to determine to who wins

let computer = Math.floor(Math.random() * 3);
    if (computer <= 1) {
        computer = "stone";
        } else if (computer <= 2) {
        computer = "sheet";
        } else {
        computer = "knife";
        }

//make a button to start the game
function startGame() {
    //prompt the player to enter 1 of the 3 choices   

    const player = prompt("Type stone, sheet, or knife, if you dont spell it correctly, it will be undefined: ")

    //make a function to check the 3 choices following the rules of the game.
    //if it's the same choice then game is a tie
    //stone beats knife, knife slice sheet, sheet wraps stone

    const checkWin = function(computerChoice,playerChoice) {
        if (computerChoice === playerChoice) {
            return "Nobody wins, it's a tie! Refresh the page to play again!";
        }

        if (computerChoice === "stone" && playerChoice === "knife" || computerChoice === "sheet" && playerChoice === "stone" || computerChoice === "knife" && playerChoice === "sheet") {
            return "You win. Refresh the page to play again!";
        } else {
            return "You lose. Refresh the page to play again!";    
        }       
    }

    //call the checkwin function to play the game
    let playGame = checkWin(player,computer);

    //display the results of the game to the DOM
    document.writeln("Player chooses " + player + " and " + "Computer chooses " + computer + " Sooooo " + playGame);

}

   

