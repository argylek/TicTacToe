var numberOfPlayers = 2;
var currentPlayer = 0;
var move = 0;
var points1 = 0; //player 1 points
var points2 = 0; //player 2 points
var size = 3;

function drawBoard()
{
  var parent = document.getElementById("game");
  var counter = 1;
  for (var i = 0; i < 3; i++)
  {
      var row = document.createElement("tr");
      
      for (var x = 0; x < size; x++)
      {
        var col = document.createElement("td");
        col.innerHTML = counter;
        
        row.appendChild(col);
      
      parent.appendChild(row);
      }
  }
}

var winners = new Array();

function loadAnswers()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

var player1Selections = new Array();
var player2Selections = new Array();

function drawBoard() {
  var Parent = document.getElementByID("game");
  var counter = 1;
  
  while (Parent.hasChildNodes()) {
    Parent.removeChild(Parent.firstChild);
  }
  
  for (s =0; s <3; s++) {
    var row = document.createElement("tr");
    
    for (r = 0; r < 3; r++) {
      var col = document.createElement("td");
      col.id = counter;
      col innerHTML = counter;
      
      var handler = function(e) {
        if (currentPlayer == 0) {
          this.innerHTML = "X";
          player1Selections.push(parseInt(this.id)):
          player1Selections.sort(function(a,b) { return a - b});
        }
        else {
          this.innerHTML = "0";
          player2Selections.push(parseInt(this.id));
          player2Selections.sort(function(a,b) { return a - b});
        }
        
      }
    }
  }
}