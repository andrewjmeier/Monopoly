require("./boardConstants");

var TableTop = require("../../lib/TableTop/bundle");
// var Tile = require("../../board/tile");
var inherits = require('util').inherits;


function Space(name) {
  TableTop.Tile.call(this);
  this.name = name;
  this.occupier = null;
};

inherits(Space, TableTop.Tile);


// every space needs a landing action
Space.prototype.performLandingAction = function(game){
  return ["You landed on " + this.name + ". \n", POST_TURN];
};

Space.prototype.isProperty = function() {
  return false;
};

module.exports = Space;
