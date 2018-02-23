namespace Semester {


    export class Charakter {
        xPos: number;
        yPos: number;
        a: number = 15;

        constructor(_xPos: number, _yPos: number) {

            this.xPos = _xPos;
            this.yPos = _yPos;

        }
        update(): void {
            this.draw();
            this.jump();
        }
        jump(): void {
            this.yPos += this.a;
            if (this.yPos >= 500) {
                this.yPos = 500;
            }
            if (this.yPos <= 350) {
                this.a *= -1;
            }
        }

        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.xPos, this.yPos);

            crc2.fillStyle = "black";
            crc2.fillRect(this.xPos, this.yPos - 50, 10, 50);
            crc2.fillRect(this.xPos + 10, this.yPos - 40, 20, 7);


            crc2.beginPath();
            crc2.arc(this.xPos + 10, this.yPos - 50, 10, 0, 2 * Math.PI);
            crc2.fill();
        }

    }
}