/**
 * Created by ryanhoyda on 7/16/17.
 */

// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
//
// The constructor should accept two arguments: front and back.
//
// The constructed object should have a front property that contains the text on the front of the card.
//
// The constructed object should have a back property that contains the text on the back of the card.



//constructor taking 2 parameters front, and back
var BasicCard = function(front, back) {
    if(this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    }else{
        return new BasicCard(front, back)
    }

};

//exporting BasicCard constructor
module.exports = BasicCard;