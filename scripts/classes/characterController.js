export class CharacterController {
    player;
    keyManager = {};
    constructor(player) {
        this.player = player;
        window.addEventListener("keydown", (event) => {
            this.keyManager[event.key] = true;
            if (event.key === "d" || event.key === "ArrowRight") {
                player.playerstate.direction = "right";
                player.playerstate.status = "moving";
                this.keyManager["a"] = false;
                this.keyManager["ArrowLeft"] = false;
            }
            if (event.key === "a" || event.key === "ArrowLeft") {
                player.playerstate.direction = "left";
                player.playerstate.status = "moving";
                this.keyManager["d"] = false;
                this.keyManager["ArrowRight"] = false;
            }
            if (event.key === " ") {
                if (player.playerstate.movement.type === "grounded") {
                    player.gameframe = 0;
                    player.playerstate.movement = {
                        type: "airborne",
                        phase: "starting",
                    };
                }
            }
            if (event.key === "f") {
                player.gameframe = 0;
                player.playerstate.status = "attacking";
            }
        });
        window.addEventListener("keyup", (event) => {
            this.keyManager[event.key] = false;
            if (this.keyManager["d"] === false &&
                this.keyManager["ArrowLeft"] === false &&
                this.keyManager["a"] === false &&
                this.keyManager["ArrowRight"] === false) {
                player.playerstate.status = "idle";
            }
        });
    }
}
