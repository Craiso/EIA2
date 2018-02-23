namespace Semester {
    

    export class MoveObj {
         xPos: number;
         yPos: number;
        counter:number = 0;
            charakter:Charakter;
        constructor(_xPos: number, _yPos: number,_charakter:Charakter) {

            this.xPos = _xPos;
            this.yPos = _yPos;
            this.charakter = _charakter
           
        }
        update():void{
            this.draw(); 
            this.move();
            this.kill();
        }
        move():void{
            this.counter=0;
            if( this.xPos < -40){
                this.xPos = 800+Math.random()*1000+200;
                this.counter++;
            }
            
            this.xPos -= 8;
            
        }
        kill():void{
        if(this.charakter.xPos>this.xPos&&this.charakter.xPos<this.xPos+40 && this.charakter.yPos >this.yPos){
                alert("Du hast Verloren -> NB");
                location.reload();
            }
           
         }
        draw(): void {
                        console.log(22);
                        
                        crc2.fillStyle = "black";
                        crc2.font = "30px Arial";                                                
                        crc2.fillRect(this.xPos,this.yPos,40,40);
                        crc2.fillStyle = "red";
                        crc2.fillText("NB",this.xPos, this.yPos+30);
                        

        }

    }
}