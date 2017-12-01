var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Ski = (function (_super) {
        __extends(Ski, _super);
        function Ski(_x, _y, _s) {
            _super.call(this, _x, _y, _s);
        }
        Ski.prototype.update = function () {
            _super.prototype.move.call(this);
            _super.prototype.draw.call(this);
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
        return Ski;
    }(L06_Class.MoveObj));
    L06_Class.Ski = Ski;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=skifahrer.js.map