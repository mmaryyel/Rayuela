$(document).ready(function() {
	// Tu código va aquí
    player1 = $("#Player1");
	player2 = $("#Player2");
	elapsed = 3;
	total = 0; // 20 mins in seconds
    $("#start_btn").on("click", function(){
    	interval = setInterval(countDown, 1000);
  	})
});
	
var startGame = function(){
	console.log("inside startGame")

	// console.log(player);
	// $(".active").next().addClass("active");
	// $(".active").prev().removeClass("active");
}

var countDown = function(){
    if(elapsed > total){
        $('#elapsed').html(elapsed);
          elapsed -= 1;
    } else {
        clearInterval(interval);
        $('#elapsed').html("Empieza!");
        // Declaras una funcion anonima con un argumento vacio,y donde el cuerpo
        // de la es el primer argumento que teniamos establecido.
        playerGame1 = setInterval(startGame, 100);
        // playerGame2 = setInterval(function(){ startGame(player2) }, 100);
    }   
}
 