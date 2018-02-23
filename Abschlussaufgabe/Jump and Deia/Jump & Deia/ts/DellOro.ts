namespace Semester {
    

    export class DellOro extends Charakter {
         xPos: number;
         yPos: number;
          delBild:any;

        constructor(_xPos: number, _yPos: number,_delBild:any) {

            super(_xPos,_yPos);
            this.delBild = _delBild;
        }
        update():void{
            this.draw();  
        }
    

        draw(): void {

                       crc2.beginPath();
                      crc2.moveTo(this.xPos, this.yPos);
            
                       crc2.fillStyle = "black";
                       crc2.fillRect(this.xPos-5, this.yPos - 50, 20, 50);
                        crc2.fillRect(this.xPos - 20, this.yPos -40, 20, 10);
                         crc2.fillStyle = "white";   
                         crc2.fillRect(this.xPos+4, this.yPos - 20, 2, 50);
                        crc2.drawImage(this.delBild,this.xPos-35,this.yPos-90);
                       crc2.closePath();
            crc2.fillStyle = "#1C1C1C";
            crc2.font = "15px Arial";
            crc2.fillRect(this.xPos-50, this.yPos, 200, 100);
            crc2.fillRect(this.xPos-100, this.yPos+40, 50, 10);
            crc2.fillStyle = "red";
            crc2.fillText("Noten Vergabe",this.xPos-45, this.yPos+30);
            
        }

    }
}