var last_name = "ward";
var originalSentence = document.getElementById("OriginalSentence").innerHTML;

/*operators
=  assigns values
+=  (concatenation assignment operator) adds to whatever variable currently has
== compares values
*/

//ouput vars to console
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





