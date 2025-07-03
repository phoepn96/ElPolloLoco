import { Character } from "./character.superclass.js";
export class Player extends Character {
    speed = 2;
    jumpForce = 10;
    imageSrc = "./assets/spritesheets/player/player.png";
    img;
    ctx;
    constructor(world, startingPositionX, startingPositionY) {
        super(world, startingPositionX, startingPositionY);
        this.img = new Image();
        this.img.src = this.imageSrc;
        this.ctx = world.ctx;
    }
    update() { }
    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }
}
