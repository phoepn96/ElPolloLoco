import { Character } from "./character.superclass.js";
export class Player extends Character {
    speed = 2;
    jumpForce = 10;
    imageSrc = "../../assets/spritesheets/player/player.png";
    img;
    ctx;
    spreadSheetX = 909.58;
    spreadSheetY = 909.16;
    counter = 0;
    constructor(world, startingPositionX, startingPositionY) {
        super(world, startingPositionX, startingPositionY);
        this.img = new Image();
        this.img.src = this.imageSrc;
        this.ctx = world.ctx;
    }
    update() { }
    draw() {
        this.ctx.drawImage(this.img, this.spreadSheetX * this.counter, 909.16 * 3, this.spreadSheetX, this.spreadSheetY, 50, 50, 100, 100);
        this.counter++;
        if (this.counter === 14) {
            this.counter = 0;
        }
    }
}
