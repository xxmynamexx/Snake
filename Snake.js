
//Constants detailing board constraints
var BOARD_WIDTH = 250, BOARD_LENGTH = 250;

//Directions
var NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3;

//Board items
var EMPTY = 0, SNAKE = 1, FOOD = 2;

//Object size

var objSize = Math.floor(BOARD_LENGTH / 50);

//Canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = BOARD_WIDTH;
canvas.height = BOARD_LENGTH;
 


var board = {
	width: BOARD_WIDTH,
	length: BOARD_LENGTH,
	grid: [null],

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

		this.increaseLength(x,y);
	},

	//Function that increases length of snake
	increaseLength: function(x,y){

		this.followers.unshift([x,y]);
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
	for(var x = 0; x < board.width; x++){
		for(var y = 0; y < board.length; y++)
			if( board.grid[x][y] === EMPTY){
				emptyTracker.push([x,y]);
			}
	}
	var randomTile = Math.floor(Math.random()*emptyTracker.length);
	randomTile = emptyTracker[randomTile];
	board.set(FOOD,randomTile[0],randomTile[1]);
	console.log("random tile is :" + randomTile);



}



function main(){
	//setCanvas();
	board.init();
	var snakeSpawn = {x:(Math.floor(board.width/2))  , y:(Math.floor(board.length/2 ))};	
	snake.init(snakeSpawn.x,snakeSpawn.y,NORTH);
	board.set(SNAKE,snakeSpawn.x,snakeSpawn.y);
	console.log(board.grid);
	addFood();
	drawBoard();
}

function drawBoard(){
	for(var x = 0; x < board.width; x++){
		for(var y = 0; y < board.length; y++){
			switch (board.get(x,y)){
				case EMPTY:
					//ctx.fillStyle= '#FFFFFF';
					break;
				case SNAKE:
					ctx.fillStyle= '#007F00';
					ctx.fillRect(x,y,objSize,objSize);
					break;
				case FOOD:
					ctx.fillStyle= '#660000';
					ctx.fillRect(x,y,objSize,objSize);
					break;
			}
		}
		}

}

main();
