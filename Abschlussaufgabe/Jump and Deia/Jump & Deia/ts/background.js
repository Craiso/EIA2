var Semester;
(function (Semester) {
    var Background = (function () {
        function Background(_xPos, _yPos) {
            this.xPosB = Math.random() * 100;
            this.yPosB = Math.random() * 100;
            this.bergeAnzahl = 10 * Math.random();
            this.xPos = _xPos;
            this.yPos = _yPos;
        }
        Background.prototype.update = function () {
            Semester.crc2.putImageData(this.hintergrund, 0, 0);
        };
        Background.prototype.drawBaum = function () {
            for (var i = 0; i < this.bergeAnzahl; i++) {
                var height = 300 * Math.random();
                Semester.crc2.beginPath();
                Semester.crc2.fillStyle = "#3B170B";
                Semester.crc2.moveTo(this.xPos + this.xPosB + i * 200, this.yPos + this.yPosB + height);
                Semester.crc2.lineTo(this.xPos + this.xPosB + 100 + i * 200, this.yPos + this.yPosB + 600 + height);
                Semester.crc2.lineTo(this.xPos + this.xPosB - 100 + i * 200, this.yPos + this.yPosB + 600 + height);
                Semester.crc2.lineTo(this.xPos + this.xPosB + i * 200, this.yPos + this.yPosB + height + 150);
                Semester.crc2.fill();
                Semester.crc2.closePath();
                Semester.crc2.beginPath();
                Semester.crc2.arc(this.xPos + this.xPosB + i * 200, this.yPos + this.yPosB + height, 100, 0, 2 * Math.PI);
                Semester.crc2.fillStyle = 'green';
                Semester.crc2.fill();
                Semester.crc2.closePath();
            }
        };
        Background.prototype.draw = function () {
            Semester.crc2.fillStyle = "#2ECCFA";
            Semester.crc2.fillRect(this.xPos, this.yPos, 800, 500);
            this.drawBaum();
            Semester.crc2.fillStyle = "#5FB404";
            Semester.crc2.fillRect(this.xPos, this.yPos + 500, 800, 100);
            this.hintergrund = Semester.crc2.getImageData(0, 0, 800, 600);
        };
        return Background;
    }());
    Semester.Background = Background;
})(Semester || (Semester = {}));
//# sourceMappingURL=background.js.map