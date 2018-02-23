var Semester;
(function (Semester) {
    var Charakter = (function () {
        function Charakter(_xPos, _yPos) {
            this.a = 15;
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        Charakter.prototype.update = function () {
            this.draw();
            this.jump();
        };
        Charakter.prototype.jump = function () {
            this.yPos += this.a;
            if (this.yPos >= 500) {
                this.yPos = 500;
            }
            if (this.yPos <= 350) {
                this.a *= -1;
            }
        };
        Charakter.prototype.draw = function () {
            Semester.crc2.beginPath();
            Semester.crc2.moveTo(this.xPos, this.yPos);
            Semester.crc2.fillStyle = "black";
            Semester.crc2.fillRect(this.xPos, this.yPos - 50, 10, 50);
            Semester.crc2.fillRect(this.xPos + 10, this.yPos - 40, 20, 7);
            Semester.crc2.beginPath();
            Semester.crc2.arc(this.xPos + 10, this.yPos - 50, 10, 0, 2 * Math.PI);
            Semester.crc2.fill();
        };
        return Charakter;
    }());
    Semester.Charakter = Charakter;
})(Semester || (Semester = {}));
//# sourceMappingURL=charakter.js.map