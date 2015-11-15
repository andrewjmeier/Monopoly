// require("./board/boardConstants.js");
var TableTop = require("tabletop-boardgames");

var Player = require("./monopoly_player.js");
var Card = require("./cards/card.js");
var Game = require("./monopoly_game.js");
// var Utils = require("./utils.js");
var Board = require("./board_utils.js");
var Turn = require("./monopoly_turn.js");
var MonopolyView = require("./view/monopoly_view.js");


var john = new Player("Andrew", 1);

var steve = new Player("Quinn", 2);

var sam = new Player("James", 3);

var mike = new Player("Kevin", 4);

var jimmy = new Player("KC", 5);

var players = [john, steve, sam, mike, jimmy];

var board = new Board();

console.log(players);

var monopoly = new Game(players, board, null);

var turn = new Turn(monopoly);

monopoly.turnMap = turn;


var view = new MonopolyView(monopoly, turn);

view.drawBoard();