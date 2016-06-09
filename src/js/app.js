$(document).ready(function() {

// Gameboard


// Get all gameboard elements row 0. Create 2d array to hold all references. Use for loop to iterate through and then concatenate as string and store in array.

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

for (var row = 6; row >= 0; row--) {
  if (gbArray[col][row] !== 0) {
  }
  else if (playerOneTurn === true) {
    gbArray[col][row] = 1;
    $("#"+col+row).css("background-color","red");
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);


     verticalWin();
     horizontalWin()
     return;

    }
  else {
    gbArray[col][row] = 2;
    $("#"+col+row).css("background-color","blue");
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);
    verticalWin();
    horizontalWin()
    return (gbArray[col][row]);
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

// Borrowed and adapted from https://github.com/bryanbraun/connect-four

function verticalWin() {
    var currentValue = null,
        previousValue = 0,
        tally = 0;

    // Scan each row in series, tallying the length of each series. If a series
    // ever reaches four, return true for a win.
    for (var col = 0; col <= 5; col++) {
        for (var row = 0; row <= 6; row++) {
            currentValue = gbArray[col][row];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 4 - 1) {
                swal("You win! Be a good sport about it, and play another match.")
                $("#row0 .cell").unbind("click");
                return;
            }
            previousValue = currentValue;
        }

        // After each row, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }

    // No horizontal win was found.
    return;
}

function horizontalWin() {
    var currentValue = null,
        previousValue = 0,
        tally = 0;

    // Scan each column in series, tallying the length of each series. If a
    // series ever reaches four, return true for a win.
    for (var row = 0; row <= 6; row++) {
        for (var col = 0; col <= 5; col++) {
            currentValue = gbArray[col][row];
            if (currentValue === previousValue && currentValue !== 0) {
                tally += 1;
            } else {
                // Reset the tally if you find a gap.
                tally = 0;
            }
            if (tally === 4 - 1) {
                swal("You win! Be a good sport about it, and play another round.")
                $("#row0 .cell").unbind("click");
                return true;
            }
            previousValue = currentValue;
        }

        // After each column, reset the tally and previous value.
        tally = 0;
        previousValue = 0;
    }

    // No vertical win was found.
    return false;
}
});
// Extra Code that works dont touch


// Gameboard

// var gbArray = [[0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0],
//               [0,0,0,0,0,0,0]];


// // vertical win or right win
//  if (/*south win*/gbArray[row+1]&&gbArray[col][row] == gbArray[col][row+1] && gbArray[row+2]&&gbArray[col][row] == gbArray[col][row+2] && gbArray[row+3]&&gbArray[col][row] == gbArray[col][row+3]

//  /*west win*/(gbArray[col-1]&&gbArray[col][row] == gbArray[col-1][row]) && gbArray[col-2]&&gbArray[col][row] == gbArray[col-2][row] && gbArray[col-3]&&gbArray[col][row] == gbArray[col-3][row]

// || /*north win*/gbArray[row-1]&&gbArray[col][row] == gbArray[col][row-1] && gbArray[row-2]&&gbArray[col][row] == gbArray[col][row-2] && gbArray[row-3]&&gbArray[col][row] == gbArray[col][row-3]

// || /*east win*/gbArray[col+1]&&gbArray[col][row] == gbArray[col+1][row] && gbArray[col+2]&&gbArray[col][row] == gbArray[col+2][row] && gbArray[col+3]&&gbArray[col][row] == gbArray[col+3][row]

// || /*northeast win*/gbArray[col+1]&&gbArray[col][row]&&[row-1]&&gbArray[col][row] == gbArray[col+1][row-1] && gbArray[col+2][row-2]&&gbArray[col][row] == gbArray[col+2][row-2] && gbArray[col+3][row-3]&&gbArray[col][row] == gbArray[col+3][row-3]

// || /*northwest win*/gbArray[col-1]&&gbArray[col][row][row-1]&&gbArray[col][row] == gbArray[col-1][row-1] && gbArray[col-2][row-2]&&gbArray[col][row] == gbArray[col-2][row-2] && gbArray[col-3][row-3]&&gbArray[col][row] == gbArray[col-3][row-3]) {


//     }
