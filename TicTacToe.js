$(document).ready(function () {
    var playerTurn = 1;

    $(".square").click(function () {

        if ($(this).text() === "") {
            if (playerTurn === 1) {
                $(this).text("X");
            } else {
                $(this).text("O");
            }
        }
    });
    
    
    function CheckWinner(){
    }
    
    
});