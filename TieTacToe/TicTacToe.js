InitializeGame();

function InitializeGame() {
    window.player = "1";
    $(".square").text("");
    $(".square").on("click", SquareClickEvent);
    $("#display-message").text("Player " + player + "'s Turn");
}

function SquareClickEvent() {
    if ($(this).text() === "") {
        var playerSymbol = (player === "1") ? "X" : "O";
        $(this).text(playerSymbol);
        CheckWinner(playerSymbol);
    } else {
        $("#display-message").text("Not a valid move");
    }
}

$("#reset").on("click", function () {
    InitializeGame();
});

function SwitchPlayer() {
    player = (player === "1") ? "2" : "1";
    $("#display-message").text("Player " + player + "'s Turn");
}

function CheckWinner(playerSymbol) {

    var winningCombo = playerSymbol + playerSymbol + playerSymbol;

    //Check horizontal
    if (winningCombo === $("#row1 .square").text() || winningCombo === $("#row2 .square").text() || winningCombo === $("#row3 .square").text()) {
        PlayerWon();
    }

    //Check vertical. 
    else if (winningCombo === $(".col1").text() || winningCombo === $(".col2").text() || winningCombo === $(".col3").text()) {
        PlayerWon();
    }

    //Check Diagonal
    else if (playerSymbol === $("#row1 .col1").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col3").text()) {
        PlayerWon();
    } else if (playerSymbol === $("#row1 .col3").text() && playerSymbol === $("#row2 .col2").text() && playerSymbol === $("#row3 .col1").text()) {
        PlayerWon();
    }

    //Board is full and nobody has won
    else if ($(".square").text().length === 9) {
        PlayersTied();
    } else {
        SwitchPlayer();
    }
}

function PlayerWon() {
    $("#display-message").text("Player " + player + " has won!");
    $("#reset").show();
    $(".square").off("click");
}

function PlayersTied() {
    $("#display-message").text("It's a draw!");
    $("#reset").show();
    $(".square").off("click");
}