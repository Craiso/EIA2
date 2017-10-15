/* 
Aufgabe 00: Miniseite
Name: Chris Schmieder
Matrikel: 256029
Datum: 15.10.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

var name = prompt("Mein Name ist...");
function init() {
    var node = document.getElementById("gruss");
    if (name.length < 1) {
        node.innerHTML = "Schade drum :(";
    }
    
    if (name.length >= 1) {
        node.innerHTML = "Herzlich willkommen liebe/-r " + name + " auf meiner Miniseite.";
    }
}
window.addEventListener("load", init);