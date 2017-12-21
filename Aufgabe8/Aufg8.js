/*
Aufgabe 08
Name: Chris Schmieder
Matrikel: 256029
Datum: 18.12.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var L08;
(function (L08) {
    window.addEventListener("load", init); // L�dt die Init Funktion
    function init() {
        var anzahl = prompt("Gebe eine Zahl von 10-100 an."); // "promt" = Fenster das eine Eingabe zul�sst.
        var anzahlnummer = parseInt(anzahl); //Eingabe von String in Number umwandeln
        if (anzahlnummer >= 10 && anzahlnummer <= 100) {
            for (var i = 0; i < anzahlnummer; i++) {
                draw(); //Funktionsaufruf, Parameter werden �bergeben
            }
        }
        else {
            window.alert("Zahlen von 10-100 sollte man in der Grundschule gelernt haben..."); //Bei falscher Eingabe.
            init(); //Funktionsaufruf um Eingabe einer Zahl neu zu starten.
        }
    }
    function draw() {
        var div = document.createElement("div");
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.left = Math.random() * 1920 + "px";
        div.style.top = Math.random() * 1080 + "px";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        document.body.appendChild(div);
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=Aufg8.js.map