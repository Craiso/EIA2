/*
Aufgabe 03: Schneegest�ber
Name: Chris Schmieder
Matrikel: 256029
Datum: 3.11.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", ski);
    //Initialisierung der Arrays
    var crc2;
    var canvas;
    var snowX = [];
    var snowY = [];
    var skierX = [];
    var skierY = [];
    var wolke1X = [];
    var wolke1Y = [];
    var wolke2X = [];
    var wolke2Y = [];
    var imgData; //Variable f�r Bildabspeicherung Hintergrund
    function ski() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Himmel
        crc2.fillStyle = "#42b6f4"; //2Dimensionaler Befehl f�r canvas
        crc2.fillRect(0, 0, 800, 600);
        //Berg 1
        crc2.fillStyle = "#a9a9a9"; //Farbe
        crc2.beginPath(); //Starte
        crc2.moveTo(175, 100); //Beweg dich zu dem Startpunkt
        crc2.lineTo(350, 550); //Beweg dich zu den Koordinaten
        crc2.lineTo(0, 550); // Beweg dich nochmal zu den Koordinaten
        crc2.fill(); // F�lle aus mit Fillstyle
        //Berg 2
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(300, 30); //hoehe
        crc2.lineTo(500, 500);
        crc2.lineTo(100, 500);
        crc2.fill();
        //Berg 3
        crc2.fillStyle = "#a9a9a9";
        crc2.beginPath();
        crc2.moveTo(400, 130); //hoehe
        crc2.lineTo(600, 500);
        crc2.lineTo(200, 500);
        crc2.fill();
        //Piste
        crc2.beginPath();
        crc2.moveTo(0, 450);
        crc2.lineTo(800, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E8EEEE";
        crc2.fill();
        //Lift
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(725, 0);
        crc2.closePath();
        crc2.stroke(); // Zeichne Linie 
        //Schneeloop
        for (var i = 0; i < 600; i++) {
            snowX[i] = Math.random() * 800;
            snowY[i] = Math.random() * 600;
        }
        //Wolkenbewegung
        for (var i = 0; i < 1; i++) {
            wolke1X[i] = Math.random() * 400;
            wolke1Y[i] = Math.random() * 100;
        } //close
        for (var i = 0; i < 1; i++) {
            wolke2X[i] = Math.random() * 200;
            wolke2Y[i] = Math.random() * 100;
        } //close
        //Skifahrer
        for (var i = 0; i < 1; i++) {
            skierX[i] = 800;
            skierY[i] = 280;
        } //close
        //Baumloop
        for (var i = 0; i < 2; i++) {
            var x = 200 + Math.random() * 500;
            var y = 400 + Math.random() * 150;
            ruleTree(x, y);
        } //close 
        //Feste B�ume
        ruleTree(500, 400);
        ruleTree(200, 450);
        //Bild wird gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate(); //Funktion animate wird aufgerufen
    }
    // Funktion B�ume
    function ruleTree(x, y) {
        //Stamm
        crc2.fillStyle = "#604629";
        crc2.fillRect(x, y, 20, 12);
        //Krone von unten nach oben
        crc2.fillStyle = "#517a17";
        crc2.beginPath();
        crc2.moveTo(x - 30, y);
        crc2.lineTo(x + 50, y);
        crc2.lineTo(x + 10, y - 70);
        crc2.fill();
        crc2.closePath();
        crc2.fillStyle = "#517a17";
        crc2.beginPath();
        crc2.moveTo(x - 25, y - 20);
        crc2.lineTo(x + 45, y - 20);
        crc2.lineTo(x + 10, y - 100);
        crc2.fill();
        crc2.closePath();
    } //function close
    //Anker
    //senkrecht
    function liftseat(x, y) {
        crc2.beginPath();
        crc2.moveTo(250, 261);
        crc2.lineTo(250, 300);
        crc2.stroke();
        //horizontal
        crc2.beginPath();
        crc2.moveTo(240, 300);
        crc2.lineTo(260, 300);
        crc2.stroke();
    } //function close
    liftseat(200, 400);
    //Funktion Wolke1
    function createWolke1(x, y) {
        crc2.beginPath();
        crc2.arc(x, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 60, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 30, 55, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 30, 85, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
    } //function close
    //Funktion Wolke2
    function createWolke2(x, y) {
        crc2.beginPath();
        crc2.arc(x, 110, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 40, 110, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 20, 95, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
    } //function close
    //Funktion f�r Skifahrer
    function createSkifahrer(x, y) {
        crc2.fillStyle = "#000000";
        crc2.fillRect(x, y, 10, -23);
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(x + 5, y - 23, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(x + 20, y - 4);
        crc2.lineTo(x - 20, y + 4);
        crc2.stroke();
    } //function close
    //Funktion Schneeflocken
    function ruleSnow(x, y) {
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = ("white");
        crc2.fill();
    } //function close
    //Animate Funktion
    function animate() {
        crc2.clearRect(0, 0, 800, 600); //l�scht alles
        crc2.putImageData(imgData, 0, 0); //Hintergrund wird gezeichnet
        //Schnee animieren
        for (var i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += 2; //Jede Schneeflocke geht Y+2 
            ruleSnow(snowX[i], snowY[i]);
        } //close
        //Wolkenbewegung
        wolke1X[0] += 2;
        console.log(wolke1X[0]);
        createWolke1(wolke1X[0], wolke1Y[0]);
        //For-If Wenn Wolke 850 (x-wert) erreicht, starte wieder bei x - 100
        for (var i = 0; i < 1; i++) {
            if (wolke1X[i] > 850) {
                wolke1X[i] = -100;
            }
            if (wolke2X[i] > 850) {
                wolke2X[i] = -100;
            }
            wolke2X[i] += 2;
            createWolke2(wolke2X[i], wolke2Y[i]);
        } //close
        //For-If wenn Skifahrer 650 (y-wert) erreicht, starte wieder bei y - 280 und x 800
        //Skifahrer
        for (var i = 0; i < skierY.length; i++) {
            if (skierY[i] > 650 || skierX[i] < 0) {
                skierX[i] = 800;
                skierY[i] = 280;
            }
            skierX[i] -= 2;
            skierY[i] += 2;
            createSkifahrer(skierX[i], skierY[i]); //zeichne Skifahrer aus Funktion
        }
        window.setTimeout(animate, 20); //alle 20 ms f�hrt sich die Funktion neu aus
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=Aufg3.js.map