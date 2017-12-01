var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var L06_Class;
(function (L06_Class) {
    var Snow = (function (_super) {
        __extends(Snow, _super);
        function Snow(_x, _y) {
            _super.call(this, _x, _y);
            this.speed = Math.random() + 3;
        }
        Snow.prototype.update = function () {
            this.move();
            this.draw();
        };
        Snow.prototype.move = function () {
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.y > 600) {
                this.y = 0;
            }
        };
        Snow.prototype.draw = function () {
            L06_Class.crc2.fillStyle = "#000000";
            L06_Class.crc2.fillRect(this.x, this.y, 1, 1);
        };
        return Snow;
    }(L06_Class.MoveObj));
    L06_Class.Snow = Snow;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=snow.js.map