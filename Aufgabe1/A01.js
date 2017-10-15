/*
Aufgabe 01: Canvas - Skipiste
Name: Chris Schmieder
Matrikel: 256029
Datum: 15.10.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
window.addEventListener("load", ski);
function ski() {
    (document.getElementsByTagName("canvas")[0]);
    let canvas = document.getElementsByTagName("canvas")[0];
    let crc2 = canvas.getContext("2d");
    //Himmel
    crc2.fillStyle = "#42b6f4";
    crc2.fillRect(0, 0, 800, 600);
    //Berg 1
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(175, 100); //h�he
    crc2.lineTo(350, 550);
    crc2.lineTo(0, 550);
    crc2.fill();
    //Berg 2
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(300, 30); //h�he
    crc2.lineTo(500, 500);
    crc2.lineTo(100, 500);
    crc2.fill();
    //Berg 3
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(400, 130); //h�he
    crc2.lineTo(600, 500);
    crc2.lineTo(200, 500);
    crc2.fill();
    //Wolke1
    crc2.beginPath();
    crc2.arc(70, 70, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(130, 70, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(100, 55, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(100, 85, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    //Wolke2
    crc2.beginPath();
    crc2.arc(320, 110, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(360, 110, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(340, 95, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FAFAFA";
    crc2.fill();
    crc2.beginPath();
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
    crc2.stroke();
    //Anker
    //senkrecht
    crc2.beginPath();
    crc2.moveTo(250, 261);
    crc2.lineTo(250, 300);
    crc2.stroke();
    //horizontal
    crc2.beginPath();
    crc2.moveTo(240, 300);
    crc2.lineTo(260, 300);
    crc2.stroke();
    //Baum1
    crc2.beginPath();
    crc2.moveTo(500, 600);
    crc2.lineTo(550, 500);
    crc2.lineTo(600, 600);
    crc2.lineTo(0, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#276D28";
    crc2.fill();
    //Baum2
    crc2.beginPath();
    crc2.moveTo(600, 600);
    crc2.lineTo(650, 400);
    crc2.lineTo(680, 600);
    crc2.lineTo(600, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#276D28";
    crc2.fill();
}
//# sourceMappingURL=A01.js.map