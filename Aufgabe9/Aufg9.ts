namespace L09 {
    window.addEventListener("load", init);
    let buchstaben: string = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    let div: HTMLDivElement;
    let dataArray: string[] = buchstaben.split(","); //durch , werden datensätze getrennt (buchstaben)
    let safeDiv: HTMLDivElement;
    function init(): void {
        for (let i: number = 0; i < dataArray.length; i++) {
            draw(i);
        }
        drawFlaeche();

    }

    document.addEventListener("keydown", tastenDruck);

    function tastenDruck(_event: KeyboardEvent): void { //tastatur event 
        console.log(_event.key);
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("" + _event.key); //Umwandlung in HTML div

        if (safeDiv) {
            safeDiv.style.backgroundColor = "black";
        }

        safeDiv = div; // safe div speichert das target ab in rot und das vorherige wird wieder schwarz
        div.style.backgroundColor = "red";
    }

    function draw(i: number): void {

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
    function drawFlaeche(): void {
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
    function handle(_event: MouseEvent): void { //funktion für mausklick 
        if (safeDiv) { //speichert aktuelle div ab
            safeDiv.style.backgroundColor = "black";
        }
        let div: HTMLDivElement = <HTMLDivElement>_event.target;
        safeDiv = <HTMLDivElement>_event.target;
        div.style.backgroundColor = "red"; //setzt div rot sobald ein target ausgewählt wurde
    }
    function write(_event: MouseEvent): void { //neues div wird erstellt

        let div: HTMLDivElement = document.createElement("div"); //neues div wird erstellt
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
    function deleteBuch(_event: MouseEvent): void {
        if (_event.altKey) { 
            let div: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(div); //lösch aus html target raus
        }
    }
}