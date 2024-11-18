import { util } from "../../utils/util";
import { v2 } from "../../utils/v2";
import { Main } from "./baseDefs";

const mapDef = {
    mapId: 5,
    desc: {
        name: "Savannah",
        icon: "img/gui/player-the-hunted.svg",
        buttonCss: "btn-mode-savannah",
    },
    assets: {
        audio: [],
        atlases: ["gradient", "loadout", "shared", "savannah"],
    },
    biome: {
        colors: {
            background: 1858399,
            water: 4301994,
            waterRipple: 9892086,
            beach: 13332786,
            riverbank: 11689508,
            grass: 11841582,
            underground: 4001027,
            playerSubmerge: 5151631,
            playerGhillie: 11578411,
        },
        particles: {},
    },
    gameMode: { maxPlayers: 80, sniperMode: true },
    mapGen: {
        map: {
            rivers: {
                lakes: [
                    {
                        odds: 1,
                        innerRad: 6,
                        outerRad: 36,
                        spawnBound: {
                            pos: v2.create(0.84, 0.18),
                            rad: 50,
                        },
                    },
                    {
                        odds: 1,
                        innerRad: 6,
                        outerRad: 36,
                        spawnBound: {
                            pos: v2.create(0.21, 0.79),
                            rad: 50,
                        },
                    },
                    {
                        odds: 1,
                        innerRad: 42,
                        outerRad: 66,
                        spawnBound: {
                            pos: v2.create(0.5, 0.5),
                            rad: 70,
                        },
                    },
                ],
                weights: [
                    { weight: 1, widths: [3] }
                ],
                smoothness: 0.2
            },
        },
        bridgeTypes: {
        },
        riverCabins: {
            cabin_01: 0,
        },
        customSpawnRules: {
            locationSpawns: [],
            placeSpawns: [],
        },
        densitySpawns: [
            {
                stone_01: 200,
                stone_07: 14,
                brush_clump_01: 30,
                bunker_structure_03: 1,
                bunker_structure_01sv: 1,
                barrel_01: 76,
                propane_01: 56,
                crate_02sv: 40,
                crate_01: 38,
                crate_02: 4,
                crate_03: 8,
                crate_03x: 1,
                mil_crate_05: 10,
                bush_01sv: 78,
                cache_06: 12,
                tree_03sv: 1,
                tree_01sv: 60,
                tree_12: 20,
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
        randomSpawns: [],
        fixedSpawns: [
            {
                warehouse_01f: { small: 4, large: 5 },
                kopje_patch_01: { small: 2, large: 3},
                savannah_patch_01: 4,
                crate_02sv_lake: 3,
                cache_01: 1,
                cache_02: 1,
                cache_07: 1,
                mansion_structure_01: 1,
                chest_01: 1,
                chest_03f: 1,
                outhouse_01: 1,
                perch_01: 12,
            },
        ],
        importantSpawns: [
            "warehouse_01f",
            "mansion_structure_01"
        ],
    },
};

export const Savannah = util.mergeDeep({}, Main, mapDef);
