import { world, system, Player, Entity } from "@minecraft/server"
import { onfireStart } from "./firemagic"
system.events.scriptEventReceive.subscribe(e => {
    switch (e.id) {
        case "okaze:fireball":
            onfireStart(e.sourceEntity);
            break;
    }
})

world.events.itemUse.subscribe(e => {
    onfireStart(e.source);
})