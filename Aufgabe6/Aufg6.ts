namespace L06_Class {
    export let crc2: CanvasRenderingContext2D;

    let hintergrund: Hintergrund;
    let moveObj: MoveObj[] = [];

    //let skis: Ski[] = [];
    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
  
        hintergrund = new Hintergrund(0, 0, 0); //�bergabe von werten + farbe (farbe war test wegen problemen)
        
        for (let i: number = 0; i < 5; i++) {
            let s: Ski = new Ski(Math.random() * 30 + 800, Math.random() * 30);
            moveObj.push(s); //f�gt moveOBJ s hinzu, so oft wie schleife definiert ist
            let b: Baume = new Baume(Math.random() * 400 + 400, Math.random() * 200 + 300);
            moveObj.push(b);
            let w: Wolke = new Wolke(Math.random() * 800, Math.random() * 600);
            moveObj.push(w);
            for (let i: number = 0; i < 20; i++) { //5*20 = 100 Schneeflocken
                let sf: Snow = new Snow(Math.random() * 800, Math.random() * 600);
                moveObj.push(sf);  //sf Schneeflocke
            }
        }
     /*   hintergrund.setRandomStyle(); */

        /*
                for (let i: number = 0; i < 30; i++) {
                    let s: Ski = new Ski(200, 150);
                    s.setRandomStyle();
                    skis[i] = s;
                }
        */

        animate();
    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600); // hier Hintergrund restaurieren
        hintergrund.drawHintergrund(); //hintergrund wird gezeichnet

        for (let i: number = 0; i < moveObj.length; i++) {
            let m: MoveObj = moveObj[i]; //length = fr�gt l�nge von array ab
            m.update(); //l�sst so oft durchlaufen
        }

        window.setTimeout(animate, 20);
    }
}