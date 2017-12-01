var L06_Class;
(function (L06_Class) {
    var MoveObj = (function () {
        function MoveObj(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        MoveObj.prototype.update = function () {
            this.move();
            this.draw();
        };
        MoveObj.prototype.move = function () {
            // Sonst ist der Block leer.
        };
        MoveObj.prototype.draw = function () {
            // Sonst ist der Block leer.
        };
        return MoveObj;
    }());
    L06_Class.MoveObj = MoveObj;
})(L06_Class || (L06_Class = {}));
//# sourceMappingURL=moveOBJ.js.map