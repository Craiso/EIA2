var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Wolke = (function (_super) {
        __extends(Wolke, _super);
        function Wolke(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = Math.random() + 1;
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
            L06_Class.crc2.beginPath();
            L06_Class.crc2.arc(this.x, 70, 30, 0, 2 * Math.PI);
            L06_Class.crc2.fillStyle = "#FAFAFA";
            L06_Class.crc2.fill();
            L06_Class.crc2.beginPath();
            L06_Class.crc2.arc(this.x + 60, 70, 30, 0, 2 * Math.PI);
            L06_Class.crc2.fillStyle = "#FAFAFA";
            L06_Class.crc2.fill();
            L06_Class.crc2.beginPath();
            L06_Class.crc2.arc(this.x + 30, 55, 30, 0, 2 * Math.PI);
            L06_Class.crc2.fillStyle = "#FAFAFA";
            L06_Class.crc2.fill();
            L06_Class.crc2.beginPath();
            L06_Class.crc2.arc(this.x + 30, 85, 30, 0, 2 * Math.PI);
            L06_Class.crc2.fillStyle = "#FAFAFA";
            L06_Class.crc2.fill();
        };
        return Wolke;
    }(L06_Class.MoveObj));
    L06_Class.Wolke = Wolke;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=wolke.js.map