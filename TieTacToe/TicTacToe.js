 var playerTurn = 1;
 var IsGameOver = "false";
 $("#display-message").text("Player " + playerTurn + "'s Turn");


 $(".square").click(function () {

     if ($(this).text() === "") {
         if (playerTurn === 1) {
             $(this).text("X");
             CheckWinner();

         } else {
             $(this).text("O");
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
     } else {
         playerTurn = 1;
     }

     $("#display-message").text("Player " + playerTurn + "'s Turn");
 }


 function CheckWinner() {
     var isGameOver = "false";
     var NoWinner = "true";

     //If all 9 have been filled and no winner then game is over
     //traverse through board to determine if 3 in a row

     if (isGameOver === "true") {
         //Either display Winner or board is full
         if (NoWinner === "true") {
             $("#display-message").text("No winner, game is over");
         } else {
             $("#display-message").text("Player " + playerTurn + " has won!");
         }
     }
     //Game isn't over, next turn
     else {
         Main();
     }
 }

 function RestartGame() {
     //Clear board and make it player 1's turn   
 }