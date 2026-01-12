import { StratagemGroup } from "./stratagems";

export function lookupVoicelineByGroup(group: StratagemGroup) {
    return VOICELINES[group];
}

const reinforcing = [
    require("../assets/stratagems/audio/Calling in reinforcements [1].wav"),
    require("../assets/stratagems/audio/Calling in reinforcements [2].wav"),
];

const SOS = [
    require("../assets/stratagems/audio/Deploying SOS beacon (eloquent) [1].wav"),
    require("../assets/stratagems/audio/Deploying SOS beacon [1].wav"),
    require("../assets/stratagems/audio/Sending out a SOS [1].wav"),
    require("../assets/stratagems/audio/Sending out an SOS [1].wav"),
];

const resupply = [
    require("../assets/stratagems/audio/Calling down supplies [1].wav"),
    require("../assets/stratagems/audio/Calling down supplies [2].wav"),
    require("../assets/stratagems/audio/Calling down supplies [3].wav"),
    require("../assets/stratagems/audio/Calling down supplies [4].wav"),
    require("../assets/stratagems/audio/Requesting supplies [1].wav"),
    require("../assets/stratagems/audio/Requesting supplies [2].wav"),
    require("../assets/stratagems/audio/Throwing supply beacon [1].wav"),
    require("../assets/stratagems/audio/Throwing supply beacon [2].wav"),
    require("../assets/stratagems/audio/Throwing supply beacon [3].wav"),
    require("../assets/stratagems/audio/Throwing supply beacon [4].wav"),
];

const eagleRearm = [
    require("../assets/stratagems/audio/eagle1_leaving_combat_zone_to_resupply.mp3"),
    require("../assets/stratagems/audio/super_earths_finest.mp3"),
    require("../assets/stratagems/audio/weaponized_freedom.mp3"),
    require("../assets/stratagems/audio/super_earths_finest.mp3"),
];

const objective = [
    require("../assets/stratagems/audio/Calling down objective equipment [1].wav"),
    require("../assets/stratagems/audio/Calling down objective equipment [2].wav"),
    require("../assets/stratagems/audio/Calling down objective equipment [3].wav"),
    require("../assets/stratagems/audio/Calling down objective equipment [4].wav"),
    require("../assets/stratagems/audio/Requesting objective equipment [1].wav"),
    require("../assets/stratagems/audio/Requesting objective equipment [2].wav"),
];

const flare = [
    require("../assets/stratagems/audio/Deploying flare [1].wav"),
    require("../assets/stratagems/audio/Deploying flare [2].wav"),
    require("../assets/stratagems/audio/Deploying flare [3].wav"),
    require("../assets/stratagems/audio/Deploying flare [4].wav"),
];

const hellbomb = [
    require("../assets/stratagems/audio/Calling in a hellbomb [1].wav"),
    require("../assets/stratagems/audio/Calling in a hellbomb [2].wav"),
    require("../assets/stratagems/audio/Calling in a hellbomb [3].wav"),
    require("../assets/stratagems/audio/Calling in a hellbomb [4].wav"),
];

const orbital = [
    require("../assets/stratagems/audio/Calling in an orbital strike [1].wav"),
    require("../assets/stratagems/audio/Calling in orbital strike [1].wav"),
    require("../assets/stratagems/audio/Orbital inbound [1].wav"),
    require("../assets/stratagems/audio/Orbital inbound [2].wav"),
    require("../assets/stratagems/audio/Orbital incoming [1].wav"),
    require("../assets/stratagems/audio/Orbital incoming [2].wav"),
    require("../assets/stratagems/audio/Requesting orbital [1].wav"),
    require("../assets/stratagems/audio/Requesting orbital [2].wav"),
    require("../assets/stratagems/audio/Requesting orbital strike [1].wav"),
    require("../assets/stratagems/audio/Requesting orbital strike [2].wav"),
];

const eagle = [
    require("../assets/stratagems/audio/Calling in an eagle [1].wav"),
    require("../assets/stratagems/audio/Calling in an eagle [2].wav"),
    require("../assets/stratagems/audio/Requesting air support [1].wav"),
    require("../assets/stratagems/audio/Requesting air support [2].wav"),
    require("../assets/stratagems/audio/Sending in an eagle [1].wav"),
    require("../assets/stratagems/audio/Sending in an eagle [2].wav"),
];

const eagleVoice = [
    require("../assets/stratagems/audio/unleashing_democracy.mp3"),
    require("../assets/stratagems/audio/democracys_on_its_way.mp3"),
    require("../assets/stratagems/audio/here_comes_the_cavalry.mp3"),
    require("../assets/stratagems/audio/an_eagle_never_misses.mp3"),
];

const support_weapon = [
    require("../assets/stratagems/audio/Calling down a support weapon [1].wav"),
    require("../assets/stratagems/audio/Calling down a support weapon [2].wav"),
    require("../assets/stratagems/audio/Calling down support weapon [1].wav"),
    require("../assets/stratagems/audio/Calling down support weapon [2].wav"),
    require("../assets/stratagems/audio/Freedom requires firepower [1].wav"),
    require("../assets/stratagems/audio/Freedom requires firepower [2].wav"),
    require("../assets/stratagems/audio/Requesting advanced weaponry [1].wav"),
    require("../assets/stratagems/audio/Requesting advanced weaponry [2].wav"),
    require("../assets/stratagems/audio/Support weapon inbound [1].wav"),
    require("../assets/stratagems/audio/Support weapon inbound [2].wav"),
];

const backpack = [
    require("../assets/stratagems/audio/Calling down equipment [1].wav"),
    require("../assets/stratagems/audio/Calling down equipment [2].wav"),
    require("../assets/stratagems/audio/Calling down equipment [3].wav"),
    require("../assets/stratagems/audio/Calling down equipment [4].wav"),
    require("../assets/stratagems/audio/Requesting equipment [1].wav"),
    require("../assets/stratagems/audio/Requesting equipment [2].wav"),
    require("../assets/stratagems/audio/Requesting tac-pack [1].wav"),
    require("../assets/stratagems/audio/Requesting tac-pack [2].wav"),
    require("../assets/stratagems/audio/Requesting tac-pack [3].wav"),
    require("../assets/stratagems/audio/Requesting tac-pack [4].wav"),
    require("../assets/stratagems/audio/Tac-pack inbound [1].wav"),
    require("../assets/stratagems/audio/Tac-pack inbound [2].wav"),
];

const walker = [
    require("../assets/stratagems/audio/Calling down a walker [1].wav"),
    require("../assets/stratagems/audio/Calling down a walker [2].wav"),
    require("../assets/stratagems/audio/Calling down a walker [3].wav"),
    require("../assets/stratagems/audio/Calling down a walker [4].wav"),
    require("../assets/stratagems/audio/Requesting walker [1].wav"),
    require("../assets/stratagems/audio/Requesting walker [2].wav"),
];

const vehicle = [
    require("../assets/stratagems/audio/Calling down a vehicle [1].wav"),
    require("../assets/stratagems/audio/Calling down a vehicle [2].wav"),
    require("../assets/stratagems/audio/Calling down a vehicle [3].wav"),
    require("../assets/stratagems/audio/Calling down a vehicle [4].wav"),
    require("../assets/stratagems/audio/Requesting vehicle [1].wav"),
    require("../assets/stratagems/audio/Requesting vehicle [2].wav"),
];

const fortification = [
    require("../assets/stratagems/audio/Calling down fortifications [1].wav"),
    require("../assets/stratagems/audio/Calling down fortifications [2].wav"),
    require("../assets/stratagems/audio/Calling down fortifications [3].wav"),
    require("../assets/stratagems/audio/Calling down fortifications [4].wav"),
    require("../assets/stratagems/audio/Requesting fortifications [1].wav"),
    require("../assets/stratagems/audio/Requesting fortifications [2].wav"),
];

const sentry = [
    require("../assets/stratagems/audio/Calling down a sentry [1].wav"),
    require("../assets/stratagems/audio/Calling down a sentry [2].wav"),
    require("../assets/stratagems/audio/Calling down a sentry [3].wav"),
    require("../assets/stratagems/audio/Calling down a sentry [4].wav"),
    require("../assets/stratagems/audio/Requesting sentry [1].wav"),
    require("../assets/stratagems/audio/Requesting sentry [2].wav"),
    require("../assets/stratagems/audio/Requesting sentry [3].wav"),
    require("../assets/stratagems/audio/Requesting sentry [4].wav"),
];

export const VOICELINES: Record<
    StratagemGroup,
    Array<Array<ReturnType<typeof require> & number>>
> = {
    [StratagemGroup.REINFORCEMENTS]: [reinforcing],
    [StratagemGroup.SOS]: [SOS],
    [StratagemGroup.RESUPPLY]: [resupply], // resupply/supplies
    [StratagemGroup.EAGLE_REARM]: [eagleRearm],

    [StratagemGroup.OBJECTIVE]: [objective],
    [StratagemGroup.FLARE]: [flare],
    [StratagemGroup.HELLBOMB]: [hellbomb],

    [StratagemGroup.ORBITAL]: [orbital],
    [StratagemGroup.EAGLE]: [eagle, eagleVoice], // 'requesting air support' then eagle sfx

    [StratagemGroup.SUPPORT_WEAPON]: [support_weapon], // 'freedom requires firepower'
    [StratagemGroup.BACKPACK]: [backpack], // 'equipment'?, tac-pack
    [StratagemGroup.WALKER]: [walker],
    [StratagemGroup.VEHICLE]: [vehicle],

    [StratagemGroup.FORTIFICATION]: [fortification],
    [StratagemGroup.SENTRY]: [sentry],

    [StratagemGroup.UNKNOWN]: [],
} as const;
