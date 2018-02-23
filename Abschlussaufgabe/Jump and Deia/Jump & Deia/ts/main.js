var Semester;
(function (Semester) {
    var charakter;
    var del;
    var bg;
    var objs = [];
    var objMax = 1;
    var delBild = new Image();
    var c = 0;
    window.addEventListener("load", menu);
    function menu() {
        var button = document.getElementById("button");
        button.style.display = "block";
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Start";
        submit.style.position = "absolute";
        submit.style.left = "30%";
        submit.style.top = "3em";
        submit.style.width = "40%";
        submit.style.height = "3em";
        submit.addEventListener("mousedown", init);
        button.appendChild(submit);
    }
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("button")[0].style.display = "none";
        Semester.crc2 = canvas.getContext("2d");
        document.addEventListener("keydown", moveChange);
        document.addEventListener("touchstart", moveChange2);
        delBild.src = "img/DellOro.png";
        charakter = new Semester.Charakter(200, 500);
        del = new Semester.DellOro(700, 400, delBild);
        bg = new Semester.Background(0, 0);
        for (var i = 0; i < objMax; i++) {
            var obj = new Semester.MoveObj(800 + Math.random() * 100 + i * 500, 460, charakter);
            objs.push(obj);
        }
        bg.draw();
        animate();
    }
    function moveChange(_event) {
        if (_event.key == " ") {
            if (charakter.a == 15 && charakter.yPos >= 200) {
                charakter.a = -15;
            }
        }
    }
    function moveChange2() {
        if (charakter.a == 15 && charakter.yPos >= 200) {
            charakter.a = -15;
        }
    }
    function animate() {
        Semester.crc2.clearRect(0, 0, 800, 600);
        bg.update();
        charakter.update();
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            obj.update();
            c += obj.counter;
            Semester.crc2.fillStyle = "black";
            Semester.crc2.fillText("Punkte: " + c, 35, 35);
            if (obj.xPos < -40) {
                for (var i_1 = 0; i_1 < objMax; i_1++) {
                    var obj_1 = new Semester.MoveObj(800 + Math.random() * 100 + i_1 * 500, 460, charakter);
                    objs.push(obj_1);
                }
            }
        }
        del.update();
        window.setTimeout(animate, 20);
    }
})(Semester || (Semester = {}));
//# sourceMappingURL=main.js.map