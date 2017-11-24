var L06_Class;
(function (L06_Class) {
    var Ski = (function () {
        function Ski(_x, _y, _s) {
            this.x = _x;
            this.y = _y;
            this.speed = _s;
        }
        Ski.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ski.prototype.move = function () {
            this.x -= this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x <= 0) {
                this.x = 820;
                this.y = 100 * Math.random() + 100;
            }
        };
        Ski.prototype.draw = function () {
            L06_Class.crc3.fillStyle = "#000000";
            L06_Class.crc3.fillRect(this.x, this.y, 10, -23);
            L06_Class.crc3.fillStyle = "#000000";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            L06_Class.crc3.fill();
            L06_Class.crc3.stroke();
            L06_Class.crc3.fillStyle = "#000000";
            L06_Class.crc3.beginPath();
            L06_Class.crc3.moveTo(this.x + 20, this.y - 4);
            L06_Class.crc3.lineTo(this.x - 20, this.y + 4);
            L06_Class.crc3.stroke();
        };
        Ski.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Ski;
    }());
    L06_Class.Ski = Ski;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=skifahrer.js.map