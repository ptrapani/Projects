 var playerTurn = 1;
 var IsGameOver = "false";


 $(".square").click(function () {

     if ($(this).text() === "") {
         if (playerTurn === 1) {
             $(this).text("X");
             Main();

         } else {
             $(this).text("O");
             Main();
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

     //If all 9 have been filled and no winner then game is over
     //traverse through board to determine if 3 in a row
 }

 function RestartGame() {
     //Clear board and make it player 1's turn   
 }