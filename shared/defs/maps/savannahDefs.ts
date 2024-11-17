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
                        innerRad: 32,
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
                smoothness: 0.55 
            },
        },
        densitySpawns: [
            {
                stone_01x: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 38,
                crate_02: 4,
                crate_03: 8,
                crate_03x: 1,
                bush_01: 78,
                cache_06: 12,
                tree_01: 320,
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
        spawnReplacements: [
            {
                bank_01: "bank_01x",
                barn_01: "barn_01x",
                bridge_lg_01: "bridge_lg_01x",
                cabin_01: "cabin_01x",
                container_01: "container_01x",
                greenhouse_01: "greenhouse_02",
                house_red_01: "house_red_01x",
                house_red_02: "house_red_02x",
                hut_01: "hut_01x",
                hut_02: "hut_02x",
                mansion_01: "mansion_01x",
                outhouse_01: "outhouse_01x",
                police_01: "police_01x",
                shack_01: "shack_01x",
                shack_02: "shack_02x",
                shack_03a: "shack_03x",
                warehouse_01: "warehouse_01x",
                warehouse_02: "warehouse_02x",
                bush_01: "bush_01x",
                bush_07: "bush_07x",
                chest_03: "chest_03x",
                crate_01: "crate_01x",
                crate_02: "crate_02x",
                stone_01: "stone_01x",
                stone_03: "stone_03x",
                table_01: "table_01x",
                table_02: "table_02x",
                table_03: "table_03x",
                tree_01: "tree_06",
                mil_crate_02: "mil_crate_03",
            },
        ],
    },
};

export const Savannah = util.mergeDeep({}, Main, mapDef);
