var Semester;
(function (Semester) {
    var MoveObj = (function () {
        function MoveObj(_xPos, _yPos, _charakter) {
            this.counter = 0;
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.charakter = _charakter;
        }
        MoveObj.prototype.update = function () {
            this.draw();
            this.move();
            this.kill();
        };
        MoveObj.prototype.move = function () {
            this.counter = 0;
            if (this.xPos < -40) {
                this.xPos = 800 + Math.random() * 1000 + 200;
                this.counter++;
            }
            this.xPos -= 8;
        };
        MoveObj.prototype.kill = function () {
            if (this.charakter.xPos > this.xPos && this.charakter.xPos < this.xPos + 40 && this.charakter.yPos > this.yPos) {
                alert("Du hast Verloren -> NB");
                location.reload();
            }
        };
        MoveObj.prototype.draw = function () {
            console.log(22);
            Semester.crc2.fillStyle = "black";
            Semester.crc2.font = "30px Arial";
            Semester.crc2.fillRect(this.xPos, this.yPos, 40, 40);
            Semester.crc2.fillStyle = "red";
            Semester.crc2.fillText("NB", this.xPos, this.yPos + 30);
        };
        return MoveObj;
    }());
    Semester.MoveObj = MoveObj;
})(Semester || (Semester = {}));
//# sourceMappingURL=moveObj.js.map