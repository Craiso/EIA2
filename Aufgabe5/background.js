var L06_Class;
(function (L06_Class) {
    var Hintergrund = (function () {
        function Hintergrund(_x, _y, _c) {
            this.size = [];
            this.x = _x; //this definiert innerhalb einer klasse 
            this.y = _y;
            this.color = _c;
        }
        Hintergrund.prototype.drawHintergrund = function () {
            this.drawSky();
            this.drawMountain();
            this.drawPiste();
            this.drawLift();
        };
        Hintergrund.prototype.drawSky = function () {
            //Himmel
            L06_Class.crc3.fillStyle = "#42b6f4"; //2Dimensionaler Befehl f�r canvas
            L06_Class.crc3.fillRect(0, 0, 800, 600);
        };
        Hintergrund.prototype.drawPiste = function () {
            //Piste
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(0, 450);
            L06_Class.crc3.lineTo(800, 0);
            L06_Class.crc3.lineTo(800, 600);
            L06_Class.crc3.lineTo(0, 600);
            L06_Class.crc3.closePath();
            L06_Class.crc3.stroke();
            L06_Class.crc3.fillStyle = "#E8EEEE";
            L06_Class.crc3.fill();
        };
        Hintergrund.prototype.drawLift = function () {
            //Lift
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(0, 400);
            L06_Class.crc3.lineTo(725, 0);
            L06_Class.crc3.closePath();
            L06_Class.crc3.stroke(); // Zeichne Linie 
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(250, 261);
            L06_Class.crc3.lineTo(250, 300);
            L06_Class.crc3.stroke();
            //horizontal
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(240, 300);
            L06_Class.crc3.lineTo(260, 300);
            L06_Class.crc3.stroke();
        };
        Hintergrund.prototype.drawMountain = function () {
            //Berg 1
            L06_Class.crc3.fillStyle = "#a9a9a9"; //Farbe
            L06_Class.crc3.beginPath(); //Starte
            L06_Class.crc3.moveTo(175, 100); //Beweg dich zu dem Startpunkt
            L06_Class.crc3.lineTo(350, 550); //Beweg dich zu den Koordinaten
            L06_Class.crc3.lineTo(0, 550); // Beweg dich nochmal zu den Koordinaten
            L06_Class.crc3.fill(); // F�lle aus mit Fillstyle
            //Berg 2
            L06_Class.crc3.fillStyle = "#a9a9a9";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(300, 30); //hoehe
            L06_Class.crc3.lineTo(500, 500);
            L06_Class.crc3.lineTo(100, 500);
            L06_Class.crc3.fill();
            //Berg 3
            L06_Class.crc3.fillStyle = "#a9a9a9";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(400, 130); //hoehe
            L06_Class.crc3.lineTo(600, 500);
            L06_Class.crc3.lineTo(200, 500);
            L06_Class.crc3.fill();
        };
        return Hintergrund;
    }());
    L06_Class.Hintergrund = Hintergrund;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=background.js.map