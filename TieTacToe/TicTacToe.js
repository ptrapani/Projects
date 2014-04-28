//TO DO: makes these init values their own function.  Might need to make variables global though or namespace or properties of the methods

var playerTurn = 1;
var playerSymbol = "X";
var IsGameOver = "false";
$("#display-message").text("Player " + playerTurn + "'s Turn");

$(".square").on("click", squareClickEvent);

function squareClickEvent() {
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
}

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

    //Check horizontal
    if (winningCombo === $("#row1 .square").text() || winningCombo === $("#row2 .square").text() || winningCombo === $("#row3 .square").text()) {
        isGameOver = "true";
        NoWinner = "false";
        DetermineNextTurn(isGameOver, NoWinner);
    }


    //Check vertical. 
    else if (winningCombo === $(".col1").text() || winningCombo === $(".col2").text() || winningCombo === $(".col3").text()) {
        isGameOver = "true";
        NoWinner = "false";
        DetermineNextTurn(isGameOver, NoWinner);
    }


    //Check Diagonal
    else if (playerSymbol === $("#row1 .col1").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col3").text()) {
        isGameOver = "true";
        NoWinner = "false";
        DetermineNextTurn(isGameOver, NoWinner);
    } else if (playerSymbol === $("#row1 .col3").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col1").text()) {
        isGameOver = "true";
        NoWinner = "false";
        DetermineNextTurn(isGameOver, NoWinner);
    }

    //Board is full and nobody has won
    else if ($(".square").text().length === 9) {
        isGameOver = "true";
        NoWinner = "true";
        DetermineNextTurn(isGameOver, NoWinner);
    } else {
        DetermineNextTurn(isGameOver, NoWinner);
    }
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
    playerTurn = 1;
    playerSymbol = "X";
    IsGameOver = "false";
    $(".square").text("");
    $(".square").on("click", squareClickEvent);
    $("#display-message").text("Player " + playerTurn + "'s Turn");
}