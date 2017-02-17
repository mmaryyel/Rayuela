$(document).ready(function() {
	// Tu código va aquí
    // el signo $ al iniciar la variable nos informa
    //que tiene un selector de jquery(no tiene ninguna otra funcion ni afecta en nada)
    $player1 = $("#player1");
	$player2 = $("#player2");
	elapsed = 3;
	total = 0; // 20 mins in seconds
    positions = {}
    
    $("#start_btn").on("click", function(){
        reloadGame();
         
    	interval = setInterval(countDown, 1000);
  	})
});
	

var countDown = function(){
    if(elapsed > total){
        $('#elapsed').html(elapsed);
          elapsed -= 1;
    } else {
        clearInterval(interval);
        $('#elapsed').html("Empieza!");
        // Declaras una funcion anonima con un argumento vacio,y donde el cuerpo
        // de la es el primer argumento que teniamos establecido.
        playerGame1 = setInterval(function() { startGame($player1) }, 10);
        playerGame2 = setInterval(function(){ startGame($player2) }, 10);
        $(document).on("keydown", stopPlayer);
    }   
}
 
var startGame = function(player){

	// console.log(player);
    player.find(".active").next().addClass("active");
	player.find(".active").prev().removeClass("active");
}

var stopPlayer = function(event){
    if (event.keyCode === 90) {
      clearInterval(playerGame1);
      findingPositions($player1);
    }

    if (event.keyCode === 77){
      clearInterval(playerGame2);
      findingPositions($player2);      
    }
}

var findingPositions = function(player){
    var key = player.attr("id");
    var value = player.find(".active").attr("id");
    positions[key] = Number(value);
    calculateWinner();
    
}

function calculateWinner(){
  console.log("inside winner")

  if (positions.player1 > 87 && positions.player2 > 87) {
    $('#winner').html('Ambos perdieron');
  } else if (positions.player1 < 87 && positions.player2 > 87) {
    $('#winner').html('Jugador 1 gana');
  } else if (positions.player2 < 87 && positions.player1 > 87) {
    $('#winner').html('Jugador 2 gana');
  } else if (positions.player1 < 87 && positions.player2 < 87) {
    if (positions.player1 === positions.player2) {
      $('#winner').html('¡Empate!');
    } else if (positions.player1 < positions.player2) {
      $('#winner').html('Jugador 2 gana');
    } else if (positions.player2 < positions.player1) {
      $('#winner').html('Jugador 1 gana');
    }
  }
}

function reloadGame(){
    $(".active").removeClass("active");
    $("tr td:nth-child(2)").addClass("active");
}