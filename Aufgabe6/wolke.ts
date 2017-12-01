namespace L06_Class {
    export class Wolke extends MoveObj {

        speed: number;


        constructor(_x: number, _y: number) {
           super(_x, _y);
           this.speed = Math.random() + 1;
        }

        
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.speed; // hier experimentieren um
 // andere Bewegungsmuster zu finden
            if (this.x >= 800) {
                this.x = -100;

            }
        }

        draw(): void {
        crc2.beginPath();
        crc2.arc(this.x, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 60, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 30, 55, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(this.x + 30, 85, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FAFAFA";
        crc2.fill();
        }

    }
}