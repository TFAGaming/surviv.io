import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { Main } from "./baseDefs";

const mapDef = {
    mapId: 7,
    desc: {
        name: "Cobalt",
        icon: "img/gui/cobalt.svg",
        buttonCss: "btn-mode-cobalt",
    },
    assets: {
        audio: [
            { name: "spawn_01", channel: "ui" },
            { name: "ping_unlock_01", channel: "ui" },
            { name: "ambient_lab_01", channel: "ambient" },
            { name: "log_13", channel: "sfx" },
            { name: "log_14", channel: "sfx" },
        ],
        atlases: ["gradient", "loadout", "shared", "cobalt"],
    },
    biome: {
        colors: {
            background: 134680,
            water: 13681,
            beach: 6834230,
            riverbank: 4472122,
            grass: 5069416,
            underground: 1772803,
            playerSubmerge: 1192009,
            playerGhillie: 4937830,
        },
        particles: {},
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    mapGen: {
        customSpawnRules: {
            locationSpawns: [
                {
                    type: "bunker_structure_09",
                    pos: v2.create(0.5, 0.5),
                    rad: 100,
                    retryOnFailure: true,
                },
            ],
        },
        densitySpawns: [
            {
                stone_01cb: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01cb: 78,
                cache_06: 12,
                tree_01cb: 100,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,
            },
        ],
        fixedSpawns: [
            {
                warehouse_01: 2,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                cache_01: 1,
                cache_02: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01: 1,
                chest_03: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 1,
                club_complex_01: 1,
                bunker_structure_09: 1
            },
        ],
        randomSpawns: [
            {
                spawns: ["mansion_structure_01", "police_01"],
                choose: 2,
            },
        ],
        spawnReplacements: [
            { stone_03: "stone_03cb" }
        ],
        importantSpawns: ["bunker_structure_09"],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
    gameMode: {
        maxPlayers: 80,
        perkMode: true,
        perkModeRoles: ["scout", "sniper", "healer", "demo", "assault", "tank"],
    },
};

export const Cobalt = util.mergeDeep({}, Main, mapDef);
