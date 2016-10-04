//Constants


var BOARD_WIDTH = 60;
var BOARD_LENGTH = 60;
 
var board = {
	width: null,
	length: null,
	grid: null,

	init: function(){
		width = BOARD_WIDTH;
		length = BOARD_LENGTH;
		grid = [];

		for(var x;x< BOARD_WIDTH;x++){
			for(var y;y< BOARD_LENGTH;y++){
				grid[x][y] = 'x';
			}
		}

	}

};



var snake = {
	direction: null,
	followers: null,

	init: function(x,y){

	}

};



function main(){
	document.write("Hello World!");
}

main();
