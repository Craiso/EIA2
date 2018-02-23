var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Semester;
(function (Semester) {
    var DellOro = (function (_super) {
        __extends(DellOro, _super);
        function DellOro(_xPos, _yPos, _delBild) {
            _super.call(this, _xPos, _yPos);
            this.delBild = _delBild;
        }
        DellOro.prototype.update = function () {
            this.draw();
        };
        DellOro.prototype.draw = function () {
            Semester.crc2.beginPath();
            Semester.crc2.moveTo(this.xPos, this.yPos);
            Semester.crc2.fillStyle = "black";
            Semester.crc2.fillRect(this.xPos - 5, this.yPos - 50, 20, 50);
            Semester.crc2.fillRect(this.xPos - 20, this.yPos - 40, 20, 10);
            Semester.crc2.fillStyle = "white";
            Semester.crc2.fillRect(this.xPos + 4, this.yPos - 20, 2, 50);
            Semester.crc2.drawImage(this.delBild, this.xPos - 35, this.yPos - 90);
            Semester.crc2.closePath();
            Semester.crc2.fillStyle = "#1C1C1C";
            Semester.crc2.font = "15px Arial";
            Semester.crc2.fillRect(this.xPos - 50, this.yPos, 200, 100);
            Semester.crc2.fillRect(this.xPos - 100, this.yPos + 40, 50, 10);
            Semester.crc2.fillStyle = "red";
            Semester.crc2.fillText("Noten Vergabe", this.xPos - 45, this.yPos + 30);
        };
        return DellOro;
    }(Semester.Charakter));
    Semester.DellOro = DellOro;
})(Semester || (Semester = {}));
//# sourceMappingURL=DellOro.js.map