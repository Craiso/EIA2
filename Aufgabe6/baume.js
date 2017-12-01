var L06_Class;
(function (L06_Class) {
    var Baume = (function () {
        function Baume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Baume.prototype.draw = function () {
            //Stamm
            L06_Class.crc3.fillStyle = "#604629";
            L06_Class.crc3.fillRect(this.x, this.y, 20, 12);
            //Krone von unten nach oben
            L06_Class.crc3.fillStyle = "#517a17";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x - 30, this.y);
            L06_Class.crc3.lineTo(this.x + 50, this.y);
            L06_Class.crc3.lineTo(this.x + 10, this.y - 70);
            L06_Class.crc3.fill();
            L06_Class.crc3.closePath();
            L06_Class.crc3.fillStyle = "#517a17";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x - 25, this.y - 20);
            L06_Class.crc3.lineTo(this.x + 45, this.y - 20);
            L06_Class.crc3.lineTo(this.x + 10, this.y - 100);
            L06_Class.crc3.fill();
            L06_Class.crc3.closePath();
        };
        return Baume;
    }());
    L06_Class.Baume = Baume;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=baume.js.map