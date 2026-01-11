import { StratagemGroup } from "./stratagems";

export function lookupVoicelineByGroup(group: StratagemGroup) {
    return VOICELINES[group];
}

// TODO: get all the voicelines

const reinforcingSFX = [
    require("../assets/stratagems/audio/callling_in_reinforcements.mp3"),
];

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

export const VOICELINES: Record<
    StratagemGroup,
    Array<Array<ReturnType<typeof require> & number>>
> = {
    [StratagemGroup.REINFORCEMENTS]: [reinforcingSFX],
    [StratagemGroup.SOS]: [],
    [StratagemGroup.RESUPPLY]: [], // resupply/supplies
    [StratagemGroup.EAGLE_REARM]: [eagleRearmSFX],

    [StratagemGroup.OBJECTIVE]: [],
    [StratagemGroup.FLARE]: [],
    [StratagemGroup.HELLBOMB]: [],

    [StratagemGroup.ORBITAL]: [],
    [StratagemGroup.EAGLE]: [eagleVoiceSFX], // 'requesting air support' then eagle sfx

    [StratagemGroup.SUPPORT_WEAPON]: [], // 'freedom requires firepower'
    [StratagemGroup.BACKPACK]: [], // 'equipment'?, tac-pack
    [StratagemGroup.WALKER]: [],
    [StratagemGroup.VEHICLE]: [],

    [StratagemGroup.FORTIFICATION]: [],
    [StratagemGroup.SENTRY]: [],

    [StratagemGroup.UNKNOWN]: [],
} as const;
