//TO DO: makes these init values their own function.  Might need to make variables global though or namespace or properties of the methods

var playerTurn = 1;
var playerSymbol = "X";
var IsGameOver = "false";
$("#display-message").text("Player " + playerTurn + "'s Turn");

$(".square").click(function () {
    if ($(this).text() === "") {
        if (playerTurn === 1) {
            $(this).text(playerSymbol);
            CheckWinner();

        } else {
            $(this).text(playerSymbol);
            CheckWinner();
        }
    } else {
        $("#display-message").text("Not a valid move");
    }
});

$("#reset").on("click", function () {
    RestartGame();
});

function SwitchPlayer() {
    //Switch turns
    if (playerTurn === 1) {
        playerTurn = 2;
        playerSymbol = "O";
    } else {
        playerTurn = 1;
        playerSymbol = "X";
    }

    $("#display-message").text("Player " + playerTurn + "'s Turn");
}


function CheckWinner() {
    var isGameOver = "false";
    var NoWinner = "true";
    var winningCombo = playerSymbol + playerSymbol + playerSymbol;

    //Only check for current player

    //Check horizontal
    if (winningCombo === $("#row1 .square").text() || winningCombo === $("#row2 .square").text() || winningCombo === $("#row3 .square").text()) {
        isGameOver = "true";
        NoWinner = "false";
    }


    //Check vertical. 
    if (winningCombo === $(".col1").text() || winningCombo === $(".col2").text() || winningCombo === $(".col3").text()) {
        isGameOver = "true";
        NoWinner = "false";
    }


    //Check Diagonal
    if (playerSymbol === $("#row1 .col1").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col3").text()) {
        isGameOver = "true";
        NoWinner = "false";
    }

    if (playerSymbol === $("#row1 .col3").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col1").text()) {
        isGameOver = "true";
        NoWinner = "false";
    }


    DetermineNextTurn(isGameOver, NoWinner);
}


function DetermineNextTurn(isGameOver, NoWinner) {
    if (isGameOver === "true") {

        //Board is full, no winner
        if (NoWinner === "true") {
            $("#display-message").text("It's a draw!");
            $("#reset").show();
            $(".square").off("click");
        }
        //A player has won
        else {
            $("#display-message").text("Player " + playerTurn + " has won!");
            $("#reset").show();
            $(".square").off("click");
        }
    }
    //Continue to next turn
    else {
        SwitchPlayer();
    }
}

function RestartGame() {
    //Clear board and make it player 1's turn
    //Might not even need this actually
    //TO DO: Empty out all the squares so that reset works   
    //InitNewGame();
}