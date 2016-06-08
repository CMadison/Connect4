$(document).ready(function() {

// Gameboard


// Get all gameboard elements row 0. Create 2d array to hold all references. Use for loop to iterate through and then concatenate as string and store in array.
// 2D array does not go away create object for each game space and store value of game space i.e. 0,1,2 and element of game space i.e. 00,06,60, etc.

// This generates the gameboard dynamically, but I need to figure out how to make the variable global so it can be accessed by other functions

function gbfun( rows, cols, defaultValue){

  var arr = [];

  // Creates all lines:
  for(var i=0; i < rows; i++){

      // Creates an empty line
      arr.push([]);

      // Adds cols to the empty line:
      arr[i].push( new Array(cols));

      for(var j=0; j < cols; j++){
        // Initializes:
        arr[i][j] = defaultValue;
      }
  }
console.log(arr);
return arr;
}
var gbArray = gbfun(7,7,0);


// Global variable that keeps track of user turn. Set this as true (player 1) or false (player 2). This variable will be set to the opposite on button click of current player's turn.

var playerOneTurn = true;


// create a for loop that checks each array position in a column and runs logic if not null check next cell in column else set gbarray = to space in which

$("#row0 .cell").on('click', playpiece);


function playpiece() {
  var id = $(this).attr('id');
  console.log(id)
  var coords = id.split("")
  var col = parseInt(coords[0])

for (var i = 6; i >= 0; i--) {
  if (gbArray[col][i] !== 0) {
  }
  else if (playerOneTurn === true) {
    gbArray[col][i] = 1;
    $("#"+col+i).css("background-color","red");
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);
    return (gbArray[col][6]);
    }
  else {
    gbArray[col][i] = 2;
    $("#"+col+i).css("background-color","blue");
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);
    return (gbArray[col][6]);
}

// Create 3 seperate functions to test for winning conditions (horizontal, vertical, and diagonal). All should be in one overarching function to test winning condition.
        // For winning conditions, you need to test each cell.

// put this into a modular function that can be called for any event.
        // Win state
        // 1. Should check all divs to see which div has text
        // 2. Should check if text is ==== "x" or "o"
        // 3. Should
    };

}
// new game button reloads the page to start a new game
   $('#newGameBtn').click(function() {
    location.reload();
    });
});



// Extra Code that works


// Gameboard

// var gbArray = [[0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0]];
