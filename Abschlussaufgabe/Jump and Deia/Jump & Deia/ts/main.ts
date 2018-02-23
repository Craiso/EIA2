namespace Semester {
    export let crc2: CanvasRenderingContext2D;
    let charakter: Charakter;
    let del: DellOro;
    let bg: Background;
    let objs: MoveObj[]=[];
    let objMax:number =1;
    let delBild :any = new Image();
    let c : number = 0;
    window.addEventListener("load", menu);


    function menu(): void {
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        button.style.display = "block";
        let submit: HTMLButtonElement = document.createElement("button");
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

    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        document.getElementsByTagName("button")[0].style.display = "none";

        crc2 = canvas.getContext("2d");
        
        document.addEventListener("keydown", moveChange);
        document.addEventListener("touchstart", moveChange2);
         
        delBild.src ="img/DellOro.png";
        charakter = new Charakter(200,500);
        del = new DellOro(700,400,delBild);
        bg = new Background(0,0);
        for(let i:number = 0; i< objMax; i++){
            let obj: MoveObj = new MoveObj(800+Math.random()*100+i*500,460,charakter);
            objs.push(obj);
        }
        bg.draw();
        animate();
    }



    function moveChange(_event: KeyboardEvent): void {

        if (_event.key == " ") {
            if(charakter.a == 15 && charakter.yPos >= 200){
            charakter.a = -15;
}
        }
      
    }
    function moveChange2(): void {

            if(charakter.a == 15 && charakter.yPos >= 200){
            charakter.a = -15;
}
        
      
    }

    function animate(): void {
        crc2.clearRect(0,0,800,600);
        bg.update();
        charakter.update();
        
        for(let i:number = 0; i< objs.length; i++){
            let obj: MoveObj = objs[i];
            obj.update();           
            c += obj.counter;
            crc2.fillStyle = "black";
            crc2.fillText("Punkte: "+c,35, 35);
            if(obj.xPos < -40){
               for(let i:number = 0; i< objMax; i++){
            let obj: MoveObj = new MoveObj(800+Math.random()*100+i*500,460,charakter);
            objs.push(obj);
        } 
        }
           
        }
        
        del.update();
        window.setTimeout(animate, 20);
    }
}
