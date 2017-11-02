/* 
Aufgabe 02: Schnee Bäume
Name: Chris Schmieder
Matrikel: 256029
Datum: 22.10.2017
        
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe2 {

window.addEventListener("load", ski);

function ski(): void {
        
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    
    //Himmel
    crc2.fillStyle = "#42b6f4";
    crc2.fillRect(0, 0, 800, 600);

    //Berg 1
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(175, 100); //hï¿½he
    crc2.lineTo(350, 550);
    crc2.lineTo(0, 550);
    crc2.fill();
    
    //Berg 2
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(300, 30); //hï¿½he
    crc2.lineTo(500, 500);
    crc2.lineTo(100, 500);
    crc2.fill();
    
    //Berg 3
    crc2.fillStyle = "#a9a9a9";
    crc2.beginPath();
    crc2.moveTo(400, 130); //hï¿½he
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
    
   
     //Baumloop
        for (let i: number = 0; i < 5; i++) {
        let x: number = 200 + Math.random() * 500;
        let y: number = 400 + Math.random() * 150;
            ruleTree(x, y, crc2);   
            }//close 
        
        //Schneeloop
        for (let i: number = 0; i < 600; i++) {
        let x: number = 0 + Math.random() * 800;
        let y: number = 0 + Math.random() * 600;
            ruleSnow(x, y, 2,"#ffffff", crc2);
            }//close

        
 }//close init


 // Funktion Bäume
            function ruleTree (x: number, y: number, crc2 : any): void {
                //Stamm
                crc2.fillStyle = "#604629";
                crc2.fillRect(x, y, 20, 12);
        
                //Krone von unten nach oben
                crc2.fillStyle = "#517a17";
                crc2.beginPath();
                crc2.moveTo(x-30, y); 
                crc2.lineTo(x+50, y);
                crc2.lineTo(x+10, y-70);
                crc2.fill(); 
                crc2.closePath();
                
                crc2.fillStyle = "#517a17";
                crc2.beginPath();
                crc2.moveTo(x-25, y-20); 
                crc2.lineTo(x+45, y-20);
                crc2.lineTo(x+10, y-100);
                crc2.fill();
                crc2.closePath();
                    
                
            }//function close
            
            //Funktion Schneeflocken
            function ruleSnow (x: number, y: number, r: number, color: string, crc2: any) : void {
                crc2.beginPath();
                crc2.arc(x, y, r, 0, 2*Math.PI);
                crc2.fillStyle = color;
                crc2.fill();                
            }//function close
}
