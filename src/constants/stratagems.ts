import { SvgProps } from "react-native-svg";

// 'equipment'? backpacks?

export enum StratagemGroup {
    REINFORCEMENTS = "REINFORCEMENTS",
    SOS = "SOS",
    RESUPPLY = "RESUPPLY", // resupply/supplies
    EAGLE_REARM = "EAGLE_REARM",

    OBJECTIVE = "OBJECTIVE",
    FLARE = "FLARE",
    HELLBOMB = "HELLBOMB",

    ORBITAL = "ORBITAL",
    EAGLE = "EAGLE", // 'requesting air support'

    SUPPORT_WEAPON = "SUPPORT_WEAPON", // 'freedom requires firepower'
    BACKPACK = "BACKPACK", // 'equipment'?, tac-pack
    WALKER = "WALKER",
    VEHICLE = "VEHICLE",

    FORTIFICATION = "FORTIFICATION",
    SENTRY = "SENTRY",

    UNKNOWN = "UNKNOWN",
}
export enum Direction {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    UP = "UP",
    DOWN = "DOWN",
    TAP = "TAP",
}

type Stratagem = {
    name: string;
    group: StratagemGroup;
    code: Direction[];
    audio?: Array<
        // List of possible sounds, outer list plays in order
        Array<ReturnType<typeof require> & number>
    >;
    icon: ReturnType<typeof require> & React.FC<SvgProps>;
};

export function lookupStratByCode(code: Direction[]) {
    const matches = STRATAGEMS.map((stratagem) => {
        if (code.length != stratagem.code.length) return undefined;

        if (
            code
                .slice(-stratagem.code.length)
                .every((direction, i) => direction == stratagem.code[i])
        ) {
            return stratagem;
        }

        return undefined;
    }).filter((item) => item !== undefined);

    if (matches.length > 1) {
        console.warn(`Multiple hits for stratagem code ${code}`);
    }

    return matches.at(0);
}

// TODO: Add orbital, support, backpack, resupply, flag, hellbomb, etc. sfx
// add new stratagems and mission strats

export const STRATAGEMS: readonly Stratagem[] = [
    {
        name: "Eagle 500kg",
        group: StratagemGroup.EAGLE,
        code: [
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Eagle 500KG Bomb.svg")
            .default,
    },
    {
        name: "Reinforments",
        group: StratagemGroup.REINFORCEMENTS,

        code: [
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Reinforce.svg").default,
    },

    {
        name: "Portable Hellbomb",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Hellbomb Portable.svg")
            .default,
    },
    {
        name: "Machine Gun",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Machine Gun.svg").default,
    },
    {
        name: "Anti-Materiel Rifle",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Anti-Materiel Rifle.svg")
            .default,
    },
    {
        name: "Stalwart",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Stalwart.svg").default,
    },
    {
        name: "Expendable Anti-Tank",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Expendable Anti-Tank.svg")
            .default,
    },
    {
        name: "Recoilless Rifle",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Recoilless Rifle.svg")
            .default,
    },
    {
        name: "Flamethrower",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Flamethrower.svg").default,
    },
    {
        name: "Autocannon",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.RIGHT, // Matt made misinput here
        ],
        icon: require("../assets/stratagems/icons/Autocannon.svg").default,
    },
    {
        name: "Heavy Machine Gun",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Heavy Machine Gun.svg")
            .default,
    },
    {
        name: "Airburst Rocket Launcher",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Airburst Rocket Launcher.svg")
            .default,
    },
    {
        name: "Commando",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Commando.svg").default,
    },
    {
        name: "Railgun",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Railgun.svg").default,
    },
    {
        name: "Spear",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Spear.svg").default,
    },
    {
        name: "WASP Launcher",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/StA-X3 W.A.S.P. Launcher.svg")
            .default,
    },
    {
        name: "Orbital Gatling Barrage",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Orbital Gatling Barrage.svg")
            .default,
    },
    {
        name: "Orbital Airburst Strike",
        group: StratagemGroup.ORBITAL,
        code: [Direction.RIGHT, Direction.RIGHT, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Orbital Airburst Strike.svg")
            .default,
    },
    {
        name: "Orbital 120mm HE Barrage",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital 120MM HE Barrage.svg")
            .default,
    },
    {
        name: "Orbital 380mm HE Barrage",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital 380MM HE Barrage.svg")
            .default,
    },
    {
        name: "Orbital Walking Barrage",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital Walking Barrage.svg")
            .default,
    },
    {
        name: "Orbital Laser",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital Laser.svg").default,
    },
    {
        name: "Orbital Napalm Barrage",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Orbital Napalm Barrage.svg")
            .default,
    },
    {
        name: "Orbital Railcannon Strike",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Orbital Railcannon Strike.svg")
            .default,
    },
    {
        name: "Eagle Strafing Run",
        group: StratagemGroup.EAGLE,
        code: [Direction.UP, Direction.RIGHT, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Eagle Strafing Run.svg")
            .default,
    },
    {
        name: "Eagle Airstrike",
        group: StratagemGroup.EAGLE,
        code: [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Eagle Airstrike.svg").default,
    },
    {
        name: "Eagle Cluster Bomb",
        group: StratagemGroup.EAGLE,
        code: [
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Eagle Cluster Bomb.svg")
            .default,
    },
    {
        name: "Eagle Napalm Airstrike",
        group: StratagemGroup.EAGLE,
        code: [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.UP],
        icon: require("../assets/stratagems/icons/Eagle Napalm Airstrike.svg")
            .default,
    },
    {
        name: "Jump Pack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Jump Pack.svg").default,
    },
    {
        name: "Eagle Smoke Strike",
        group: StratagemGroup.EAGLE,
        code: [Direction.UP, Direction.RIGHT, Direction.UP, Direction.DOWN],
        icon: require("../assets/stratagems/icons/Eagle Smoke Strike.svg")
            .default,
    },
    {
        name: "Eagle 110mm Rocket Pods",
        group: StratagemGroup.EAGLE,
        code: [Direction.UP, Direction.RIGHT, Direction.UP, Direction.LEFT],
        icon: require("../assets/stratagems/icons/Eagle 110MM Rocket Pods.svg")
            .default,
    },
    {
        name: "Fast Recon Vehicle",
        group: StratagemGroup.VEHICLE,
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Fast Recon Vehicle.svg")
            .default,
    },
    {
        name: "Orbital Precision Strike",
        group: StratagemGroup.ORBITAL,
        code: [Direction.RIGHT, Direction.RIGHT, Direction.UP],
        icon: require("../assets/stratagems/icons/Orbital Precision Strike.svg")
            .default,
    },
    {
        name: "Orbital Gas Strike",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Orbital Gas Strike.svg")
            .default,
    },
    {
        name: "Orbital EMS Strike",
        group: StratagemGroup.ORBITAL,
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital EMS Strike.svg")
            .default,
    },
    {
        name: "Orbital Smoke Strike",
        group: StratagemGroup.ORBITAL,
        code: [Direction.RIGHT, Direction.RIGHT, Direction.DOWN, Direction.UP],
        icon: require("../assets/stratagems/icons/Orbital Smoke Strike.svg")
            .default,
    },
    {
        name: "HMG Emplacement",
        group: StratagemGroup.FORTIFICATION,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/HMG Emplacement.svg").default,
    },
    {
        name: "Shield Generator Relay",
        group: StratagemGroup.FORTIFICATION,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Shield Generator Relay.svg")
            .default,
    },
    {
        name: "Tesla Tower",
        group: StratagemGroup.FORTIFICATION,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Tesla Tower.svg").default,
    },
    {
        name: "Anti-Personnel Minefield",
        group: StratagemGroup.FORTIFICATION,
        code: [Direction.DOWN, Direction.LEFT, Direction.UP, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Anti-Personnel Minefield.svg")
            .default,
    },
    {
        name: "Supply Pack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Supply Pack.svg").default,
    },
    {
        name: "Grenade Launcher",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Grenade Launcher.svg")
            .default,
    },
    {
        name: "Laser Cannon",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Laser Cannon.svg").default,
    },
    {
        name: "Incendiary Minefield",
        group: StratagemGroup.FORTIFICATION,
        code: [Direction.DOWN, Direction.LEFT, Direction.LEFT, Direction.DOWN],
        icon: require("../assets/stratagems/icons/Incendiary Mines.svg")
            .default,
    },
    {
        name: "Guard Dog Rover",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog Rover.svg").default,
    },
    {
        name: "Ballistic Shield Backpack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Ballistic Shield Backpack.svg")
            .default,
    },
    {
        name: "Arc Thrower",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Arc Thrower.svg").default,
    },
    {
        name: "Anti-Tank Mines",
        group: StratagemGroup.FORTIFICATION,
        code: [Direction.DOWN, Direction.LEFT, Direction.UP, Direction.UP],
        icon: require("../assets/stratagems/icons/Anti-Tank Mines.svg").default,
    },
    {
        name: "Quasar Cannon",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Quasar Cannon.svg").default,
    },
    {
        name: "Shield Generator Pack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Shield Generator Pack.svg")
            .default,
    },
    {
        name: "Gas Mines",
        group: StratagemGroup.FORTIFICATION,
        code: [Direction.DOWN, Direction.LEFT, Direction.LEFT, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Gas Mine.svg").default,
    },
    {
        name: "Machine Gun Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Machine Gun Sentry.svg")
            .default,
    },
    {
        name: "Gatling Sentry",
        group: StratagemGroup.SENTRY,
        code: [Direction.DOWN, Direction.UP, Direction.RIGHT, Direction.LEFT],
        icon: require("../assets/stratagems/icons/Gatling Sentry.svg").default,
    },
    {
        name: "Mortar Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Mortar Sentry.svg").default,
    },
    {
        name: "Guard Dog",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog.svg").default,
    },
    {
        name: "Autocannon Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Autocannon Sentry.svg")
            .default,
    },
    {
        name: "Rocket Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Rocket Sentry.svg").default,
    },
    {
        name: "EMS Mortar Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/EMS Mortar Sentry.svg")
            .default,
    },
    {
        name: "Patriot Exosuit",
        group: StratagemGroup.WALKER,
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Patriot Exosuit.svg").default,
    },
    {
        name: "Emancipator Exosuit",
        group: StratagemGroup.WALKER,
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Emancipator Exosuit.svg")
            .default,
    },
    {
        name: "Sterilizer",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Sterilizer.svg").default,
    },
    {
        name: "Guard Dog Dog Breath",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog Breath.svg")
            .default,
    },
    {
        name: "Directional Shield",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Directional Shield.svg")
            .default,
    },
    {
        name: "Anti-Tank Emplacement",
        group: StratagemGroup.FORTIFICATION,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Anti-Tank Emplacement.svg")
            .default,
    },
    {
        name: "Flame Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Flame Sentry.svg").default,
    },
    {
        name: "Hover Pack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Hover Pack.svg").default,
    },
    {
        name: "One True Flag",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/One True Flag.svg").default,
    },
    {
        name: "De-Escalator",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/GL-52 De-Escalator.svg")
            .default,
    },
    {
        name: "Guard Dog K-9",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog K-9.svg").default,
    },
    {
        name: "Epoch",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Epoch.svg").default,
    },
    {
        name: "Laser Sentry",
        group: StratagemGroup.SENTRY,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Laser Sentry.svg").default,
    },
    {
        name: "Warp Pack",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Warp Pack.svg").default,
    },
    {
        name: "Speargun",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Speargun.svg").default,
    },
    {
        name: "Expendable Napalm",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Expendable Napalm.svg")
            .default,
    },
    {
        name: "Solo Silo",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Solo Silo.svg").default,
    },
    {
        name: "Maxigun",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Maxigun.svg").default,
    },
    {
        name: "Defoliation Tool",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Defoliation Tool.svg")
            .default,
    },
    {
        name: "Guard Dog Hot Dog",
        group: StratagemGroup.BACKPACK,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.LEFT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog Hot Dog.svg")
            .default,
    },

    // Mission-specific stratagems
    {
        name: "Reinforments",
        group: StratagemGroup.REINFORCEMENTS,

        code: [
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Reinforce.svg").default,
    },
    {
        name: "SOS Beacon",
        group: StratagemGroup.SOS,
        code: [Direction.UP, Direction.DOWN, Direction.RIGHT, Direction.UP],
        icon: require("../assets/stratagems/icons/SOS Beacon.svg").default,
    },

    {
        name: "Resupply",
        group: StratagemGroup.RESUPPLY,
        code: [Direction.DOWN, Direction.DOWN, Direction.UP, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Resupply.svg").default,
    },
    {
        name: "Eagle Rearm",
        group: StratagemGroup.EAGLE_REARM,
        code: [
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Eagle Rearm.svg").default,
    },
    // {
    //     name: "SSSD Delivery",
    //     group: StratagemGroup.OBJECTIVE,
    //     code: [
    //         Direction.DOWN,
    //         Direction.DOWN,
    //         Direction.DOWN,
    //         Direction.UP,
    //         Direction.UP,
    //     ],
    //     icon: require("../assets/stratagems/icons/Upload data.svg").default,
    // },
    {
        name: "Prospecting Drill",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Prospecting Drill.svg")
            .default,
    },
    {
        name: "Super Earth Flag",
        group: StratagemGroup.SUPPORT_WEAPON,
        code: [Direction.DOWN, Direction.UP, Direction.DOWN, Direction.UP],
        icon: require("../assets/stratagems/icons/Super Earth Flag.svg")
            .default,
    },
    {
        name: "Hellbomb",
        group: StratagemGroup.HELLBOMB,
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Hellbomb.svg").default,
    },
    {
        name: "Upload Data",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Upload Data.svg").default,
    },
    {
        name: "Seismic Probe",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Seismic Probe.svg").default,
    },
    {
        name: "Orbital Illumination Flare",
        group: StratagemGroup.FLARE,
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Orbital Illumination Flare.svg")
            .default,
    },
    {
        name: "SEAF Artillery",
        group: StratagemGroup.UNKNOWN,
        code: [Direction.RIGHT, Direction.UP, Direction.UP, Direction.DOWN],
        icon: require("../assets/stratagems/icons/SEAF Artillery.svg").default,
    },
    {
        name: "Dark Fluid Vessel",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Dark Fluid Vessel.svg")
            .default,
    },
    {
        name: "Tectonic Drill",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Tectonic Drill.svg").default,
    },
    {
        name: "Hive Breaker Drill",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Hive Breaker Drill.svg")
            .default,
    },
    {
        name: "Cargo Container",
        group: StratagemGroup.OBJECTIVE,
        code: [
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Cargo Container.svg").default,
    },
] as const;
