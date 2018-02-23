namespace Semester {


    export class Background {
        xPos: number;
        yPos: number;
        xPosB: number = Math.random() * 100;
        yPosB: number = Math.random() * 100;
        hintergrund: ImageData;
        bergeAnzahl: number = 10*Math.random();

        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;

        }
        update(): void {           
            crc2.putImageData(this.hintergrund,0,0);
        }
        drawBaum():void{
              for (let i:number = 0; i< this.bergeAnzahl ; i++){
                  let height : number = 300*Math.random();
            crc2.beginPath();
            crc2.fillStyle = "#3B170B";
            crc2.moveTo(this.xPos + this.xPosB + i*200, this.yPos + this.yPosB + height);
            crc2.lineTo(this.xPos + this.xPosB+100 + i*200, this.yPos + this.yPosB+600 + height);
            crc2.lineTo(this.xPos + this.xPosB-100 + i*200, this.yPos + this.yPosB+600 + height);
            crc2.lineTo(this.xPos + this.xPosB + i*200, this.yPos + this.yPosB + height+150);
            crc2.fill();
            crc2.closePath();
                  crc2.beginPath();
                      crc2.arc(this.xPos + this.xPosB + i*200,this.yPos + this.yPosB + height, 100, 0, 2 * Math.PI);
        crc2.fillStyle = 'green';
        crc2.fill();
            crc2.closePath();
                  
                  
                }
        }

        draw(): void {


            crc2.fillStyle = "#2ECCFA";
            crc2.fillRect(this.xPos, this.yPos, 800, 500);
            
            

            this.drawBaum();
            
            crc2.fillStyle = "#5FB404";
            crc2.fillRect(this.xPos, this.yPos + 500, 800, 100);
            this.hintergrund = crc2.getImageData(0, 0, 800, 600)

        }

    }
}