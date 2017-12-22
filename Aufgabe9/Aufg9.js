var L09;
(function (L09) {
    window.addEventListener("load", init);
    var buchstaben = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    var div;
    var dataArray = buchstaben.split(","); //durch , werden datens�tze getrennt (buchstaben)
    var safeDiv;
    function init() {
        for (var i = 0; i < dataArray.length; i++) {
            draw(i);
        }
        drawFlaeche();
    }
    document.addEventListener("keydown", tastenDruck);
    function tastenDruck(_event) {
        console.log(_event.key);
        var div = document.getElementById("" + _event.key); //Umwandlung in HTML div
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        safeDiv = div; // safe div speichert das target ab in rot und das vorherige wird wieder schwarz
        div.style.backgroundColor = "red";
    }
    function draw(i) {
        div = document.createElement("div"); //neues div wird erstellt
        div.addEventListener("click", handle); //eventlistener mit clickfunktion
        div.style.width = "0.5em";
        div.id = "" + dataArray[i]; //"" Zwecks Fehlerbehebung zur erkennung von string
        div.style.backgroundColor = "black";
        div.style.color = "white";
        div.style.marginLeft = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.textAlign = "center";
        div.style.cssFloat = "left";
        div.style.padding = "0.5em";
        div.innerHTML = dataArray[i];
        document.body.appendChild(div); //
    }
    function drawFlaeche() {
        div = document.createElement("div"); //neues div wird erstellt
        div.addEventListener("click", write); //eventlistener mit clickfunktion
        div.style.width = "90%";
        div.style.height = "50vh";
        div.style.marginTop = "7em";
        div.style.marginLeft = "5%";
        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
    function handle(_event) {
        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }
        var div = _event.target;
        safeDiv = _event.target;
        div.style.backgroundColor = "red"; //setzt div rot sobald ein target ausgew�hlt wurde
    }
    function write(_event) {
        var div = document.createElement("div"); //neues div wird erstellt
        div.style.position = "absolute";
        div.style.top = "" + (_event.clientY - 20) + "px"; //client = mauscurserposition
        div.style.left = "" + (_event.clientX - 20) + "px"; // number in Klammer wird in String umgewandelt durch ""
        div.style.width = "0.5em";
        div.style.color = "white";
        div.style.textAlign = "center";
        div.style.padding = "0.5em";
        div.style.fontSize = "1.5em";
        div.style.backgroundColor = "hsl( " + Math.random() * 360 + ",100%,20%)";
        div.innerHTML = safeDiv.innerHTML; //inhalt von target
        div.addEventListener("click", deleteBuch);
        document.body.appendChild(div); //wird in html geschrieben
    }
    function deleteBuch(_event) {
        if (_event.altKey) {
            var div_1 = _event.target;
            document.body.removeChild(div_1); //l�sch aus html target raus
        }
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=Aufg9.js.map