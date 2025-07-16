import { Character } from "./character.superclass.js";
import { CharacterController } from "./characterController.js";
export class Player extends Character {
    speed = 5;
    jumpForce = 15;
    imageSrc = "../../assets/spritesheets/player/player.png";
    img;
    imageSrcRight = "../../assets/spritesheets/player/player.png";
    imageRight;
    imageSrcLeft = "";
    imageLeft;
    ctx;
    frameWidth = 909.16;
    frameHeight = 909.16;
    animationRow = 0;
    animationSpriteColumns = 0;
    spriteposition = 0;
    delayframes = 2;
    playerstate = {
        movement: { type: "grounded" },
        status: "idle",
        direction: "right",
    };
    controller;
    gravity;
    previousY = this.y;
    goundLevel = this.y;
    gameframe;
    dashdistance = 30;
    constructor(world, startingPositionX, startingPositionY) {
        super(world, startingPositionX, startingPositionY);
        this.img = new Image();
        this.img.src = this.imageSrc;
        this.ctx = world.ctx;
        this.controller = new CharacterController(this);
        this.gravity = world.gravity;
        this.imageRight = this.img;
        this.imageLeft = new Image();
        this.imageLeft.src = this.imageSrcLeft;
        this.gameframe = 0;
    }
    update() {
        this.checkDirection();
        this.checkAction();
        this.animateAction();
        this.checkGravity();
    }
    draw() {
        this.ctx.drawImage(this.img, this.frameWidth * this.spriteposition, this.frameHeight * this.animationRow, this.frameWidth, this.frameHeight, this.x, this.y, 100, 100);
    }
    checkDirection() {
        if (this.playerstate.direction === "right") {
            this.img = this.imageRight;
            return;
        }
        this.img = this.imageRight;
    }
    checkAction() {
        this.checkMovementState();
        if (this.playerstate.movement.type === "airborne") {
            this.jump();
        }
        if (this.playerstate.status === "moving") {
            this.move();
        }
        if (this.playerstate.status === "attacking") {
            this.attack();
        }
    }
    attack() {
        if (this.playerstate.movement.type === "grounded") {
        }
    }
    dash() {
        if (this.playerstate.direction === "right") {
            this.x += this.dashdistance;
            return;
        }
        this.x -= this.dashdistance;
    }
    shoot() { }
    move() {
        if (this.playerstate.direction === "right") {
            this.x += this.speed;
            return;
        }
        this.x -= this.speed;
    }
    jump() {
        this.y -= this.jumpForce;
    }
    animateAction() {
        if (this.playerstate.movement.type === "airborne") {
            if (this.playerstate.status === "attacking") {
                this.animationRow = SpriteTypes.slahingAir;
                this.calculateGameFrame(SpriteTypes.slahingAir);
                return;
            }
            if (this.playerstate.movement.phase === "starting") {
                this.animationRow = SpriteTypes.jumpstart;
                this.calculateGameFrame(SpriteTypes.jumpstart);
                return;
            }
            if (this.playerstate.movement.phase === "ascending") {
                this.animationRow = SpriteTypes.ascending;
                this.calculateGameFrame(SpriteTypes.ascending);
                return;
            }
            if (this.playerstate.movement.phase === "descending") {
                this.animationRow = SpriteTypes.descending;
                this.calculateGameFrame(SpriteTypes.descending);
                return;
            }
        }
        if (this.playerstate.movement.type === "grounded") {
            if (this.playerstate.status === "attacking") {
                if (this.spriteposition ===
                    SpriteFrameCount[SpriteTypes.slashing] - 1) {
                    this.playerstate.status = "idle";
                }
                this.animationRow = SpriteTypes.slashing;
                this.calculateGameFrame(SpriteTypes.slashing);
            }
            if (this.playerstate.status === "idle") {
                this.animationRow = SpriteTypes.idle;
                this.calculateGameFrame(SpriteTypes.idle);
                return;
            }
            if (this.playerstate.status === "moving") {
                this.animationRow = SpriteTypes.walking;
                this.calculateGameFrame(SpriteTypes.walking);
                return;
            }
        }
    }
    calculateGameFrame(spritetype) {
        this.spriteposition =
            Math.floor(this.gameframe / this.delayframes) %
                SpriteFrameCount[spritetype];
        this.gameframe++;
    }
    checkMovementState() {
        if (this.y > this.goundLevel) {
            this.playerstate.movement.type = "grounded";
            this.y = this.goundLevel;
            this.previousY = this.goundLevel;
            this.gravity = 1;
        }
        if (this.playerstate.movement.type === "airborne") {
            if (this.playerstate.movement.phase === "starting") {
                if (this.gameframe === 5) {
                    this.playerstate.movement.phase = "ascending";
                }
            }
            if (this.y < this.previousY &&
                this.playerstate.movement.phase !== "starting") {
                this.playerstate.movement.phase = "ascending";
                this.previousY = this.y;
            }
            else {
                this.playerstate.movement.phase = "descending";
                this.previousY = this.y;
            }
        }
    }
    checkGravity() {
        if (this.y < this.goundLevel) {
            this.y += this.gravity;
            this.gravity += 0.8;
        }
    }
}
var SpriteTypes;
(function (SpriteTypes) {
    SpriteTypes[SpriteTypes["dying"] = 0] = "dying";
    SpriteTypes[SpriteTypes["descending"] = 1] = "descending";
    SpriteTypes[SpriteTypes["hurt"] = 2] = "hurt";
    SpriteTypes[SpriteTypes["idle"] = 3] = "idle";
    SpriteTypes[SpriteTypes["ascending"] = 4] = "ascending";
    SpriteTypes[SpriteTypes["jumpstart"] = 5] = "jumpstart";
    SpriteTypes[SpriteTypes["walking"] = 6] = "walking";
    SpriteTypes[SpriteTypes["throwing"] = 7] = "throwing";
    SpriteTypes[SpriteTypes["thowingAir"] = 8] = "thowingAir";
    SpriteTypes[SpriteTypes["slashing"] = 9] = "slashing";
    SpriteTypes[SpriteTypes["slahingAir"] = 10] = "slahingAir";
    SpriteTypes[SpriteTypes["sliding"] = 11] = "sliding";
})(SpriteTypes || (SpriteTypes = {}));
const SpriteFrameCount = {
    [SpriteTypes.dying]: 14,
    [SpriteTypes.descending]: 5,
    [SpriteTypes.hurt]: 11,
    [SpriteTypes.idle]: 17,
    [SpriteTypes.ascending]: 5,
    [SpriteTypes.jumpstart]: 5,
    [SpriteTypes.walking]: 23,
    [SpriteTypes.throwing]: 11,
    [SpriteTypes.thowingAir]: 11,
    [SpriteTypes.slashing]: 11,
    [SpriteTypes.slahingAir]: 11,
    [SpriteTypes.sliding]: 5,
};
