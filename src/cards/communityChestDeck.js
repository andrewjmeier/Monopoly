inherits = require('util').inherits;
Deck = require("./deck");
var Card = require("./card.js");


function CommunityChestDeck() {
  Deck.call(this);
  this.cards = buildCommunityChestDeck();
};

inherits(CommunityChestDeck, Deck);

var buildCommunityChestDeck = function() {

  var card1 = new Card("Advance to Go (Collect $200)", function(game) {
    game.getCurrentPlayer().moveTo(0);
    return game.board.spaces[0].performLandingAction(game);
  });

  var card2 = new Card("Bank error in your favor - collect $75", function(game) {
    game.getCurrentPlayer().makeDeposit(75);
    return ["", POST_TURN];
  });

  var card3 = new Card("Doctor's fees - Pay $50", function(game) {
    game.getCurrentPlayer().makePayment(50);
    return ["", POST_TURN];
  });

  var card4 = new Card("Get out of jail free - this card may be kept until needed, or sold", function(game) {
    game.getCurrentPlayer().getOutOfJailFreeCards += 1;
    return ["", POST_TURN];
  });

  var card5 = new Card("Go to jail - go directly to jail - Do not pass Go, do not collect $200", function(game) {
    game.getCurrentPlayer().sendToJail();
    return ["", POST_TURN];
  });

  var card6 = new Card("It is your birthday Collect $10 from each player", function(game) {
    game.getCurrentPlayer().collectFromPlayers(10, game.players);
    return ["", POST_TURN];
  });

  var card7 = new Card("Grand Opera Night - collect $50 from every player for opening night seats", function(game) {
    game.getCurrentPlayer().collectFromPlayers(50, game.players);
    return ["", POST_TURN];
  });

  var card8 = new Card("Income Tax refund - collect $20", function(game) {
    game.getCurrentPlayer().makeDeposit(20);
    return ["", POST_TURN];
  });

  var card9 = new Card("Life Insurance Matures - collect $100", function(game) {
    game.getCurrentPlayer().makeDeposit(100);
    return ["", POST_TURN];
  });

  var card10 = new Card("Pay Hospital Fees of $100", function(game) {
    game.getCurrentPlayer().makePayment(100);
    return ["", POST_TURN];
  });

  var card11 = new Card("Pay School Fees of $50", function(game) {
    game.getCurrentPlayer().makePayment(50);
    return ["", POST_TURN];
  });

  var card12 = new Card("Receive $25 Consultancy Fee", function(game) {
    game.getCurrentPlayer().makeDeposit(25);
    return ["", POST_TURN];
  });

  var card13 = new Card("You are assessed for street repairs - $40 per house, $115 per hotel", function(game) {
    var player = game.getCurrentPlayer();
    var housesCount = 0;
    var hotelsCount = 0;
    for (var prop in player.properties) {
      if (player.properties.hasOwnProperty(prop)) {
        if (player.properties[prop].hasHotel()) {
          hotelsCount += 1;
        } else {
          housesCount += player.properties[prop].numHouses;
        }
      }
    }
    var total = 40 * housesCount + 115 * hotelsCount;

    // TODO update this for correct value
    player.makePayment(total);
    return ["", POST_TURN];
  });

  var card14 = new Card("You have won second prize in a beauty contest - collect $10", function(game) {
    game.getCurrentPlayer().makeDeposit(10);
    return ["", POST_TURN];
  });

  var card15 = new Card("You inherit $100", function(game) {
    game.getCurrentPlayer().makeDeposit(100);
    return ["", POST_TURN];
  });

  var card16 = new Card("From sale of stock you get $50", function(game) {
    game.getCurrentPlayer().makeDeposit(50);
    return ["", POST_TURN];
  });

  var card17 = new Card("Holiday Fund matures - Receive $100", function(game) {
    game.getCurrentPlayer().makeDeposit(100);
    return ["", POST_TURN];
  });

  return [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17];
};

module.exports = CommunityChestDeck;
