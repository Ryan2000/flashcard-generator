/**
 * Created by ryanhoyda on 7/16/17.
 */

// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
//
// The constructor should accept two arguments: text and cloze.
//
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
//
// The constructed object should have a partial property that contains only the partial text.
//
// The constructed object should have a fullText property that contains only the full text.
//
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
//
// Use prototypes to attach these methods, wherever possible.





//ClozeCard constructor taking parameter text and cloze
var ClozeCard = function(text, cloze) {
    //set fullText = to text bc that will equal entire text of the card
    this.fullText = text;
    //cloze is string we are removing from text and replacing with ... (answer)
    this.cloze = cloze;

        //checking if text includes cloze which is true or false
        if(text.includes(cloze)){
            //true condition
            //replacing the cloze portion of text with ...
            this.partial = text.replace(cloze, '...')
        } else {
            //false condition for line 32
            //cloze not inside of text then error
            throw new Error(cloze + ' not found in ' + text);
        }
};


module.exports = ClozeCard;