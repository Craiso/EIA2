namespace L06_Class {
    export class Ski extends MoveObj { //definition für bezug
        speed: number;


        constructor(_x: number, _y: number) {
            super(_x, _y); //definition von variablen aus superklasse moveOBJ
            this.speed = Math.random() + 4;
        }


        update(): void { //wird immer wieder aufgerufen
            this.move();
            this.draw();
        }

        move(): void {
            this.x -= this.speed; // hier experimentieren um
            this.y += this.speed / 1.5; // andere Bewegungsmuster zu finden
            if (this.x <= 0) {
                this.x = 820;
                this.y = 100 * Math.random() + 100;
            }
        }

        draw(): void {
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x, this.y, 10, -23);
            crc2.fillStyle = "#000000";
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.fillStyle = "#000000";
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 4);
            crc2.lineTo(this.x - 20, this.y + 4);
            crc2.stroke();
        }

    }
}