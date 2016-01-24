var last_name = "ward";
var originalSentence = document.getElementById("OriginalSentence").innerHTML;

/*operators
=  assigns values
+=  (concatenation assignment operator) adds to whatever variable currently has
== compares values
*/

var static_words1 = "My fellow ";
var static_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt) {

    evt.preventDefault(evt); //prevent default input postback behavior

    var element1 = document.getElementById("form1").elements.item(0).value;
    var element2 = document.getElementById("form1").elements.item(1).value;
    var element3 = document.getElementById("form1").elements.item(2).value;
    var element4 = document.getElementById("form1").elements.item(3).value;
    var element5 = document.getElementById("form1").elements.item(4).value;

    console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
}

//ouput vars to console
//note to Jason:  this was part of my original start_homework before I saw your video!  I'll leave it here so that my original homework will still function.
function ChangeSentence() {
    var citizen = document.getElementById("Citizens").value;
    var country = document.getElementById("Country").value;
    var fellow = document.getElementById("Fellow").value;
    var actionVerb = document.getElementById("ActionVerb").value;
    var you = document.getElementById("You").value;
    var ask = document.getElementById("Ask").value;

    console.log("Original sentence: " + originalSentence);
    var finalSentence = originalSentence.replace("Americans", citizen);
    finalSentence = finalSentence.replace(/country/g, country);
    finalSentence = finalSentence.replace(/fellow/g, fellow);
    finalSentence = finalSentence.replace(/do/g, actionVerb);
    finalSentence = finalSentence.replace(/you /g, you + ' ');
    finalSentence = finalSentence.replace(/ask/g, ask);
    console.log("New sentence:" + finalSentence);
}





