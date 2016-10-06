
//Constants detailing board constraints
var BOARD_WIDTH = 30, BOARD_LENGTH = 30;

//Directions
var NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3;

//Board items
var EMPTY = 0, SNAKE = 1, FOOD = 2;
 


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

		this.followers.push([x,y]);
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



}



function main(){
	setCanvas();
	board.init();
	var snakeSpawn = {x:Math.floor(Math.random() * (Math.floor(board.width/2)) + Math.floor(board.width/4))  , y:Math.floor(Math.random() * Math.floor((board.length/2 )) + Math.floor(board.length/4))};	
	snake.init(snakeSpawn.x,snakeSpawn.y,NORTH);
	board.set(SNAKE,snakeSpawn.x,snakeSpawn.y);
	console.log(snakeSpawn);
	 addFood();

	 //document.write(board.grid);
}


function setCanvas(){

	var canvas = document.createElement("canvas");
	canvas.width = BOARD_WIDTH * 10;
	canvas.length = BOARD_LENGTH * 10;
	var ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);

}

main();
