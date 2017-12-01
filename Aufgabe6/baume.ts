namespace L07_Class {
    export class Baume extends moveObj {


        constructor(_x: number, _y: number) {
            super(_x, _y);

        }


        draw(): void {
      //Stamm
        crc2.fillStyle = "#604629";
        crc2.fillRect(this.x, this.y, 20, 12);

        //Krone von unten nach oben
        crc2.fillStyle = "#517a17";
        crc2.beginPath();
        crc2.moveTo(this.x - 30, this.y);
        crc2.lineTo(this.x + 50, this.y);
        crc2.lineTo(this.x + 10, this.y - 70);
        crc2.fill();
        crc2.closePath();

        crc2.fillStyle = "#517a17";
        crc2.beginPath();
        crc2.moveTo(this.x - 25, this.y - 20);
        crc2.lineTo(this.x + 45, this.y - 20);
        crc2.lineTo(this.x + 10, this.y - 100);
        crc2.fill();
        crc2s.closePath();
        }

    }
}