var prompt = require("prompt"); 
prompt.start(); // démarrage

var grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

// Objets du rover
var rover = {
  direction: "N",
  x: 0, // horizontale
  y: 0, // verticale
  travelLog: []
};

console.log(grid);
console.log(rover.x, rover.y, rover.direction);

// Fonctions du rover
// Nouvelle trajectoire rover gauche(turnLeft)

function turnLeft() {
  switch (rover.direction) {
    case "N":
      rover.direction = "w";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
  }
  console.log(rover.direction);
  console.log("Nouvelle trajectoire:à gauche" + rover.x + ", " + rover.y);
}

// Nouvelle trajectoire rover gauche(turnRight)

function turnRight() {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(rover.direction);
  console.log("Nouvelle trajectoire: à droite" + rover.x + ", " + rover.y);
}

// Déplacement du rover (moveForward)

function moveForward() {
  console.log("moveForward activation");
  switch (rover.direction) {
    case "N":
      if (rover.y === 0) {
        console.log("Limite de déplacement du rover atteinte");
      } else {
        rover.y += 1;
        grid[rover.y].splice(rover.y, 1, "N");
      }
      break;
    case "S":
      if (rover.y === 10) {
        console.log("Limite de déplacement du rover atteinte");
      } else {
        rover.y += 1;
        grid[rover.y].splice(rover.y, 1, "S");
      }
      break;
    case "E":
      if (rover.x === 10) {
        console.log("Limite de déplacement du rover atteinte");
      } else {
        rover.x += 1;
        grid[rover.x].splice(rover.x, 1, "E");
      }
      break;
    case "W":
      if (rover.x === 0) {
        console.log("Limite de déplacement du rover atteinte");
      } else {
        rover.x += 1;
        grid[rover.x].splice(rover.x, 1, "W");
      }
  }
  console.log(rover.direction);
}

// commandes de pilotage
 
function onErr(err) {
    console.log(err);
}






