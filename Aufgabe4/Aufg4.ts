/* 
Aufgabe 04: Schneegest�ber
Name: Chris Schmieder
Matrikel: 256029
Datum: 15.11.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe4 {

    interface SkiFahrer {
        x: number;
        y: number;
        dx: number;
        dy: number;
    }

    window.addEventListener("load", ski);
    //Initialisierung der Arrays
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let snowX: number[] = [];
    let snowY: number[] = [];
    let skierX: number[] = [];
    let skierY: number[] = [];
    let wolke1X: number[] = [];
    let wolke1Y: number[] = [];
    let wolke2X: number[] = [];
    let wolke2Y: number[] = [];

    let skifahrer: SkiFahrer[] = [];
    let imgData: ImageData; //Variable f�r Bildabspeicherung Hintergrund

    function ski(): void {

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
        for (let i: number = 0; i < 600; i++) {
            snowX[i] = Math.random() * 800;
            snowY[i] = Math.random() * 600;

        }


        //Wolkenbewegung

        for (let i: number = 0; i < 1; i++) {
            wolke1X[i] = Math.random() * 400;
            wolke1Y[i] = Math.random() * 100;
        }//close

        for (let i: number = 0; i < 1; i++) {
            wolke2X[i] = Math.random() * 200;
            wolke2Y[i] = Math.random() * 100;
        }//close

        //Skifahrer
        for (let i: number = 0; i < 1; i++) {
            skierX[i] = 800;
            skierY[i] = 280;
        }//close

        //Baumloop
        for (let i: number = 0; i < 2; i++) {
            let x: number = 200 + Math.random() * 500;
            let y: number = 400 + Math.random() * 150;
            ruleTree(x, y);
        }//close 

        //Feste B�ume
        ruleTree(500, 400);
        ruleTree(200, 450);


        //Bild wird gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        for (let i: number = 0; i < 3; i++) {
            skifahrer[i] = {
                x: Math.random() * (10) + 800,
                y: Math.random() * (-20) + 100,
                dx: Math.random() * 1 + 1.5,
                dy: Math.random() * 1 + 1.5

            };
        }
        animate(); //Funktion animate wird aufgerufen

    }
    // Funktion B�ume
    function ruleTree(x: number, y: number): void {
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

    }//function close





    //Anker
    //senkrecht
    function liftseat(x: number, y: number): void {
        crc2.beginPath();
        crc2.moveTo(250, 261);
        crc2.lineTo(250, 300);
        crc2.stroke();
        //horizontal
        crc2.beginPath();
        crc2.moveTo(240, 300);
        crc2.lineTo(260, 300);
        crc2.stroke();
    }//function close

    liftseat(200, 400);

    //Funktion Wolke1
    function createWolke1(x: number, y: number): void {
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
    }//function close

    //Funktion Wolke2
    function createWolke2(x: number, y: number): void {
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
    }//function close

    //Funktion f�r Skifahrer

    function drawAndMoveSkidriver(_Skidriver: SkiFahrer): void {
        _Skidriver.x += _Skidriver.dx * -3;
        _Skidriver.y += _Skidriver.dy * 2; //Steigung
        crc2.fillStyle = "#000000";
        crc2.fillRect(_Skidriver.x, _Skidriver.y, 10, -23);
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(_Skidriver.x + 5, _Skidriver.y - 23, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_Skidriver.x + 20, _Skidriver.y - 4);
        crc2.lineTo(_Skidriver.x - 20, _Skidriver.y + 4);
        crc2.stroke();
    }



    //Funktion Schneeflocken
    function ruleSnow(x: number, y: number): void {
        crc2.beginPath();
        crc2.arc(x, y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = ("white");
        crc2.fill();

    }//function close





    //Animate Funktion
    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); //l�scht alles
        crc2.putImageData(imgData, 0, 0); //Hintergrund wird gezeichnet


        //Schnee animieren
        for (let i: number = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += 2; //Jede Schneeflocke geht Y+2 
            ruleSnow(snowX[i], snowY[i]);
        }//close


        //Wolkenbewegung

        wolke1X[0] += 2;
        console.log(wolke1X[0]);
        createWolke1(wolke1X[0], wolke1Y[0]);


        //For-If Wenn Wolke 850 (x-wert) erreicht, starte wieder bei x - 100
        for (let i: number = 0; i < 1; i++) {
            if (wolke1X[i] > 850) {
                wolke1X[i] = -100;
            }
            if (wolke2X[i] > 850) {
                wolke2X[i] = -100;
            }
            wolke2X[i] += 2;
            createWolke2(wolke2X[i], wolke2Y[i]);
        }//close

        //For-If wenn Skifahrer 650 (y-wert) erreicht, starte wieder bei y - 280 und x 800
        //Skifahrer
        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            drawAndMoveSkidriver(skifahrer[i]);

            if (skifahrer[i].x < 0) {
                skifahrer[i].x = 900;
                skifahrer[i].y = -40;
            }
        }
        window.setTimeout(animate, 20);  //alle 20 ms f�hrt sich die Funktion neu aus
    }

}