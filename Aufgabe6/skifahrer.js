var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Ski = (function (_super) {
        __extends(Ski, _super);
        function Ski(_x, _y) {
            _super.call(this, _x, _y); //definition von variablen aus superklasse moveOBJ
            this.speed = Math.random() + 4;
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
            L06_Class.crc2.fillStyle = "#000000";
            L06_Class.crc2.fillRect(this.x, this.y, 10, -23);
            L06_Class.crc2.fillStyle = "#000000";
            L06_Class.crc2.beginPath();
            L06_Class.crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            L06_Class.crc2.fill();
            L06_Class.crc2.stroke();
            L06_Class.crc2.fillStyle = "#000000";
            L06_Class.crc2.beginPath();
            L06_Class.crc2.moveTo(this.x + 20, this.y - 4);
            L06_Class.crc2.lineTo(this.x - 20, this.y + 4);
            L06_Class.crc2.stroke();
        };
        return Ski;
    }(L06_Class.MoveObj));
    L06_Class.Ski = Ski;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=skifahrer.js.map