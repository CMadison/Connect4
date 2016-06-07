$(document).ready(function() {

// Gameboard

var gbArray = [[0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]];

/*Figure out how to create gameboard dynamically.*/

// Get all gameboard elements row 0
var a0 = document.getElementById('a0');
var b0 = document.getElementById('b0');
var c0 = document.getElementById('c0');
var d0 = document.getElementById('d0');
var e0 = document.getElementById('e0');
var f0 = document.getElementById('f0');
var g0 = document.getElementById('g0');

// Get all gameboard elements row 1
var a1 = document.getElementById('a1');
var b1 = document.getElementById('b1');
var c1 = document.getElementById('c1');
var d1 = document.getElementById('d1');
var e1 = document.getElementById('e1');
var f1 = document.getElementById('f1');
var g1 = document.getElementById('g1');

// Get all gameboard elements row 2
var a2 = document.getElementById('a2');
var b2 = document.getElementById('b2');
var c2 = document.getElementById('c2');
var d2 = document.getElementById('d2');
var e2 = document.getElementById('e2');
var f2 = document.getElementById('f2');
var g2 = document.getElementById('g2');

// Get all gameboard elements row 3
var a3 = document.getElementById('a3');
var b3 = document.getElementById('b3');
var c3 = document.getElementById('c3');
var d3 = document.getElementById('d3');
var e3 = document.getElementById('e3');
var f3 = document.getElementById('f3');
var g3 = document.getElementById('g3');

// Get all gameboard elements row 4
var a4 = document.getElementById('a4');
var b4 = document.getElementById('b4');
var c4 = document.getElementById('c4');
var d4 = document.getElementById('d4');
var e4 = document.getElementById('e4');
var f4 = document.getElementById('f4');
var g4 = document.getElementById('g4');

// Get all gameboard elements row 5
var a4 = document.getElementById('a4');
var b4 = document.getElementById('b4');
var c4 = document.getElementById('c4');
var d4 = document.getElementById('d4');
var e4 = document.getElementById('e4');
var f4 = document.getElementById('f4');
var g4 = document.getElementById('g4');

// Get all gameboard elements row 6
var a6 = document.getElementById('a6');
var b6 = document.getElementById('b6');
var c6 = document.getElementById('c6');
var d6 = document.getElementById('d6');
var e6 = document.getElementById('e6');
var f6 = document.getElementById('f6');
var g6 = document.getElementById('g6');


// console.log(a1.value)
//     a1.addEventListener('click', function(event) {
//         if (a1.innerHTML === "") {
//             if (turn % 2 === 0) {
//                 a1.innerHTML = "X";
//                 turn = turn + 1;
//                 document.getElementById("a1").style.color = "red";
//                 console.log(turn);
//             } else {
//                 a1.innerHTML = "O";
//                 turn = turn + 1;
//                 document.getElementById("a1").style.color = "blue";
//                 console.log(turn);
//             }
//         }


// Global variable that keeps track of user turn. Set this as true (player 1) or false (player 2). This variable will be set to the opposite on button click of current player's turn.

var playerOneTurn = true;

console.log(gbArray);



/* This is working code, do not touch

$("#a0").on('click', function() { // put this into a modular function that can be called for any event.
if (gbArray[6][0] === 0) {
  if (playerOneTurn === true) {
    gbArray[6][0] = 1;
    // update div with game piece (a1.innerHTML = "X";)
    playerOneTurn = false;
    console.log(gbArray);
    console.log(playerOneTurn);


        }
        // Win state
        // 1. Should check all divs to see which div has text
        // 2. Should check if text is ==== "x" or "o"
        // 3. Should
    };

});
*/
// create a for loop that checks each array position in a column and runs logic if not null check next cell in column else set gbarray = to space in which

$("#a0").on('click', function() { // put this into a modular function that can be called for any event.
for (var i = 6; i >= 0; i--) {
  if (gbArray[i][0] !== 0) {
  }
  else if (playerOneTurn === true) {
    gbArray[i][0] = 1;
    // update div with game piece (a1.innerHTML = "X";)
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);
    return (gbArray[6][0]);
    }
  else {
    gbArray[i][0] = 2;
    // update div with game piece (a1.innerHTML = "X";)
    playerOneTurn = !playerOneTurn;
    console.log(gbArray);
    console.log(playerOneTurn);
    return (gbArray[6][0]);
}

        // Win state
        // 1. Should check all divs to see which div has text
        // 2. Should check if text is ==== "x" or "o"
        // 3. Should
    };

});

});
  // $("#a7").html('<img src="/css/assets/Red Piece_CWF.png"/>');



// Create 3 seperate functions to test for winning conditions (horizontal, vertical, and diagonal). All should be in one overarching function to test winning condition.
        // For winning conditions, you need to test each cell.


// for (int i = 0; i < gbArray.length; i++)
//     gbArray[i][k];
//   if
// }
