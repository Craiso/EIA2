var L06_Class;
(function (L06_Class) {
    var Wolke = (function () {
        function Wolke(_x, _y, _s) {
            this.x = _x;
            this.y = _y;
            this.speed = _s;
        }
        Wolke.prototype.update = function () {
            this.move();
            this.draw();
        };
        Wolke.prototype.move = function () {
            this.x += this.speed; // hier experimentieren um
            // andere Bewegungsmuster zu finden
            if (this.x >= 800) {
                this.x = -100;
            }
        };
        Wolke.prototype.draw = function () {
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x, 70, 30, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = "#FAFAFA";
            L06_Class.crc3.fill();
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 60, 70, 30, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = "#FAFAFA";
            L06_Class.crc3.fill();
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 30, 55, 30, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = "#FAFAFA";
            L06_Class.crc3.fill();
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 30, 85, 30, 0, 2 * Math.PI);
            L06_Class.crc3.fillStyle = "#FAFAFA";
            L06_Class.crc3.fill();
        };
        return Wolke;
    }());
    L06_Class.Wolke = Wolke;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=wolke.js.map