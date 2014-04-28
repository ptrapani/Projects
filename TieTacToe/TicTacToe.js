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


 function Main() {
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

     //Traverse through board to determine if 3 in a row
     //Only check for current player


     DetermineNextTurn(isGameOver, NoWinner);
 }


 function DetermineNextTurn(isGameOver, NoWinner) {
     if (isGameOver === "true") {

         //Board is full, no winner
         if (NoWinner === "true") {
             $("#display-message").text("It's a draw!");
             //Reset button displays            
         }
         //A player has won
         else {
             $("#display-message").text("Player " + playerTurn + " has won!");
         }
     }
     //Continue to next turn
     else {
         Main();
     }
 }

 function RestartGame() {
     //Clear board and make it player 1's turn   
 }