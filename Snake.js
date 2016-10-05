//Constants


var BOARD_WIDTH = 60;
var BOARD_LENGTH = 60;
var EMPTY = 0, SNAKE = 1, FOOD = 2;
 
var board = {
	width: BOARD_WIDTH,
	length: BOARD_LENGTH,
	grid: null,

	//Initializes board
	init: function(){
		this.grid = [];

		for(var x = 0;x< this.width;x++){
			this.grid.push([]);
			for(var y = 0;y< this.length;y++){
				this.grid[x].push(0);
			}
		}

	},

	//Sets value of a space on the board with designated x,y coordinates
	set: function(val,x,y){
		this.grid[x][y] = val;
	},

	//Returns value at given x,y coordinate
	get: function(x,y){
		return this.grid[x][y];
	}

};



var snake = {
	direction: null,
	followers: null,
	end: null,

	//Initialize snake
	init: function(x,y,dir){

		this.direction = dir;

		this.followers = [];

		this.increaseLength();
	},

	//Function that increases length of snake
	increaseLength: function(){

		this.followers.push(SNAKE);
		this.end = this.followers[0];

	},

	//Shortens snake by removing follower
	remove: function(){
		this.followers.pop();
	}

};

//Adds food to a random tile on the board
function addFood(){
	emptyTracker = [];
	for(var x = 0; x < BOARD_WIDTH; x++){
		for(var y = 0; y < BOARD_LENGTH; y++)
			if( grid[x][y] === EMPTY){
				emptyTracker.push([x,y]);
			}
	}

	var randomTile = Math.floor(Math.random()*emptyTracker.length);
	board.set(FOOD,randomTile[0],randomTile[1]);



}



function main(){
	board.init();
	//document.write(board.grid[0]);
	// var testArray = [];
	// testArray.push([]);
	// testArray[0].push(5);
	// testArray.push(2);
	 console.log(board.grid);
	 board.grid[0][2] = 2;
	 document.write(board.grid);
}

main();
