/* 
Aufgabe 08
Name: Chris Schmieder
Matrikel: 256029
Datum: 18.12.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */


namespace L08 {
    window.addEventListener("load", init); // Lädt die Init Funktion
    function init(): void {
        var anzahl: string = prompt("Gebe eine Zahl von 10-100 an."); // "promt" = Fenster das eine Eingabe zulässt.
        var anzahlnummer: number = parseInt(anzahl); //Eingabe von String in Number umwandeln
        if (anzahlnummer >= 10 && anzahlnummer <= 100) { //wenn Eingabe über o. gleich 10 oder unter/gl. 100 ist...
            for (var i: number = 0; i < anzahlnummer; i++) {
                draw(); //Funktionsaufruf, Parameter werden übergeben
            }
        } else {
            window.alert("Zahlen von 10-100 sollte man in der Grundschule gelernt haben..."); //Bei falscher Eingabe.
            init(); //Funktionsaufruf um Eingabe einer Zahl neu zu starten.
        }
    }

    function draw(): void {
        let div: HTMLElement = document.createElement("div");
        div.style.width = "40px";
        div.style.height = "40px";
        div.style.left = Math.random() * 1920 + "px";
        div.style.top = Math.random() * 1080 + "px";
        div.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        document.body.appendChild(div);
    }
}