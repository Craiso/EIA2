namespace L06_Class {
    export class Hintergrund {
        x: number;
        y: number;
        size: number[] = [];
        color: number;
        constructor(_x: number, _y: number, _c: number) { //Übergabe x-y Werte
            this.x = _x; //this definiert innerhalb einer klasse 
            this.y = _y;
            this.color = _c;
        }



        drawHintergrund(): void {
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
            this.drawLift();
        }
        drawSky(): void {
            //Himmel
            crc2.fillStyle = "#42b6f4"; //2Dimensionaler Befehl für canvas
            crc2.fillRect(0, 0, 800, 600);

            drawPiste(); void {
                //Piste
                crc2.beginPath(),
                crc2.moveTo(0, 450),
                crc2.lineTo(800, 0),
                crc2.lineTo(800, 600),
                crc2.lineTo(0, 600),
                crc2.closePath(),
                crc2.stroke(),
                crc2.fillStyle = "#E8EEEE",
                crc2.fill(),
            }
            drawLift(): void {
                //Lift
                crc2.beginPath(),
                crc2.moveTo(0, 400),
                crc2.lineTo(725, 0),
                crc2.closePath(),
                crc2.stroke(), // Zeichne Linie 
                crc2.beginPath(),
                crc2.moveTo(250, 261),
                crc2.lineTo(250, 300),
                crc2.stroke(),
                //horizontal
                crc2.beginPath(),
                crc2.moveTo(240, 300),
                crc2.lineTo(260, 300),
                crc2.stroke(),
            }

            drawMountain(): void {

                //Berg 1
                crc2.fillStyle = "#a9a9a9"; //Farbe
                crc2.beginPath(); //Starte
                crc2.moveTo(175, 100); //Beweg dich zu dem Startpunkt
                crc2.lineTo(350, 550); //Beweg dich zu den Koordinaten
                crc2.lineTo(0, 550); // Beweg dich nochmal zu den Koordinaten
                crc2.fill(); // Fülle aus mit Fillstyle
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
            }

            /*    setRandomStyle(): void { 
                    for (let i: number = 0; i < 5; i++) {
                        this.size[i] = Math.random() * 200 + 50;
                    }
                }    Für size (Berge o.ä.)                           */


        }
    }




