namespace L06_Class {
    export class Baume {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;

        }


        draw(): void {
      //Stamm
        crc3.fillStyle = "#604629";
        crc3.fillRect(this.x, this.y, 20, 12);

        //Krone von unten nach oben
        crc3.fillStyle = "#517a17";
        crc3.beginPath();
        crc3.moveTo(this.x - 30, this.y);
        crc3.lineTo(this.x + 50, this.y);
        crc3.lineTo(this.x + 10, this.y - 70);
        crc3.fill();
        crc3.closePath();

        crc3.fillStyle = "#517a17";
        crc3.beginPath();
        crc3.moveTo(this.x - 25, this.y - 20);
        crc3.lineTo(this.x + 45, this.y - 20);
        crc3.lineTo(this.x + 10, this.y - 100);
        crc3.fill();
        crc3.closePath();
        }

    }
}