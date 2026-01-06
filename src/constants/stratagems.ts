import { SvgProps } from "react-native-svg";

type Stratagem = {
    name: string;
    code: Direction[];
    audio?: Array<
        // List of possible sounds, outer list plays in order
        Array<ReturnType<typeof require> & number>
    >;
    icon?: ReturnType<typeof require> & React.FC<SvgProps>;
};


export enum Direction {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    UP = "UP",
    DOWN = "DOWN",
    TAP = "TAP",
}

export function lookupStratByCode(code: Direction[]) {
    const matches = stratagems
        .map((stratagem) => {
            if (code.length != stratagem.code.length) return undefined;

            if (
                code
                    .slice(-stratagem.code.length)
                    .every((direction, i) => direction == stratagem.code[i])
            ) {
                return stratagem;
            }

            return undefined;
        })
        .filter((item) => item !== undefined);

    if (matches.length > 1) {
        console.warn(`Multiple hits for stratagem code ${code}`);
    }

    return matches.at(0);
}

const eagleRearmSFX = [
    require("../assets/stratagems/audio/eagle1_leaving_combat_zone_to_resupply.mp3"),
    require("../assets/stratagems/audio/super_earths_finest.mp3"),
    require("../assets/stratagems/audio/weaponized_freedom.mp3"),
    require("../assets/stratagems/audio/super_earths_finest.mp3"),
];

const eagleVoiceSFX = [
    require("../assets/stratagems/audio/unleashing_democracy.mp3"),
    require("../assets/stratagems/audio/democracys_on_its_way.mp3"),
    require("../assets/stratagems/audio/here_comes_the_cavalry.mp3"),
    require("../assets/stratagems/audio/an_eagle_never_misses.mp3"),
];

// TODO: Add orbital, support, backpack, resupply, flag, hellbomb, etc. sfx

export const stratagems: Stratagem[] = [
    {
        name: "Eagle 500kg",
        code: [
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.DOWN,
        ],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle 500KG Bomb.svg").default
    },
    {
        name: "Reinforments",
        code: [
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
        ],
        audio: [
            require("../assets/stratagems/audio/callling_in_reinforcements.mp3"),
        ],
        icon: require("../assets/stratagems/icons/Reinforce.svg").default
    },
    {
        name: "Resupply",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Resupply.svg").default,
    },
    {
        name: "SEAF Artillery",
        code: [
            Direction.RIGHT, Direction.UP, Direction.UP, Direction.DOWN
        ],
        icon: require("../assets/stratagems/icons/SEAF Artillery.svg").default
    },
    {
        name: "Super Earth Flag",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Super Earth Flag.svg").default
    },
    {
        name: "Hellbomb",
        code: [
            Direction.DOWN,
            Direction.UP, 
            Direction.LEFT, 
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT
        ],
        icon: require("../assets/stratagems/icons/Hellbomb.svg").default
    },
    {
        name: "Portable Hellbomb",
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Hellbomb Portable.svg").default
    },
    {
        name: "Eagle Rearm",
        code: [
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
        ],
        audio: [eagleRearmSFX,],
        icon: require("../assets/stratagems/icons/Eagle Rearm.svg").default
    },
    {
        name: "Machine Gun",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Machine Gun.svg").default
    },
    {
        name: "Anti-Materiel Rifle",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Anti-Materiel Rifle.svg").default
    },
    {
        name: "Stalwart",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Stalwart.svg").default
    },
    {
        name: "Expendable Anti-Tank",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Expendable Anti-Tank.svg").default
    },
    {
        name: "Recoilless Rifle",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Recoilless Rifle.svg").default
    },
    {
        name: "Flamethrower",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Flamethrower.svg").default
    },
    {
        name: "Autocannon",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.RIGHT, // Matt made misinput here
        ],
        icon: require("../assets/stratagems/icons/Autocannon.svg").default
    },
    {
        name: "Heavy Machine Gun",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Heavy Machine Gun.svg").default
    },
    {
        name: "Airburst Rocket Launcher",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Airburst Rocket Launcher.svg").default
    },
    {
        name: "Commando",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Commando.svg").default
    },
    {
        name: "Railgun",
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Railgun.svg").default
    },
    {
        name: "Spear",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Spear.svg").default
    },
    {
        name: "WASP Launcher",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/StA-X3 W.A.S.P. Launcher.svg").default
    },
    {
        name: "Orbital Gatling Barrage",
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Orbital Gatling Barrage.svg").default
    },
    {
        name: "Orbital Airburst Strike",
        code: [Direction.RIGHT, Direction.RIGHT, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Orbital Airburst Strike.svg").default
    },
    {
        name: "Orbital 120mm HE Barrage",
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital 120MM HE Barrage.svg").default
    },
    {
        name: "Orbital 380mm HE Barrage",
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital 380MM HE Barrage.svg").default
    },
    {
        name: "Orbital Walking Barrage",
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital Walking Barrage.svg").default
    },
    {
        name: "Orbital Laser",
        code: [
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital Laser.svg").default
    },
    {
        name: "Orbital Napalm Barrage",
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Orbital Napalm Barrage.svg").default
    },
    {
        name: "Orbital Railcannon Strike",
        code: [
            Direction.RIGHT,
            Direction.UP,
            Direction.DOWN,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Orbital Railcannon Strike.svg").default
    },
    {
        name: "Eagle Strafing Run",
        code: [Direction.UP, Direction.RIGHT, Direction.RIGHT],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle Strafing Run.svg").default
    },
    {
        name: "Eagle Airstrike",
        code: [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.RIGHT],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle Airstrike.svg").default
    },
    {
        name: "Eagle Cluster Bomb",
        code: [
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle Cluster Bomb.svg").default
    },
    {
        name: "Eagle Napalm Airstrike",
        code: [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.UP],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle Napalm Airstrike.svg").default
    },
    {
        name: "Jump Pack",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Jump Pack.svg").default
    },
    {
        name: "Eagle Smoke Strike",
        code: [Direction.UP, Direction.RIGHT, Direction.UP, Direction.DOWN],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle Smoke Strike.svg").default
    },
    {
        name: "Eagle 110mm Rocket Pods",
        code: [Direction.UP, Direction.RIGHT, Direction.UP, Direction.LEFT],
        audio: [eagleVoiceSFX,],
        icon: require("../assets/stratagems/icons/Eagle 110MM Rocket Pods.svg").default
    },
    {
        name: "Fast Recon Vehicle",
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Fast Recon Vehicle.svg").default
    },
    {
        name: "Orbital Precision Strike",
        code: [Direction.RIGHT, Direction.RIGHT, Direction.UP],
        icon: require("../assets/stratagems/icons/Orbital Precision Strike.svg").default
    },
    {
        name: "Orbital Gas Strike",
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Orbital Gas Strike.svg").default
    },
    {
        name: "Orbital EMS Strike",
        code: [
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Orbital EMS Strike.svg").default
    },
    {
        name: "Orbital Smoke Strike",
        code: [Direction.RIGHT, Direction.RIGHT, Direction.DOWN, Direction.UP],
        icon: require("../assets/stratagems/icons/Orbital Smoke Strike.svg").default
    },
    {
        name: "HMG Emplacement",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/HMG Emplacement.svg").default
    },
    {
        name: "Shield Generator Relay",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Shield Generator Relay.svg").default
    },
    {
        name: "Tesla Tower",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Tesla Tower.svg").default
    },
    {
        name: "Anti-Personnel Minefield",
        code: [Direction.DOWN, Direction.LEFT, Direction.UP, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Anti-Personnel Minefield.svg").default
    },
    {
        name: "Supply Pack",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Supply Pack.svg").default
    },
    {
        name: "Grenade Launcher",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Grenade Launcher.svg").default
    },
    {
        name: "Laser Cannon",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Laser Cannon.svg").default
    },
    {
        name: "Incendiary Minefield",
        code: [Direction.DOWN, Direction.LEFT, Direction.LEFT, Direction.DOWN],
        icon: require("../assets/stratagems/icons/Incendiary Mines.svg").default
    },
    {
        name: "Guard Dog Rover",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog Rover.svg").default
    },
    {
        name: "Ballistic Shield Backpack",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Ballistic Shield Backpack.svg").default
    },
    {
        name: "Arc Thrower",
        code: [
            Direction.DOWN,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Arc Thrower.svg").default
    },
    {
        name: "Anti-Tank Mines",
        code: [Direction.DOWN, Direction.LEFT, Direction.UP, Direction.UP],
        icon: require("../assets/stratagems/icons/Anti-Tank Mines.svg").default
    },
    {
        name: "Quasar Cannon",
        code: [
            Direction.DOWN,
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Quasar Cannon.svg").default
    },
    {
        name: "Shield Generator Pack",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.LEFT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Shield Generator Pack.svg").default
    },
    {
        name: "Gas Mines",
        code: [Direction.DOWN, Direction.LEFT, Direction.LEFT, Direction.RIGHT],
        icon: require("../assets/stratagems/icons/Gas Mine.svg").default
    },
    {
        name: "Machine Gun Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Machine Gun Sentry.svg").default
    },
    {
        name: "Gatling Sentry",
        code: [Direction.DOWN, Direction.UP, Direction.RIGHT, Direction.LEFT],
        icon: require("../assets/stratagems/icons/Gatling Sentry.svg").default
    },
    {
        name: "Mortar Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Mortar Sentry.svg").default
    },
    {
        name: "Guard Dog",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog.svg").default
    },
    {
        name: "Autocannon Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Autocannon Sentry.svg").default
    },
    {
        name: "Rocket Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Rocket Sentry.svg").default
    },
    {
        name: "EMS Mortar Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/EMS Mortar Sentry.svg").default
    },
    {
        name: "Patriot Exosuit",
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.DOWN,
        ],
        icon: require("../assets/stratagems/icons/Patriot Exosuit.svg").default
    },
    {
        name: "Emancipator Exosuit",
        code: [
            Direction.LEFT,
            Direction.DOWN,
            Direction.RIGHT,
            Direction.UP,
            Direction.LEFT,
            Direction.DOWN,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Emancipator Exosuit.svg").default
    },
    {
        name: "Sterilizer",
        code: [
            Direction.DOWN,
            Direction.LEFT,
            Direction.UP,
            Direction.DOWN,
            Direction.LEFT,
        ],
        icon: require("../assets/stratagems/icons/Sterilizer.svg").default
    },
    {
        name: "Guard Dog Dog Breath",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.UP,
            Direction.RIGHT,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Guard Dog Breath.svg").default
    },
    {
        name: "Directional Shield",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Directional Shield.svg").default
    },
    {
        name: "Anti-Tank Emplacement",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.LEFT,
            Direction.RIGHT,
            Direction.RIGHT,
            Direction.RIGHT,
        ],
        icon: require("../assets/stratagems/icons/Anti-Tank Emplacement.svg").default
    },
    {
        name: "Flame Sentry",
        code: [
            Direction.DOWN,
            Direction.UP,
            Direction.RIGHT,
            Direction.DOWN,
            Direction.UP,
            Direction.UP,
        ],
        icon: require("../assets/stratagems/icons/Flame Sentry.svg").default
    },
];
