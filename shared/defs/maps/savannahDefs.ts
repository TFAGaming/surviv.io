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
    lootTable: {
        tier_guns: [
            { name: "mk12", count: 1, weight: 0.1 },
            { name: "scar", count: 1, weight: 0.01 },
            { name: "mosin", count: 1, weight: 0.5 },
            { name: "m39", count: 1, weight: 0.1 },
            { name: "mp5", count: 1, weight: 10 },
            { name: "mac10", count: 1, weight: 6 },
            { name: "ump9", count: 1, weight: 3 },
            { name: "ot38", count: 1, weight: 8 },
            { name: "m9", count: 1, weight: 10 },
            { name: "m93r", count: 1, weight: 5 },
            { name: "glock", count: 1, weight: 7 },
            { name: "deagle", count: 1, weight: 0.05 },
            { name: "vector", count: 1, weight: 0.01 },
            { name: "sv98", count: 1, weight: 0.001 },
            { name: "qbb97", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.2 },
            { name: "scar", count: 1, weight: 0.5 },
            { name: "scout_elite", count: 1, weight: 0.05 },
            { name: "vss", count: 1, weight: 0.05 },
            { name: "awc", count: 2, weight: 0.005 }
        ],
        tier_container: [
            { name: "tier_guns", count: 1, weight: 0.29 },
            { name: "tier_ammo", count: 1, weight: 0.04 },
            { name: "tier_scopes", count: 1, weight: 0.15 },
            { name: "tier_armor", count: 1, weight: 0.1 },
            { name: "tier_medical", count: 1, weight: 0.17 },
            { name: "tier_throwables", count: 1, weight: 0.05 },
            { name: "tier_packs", count: 1, weight: 0.09 },
            { name: "tier_outfits", count: 1, weight: 0.035 },
        ],
        tier_scopes: [
            { name: "4xscope", count: 1, weight: 24 },
            { name: "8xscope", count: 1, weight: 5 },
            { name: "15xscope", count: 1, weight: 1 },
        ],
        tier_soviet: [
            { name: "tier_guns", count: 1, weight: 3 }, // ?
            { name: "tier_armor", count: 1, weight: 2 }, // ?
            { name: "tier_packs", count: 1, weight: 1 }, // ?
        ],
        tier_airdrop_uncommon: [
            { name: "mk12", count: 1, weight: 2.5 },
            { name: "scar", count: 1, weight: 0.75 },
            { name: "mosin", count: 1, weight: 2.5 },
            { name: "m39", count: 1, weight: 2.5 },
            { name: "deagle", count: 1, weight: 1 },
            { name: "sv98", count: 1, weight: 0.01 },
            { name: "qbb97", count: 1, weight: 1.5 },
            { name: "m9", count: 1, weight: 0.01 },
            { name: "flare_gun", count: 1, weight: 0.125 },
            { name: "scout_elite", count: 1, weight: 1.5 },
            { name: "model94", count: 1, weight: 2 },
            { name: "colt45", count: 1, weight: 1 },
            { name: "endless_ammo", count: 1, weight: 0.75 }
        ],
        tier_airdrop_rare: [
            { name: "garand", count: 1, weight: 6 },
            { name: "awc", count: 1, weight: 3 },
            { name: "ots38_dual", count: 1, weight: 4.5 },
        ],
        tier_ammo: [
            { name: "45acp", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
        ],
        tier_ammo_crate: [
            { name: "45acp", count: 60, weight: 3 },
            { name: "762mm", count: 60, weight: 3 },
            { name: "556mm", count: 60, weight: 3 },
            { name: "50AE", count: 21, weight: 1 },
            { name: "308sub", count: 5, weight: 1 },
            { name: "flare", count: 1, weight: 1 },
        ],
        tier_airdrop_ammo: [
            { name: "45acp", count: 30, weight: 3 },
            { name: "762mm", count: 30, weight: 3 },
            { name: "556mm", count: 30, weight: 3 },
        ],
        tier_airdrop_outfits: [
            { name: "", count: 1, weight: 20 },
            { name: "outfitMeteor", count: 1, weight: 5 },
            { name: "outfitHeaven", count: 1, weight: 1 },
            {
                name: "outfitGhillie",
                count: 1,
                weight: 0.5,
            },
        ],
        tier_airdrop_melee: [
            { name: "", count: 1, weight: 19 },
            { name: "stonehammer", count: 1, weight: 1 },
            { name: "pan", count: 1, weight: 1 },
        ],
        tier_hatchet: [
            { name: "vector45", count: 1, weight: 0.4 },
            { name: "m9", count: 1, weight: 0.01 },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "strobe", count: 1, weight: 0.2 },
            { name: "mirv", count: 2, weight: 0.05 },
        ],
        tier_airdrop_throwables: [
            { name: "strobe", count: 1, weight: 1 },
            { name: "frag", count: 3, weight: 0.1 },
        ],
        tier_snipers: [
            { name: "blr", count: 1, weight: 1 },
            { name: "model94", count: 1, weight: 1 },
            { name: "mosin", count: 1, weight: 0.75 },
            { name: "scout_elite", count: 1, weight: 0.75 },
            { name: "vss", count: 1, weight: 0.75 },
            { name: "mk12", count: 1, weight: 0.75 },
            { name: "l86", count: 1, weight: 0.75 },
            { name: "svd", count: 1, weight: 0.75 },
            { name: "garand", count: 1, weight: 0.75 },
            { name: "sv98", count: 1, weight: 0.4 },
            { name: "awc", count: 1, weight: 0.5 },
        ],
        tier_cloud_02: [
            { name: "", count: 1, weight: 1 },
            { name: "outfitWheat", count: 1, weight: 0.5 },
        ],
        tier_perks: [
            { name: "firepower", count: 1, weight: 1 },
            { name: "windwalk", count: 1, weight: 1 },
            { name: "endless_ammo", count: 1, weight: 1 },
            { name: "splinter", count: 1, weight: 1 },
            { name: "small_arms", count: 1, weight: 1 },
            { name: "takedown", count: 1, weight: 1 },
            { name: "field_medic", count: 1, weight: 1 },
            { name: "scavenger", count: 1, weight: 1 },
            { name: "chambered", count: 1, weight: 1 },
            { name: "martyrdom", count: 1, weight: 1 },
            { name: "self_revive", count: 1, weight: 1 },
            { name: "bonus_9mm", count: 1, weight: 1 },
            { name: "explosive", count: 1, weight: 1 },
        ]
    },
    mapGen: {
        map: {
            scale: { small: 1.1875, large: 1.1875 },
            shoreInset: 8,
            grassInset: 12,
            rivers: {
                lakes: [
                    {
                        odds: 1,
                        innerRad: 6,
                        outerRad: 36,
                        spawnBound: {
                            pos: () => {
                                return v2.create(Math.random(), Math.random());
                            },
                            rad: 50,
                        },
                    },
                    {
                        odds: 1,
                        innerRad: 6,
                        outerRad: 36,
                        spawnBound: {
                            pos: () => {
                                return v2.create(Math.random(), Math.random());
                            },
                            rad: 50,
                        },
                    },
                    {
                        odds: 1,
                        innerRad: 32,
                        outerRad: 66,
                        spawnBound: {
                            pos: v2.create(0.5, 0.5),
                            rad: 80,
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
                stone_01sv: 100,
                stone_03x: 10,
                stone_07: 14,
                stone_02sv: 1,
                brush_02sv: 15,
                brush_01sv: 15,
                brush_clump_01: 20,
                bunker_structure_03: 1,
                bunker_structure_01sv: 1,
                barrel_01: 76,
                propane_01: 56,
                crate_02sv: 40,
                crate_01: 38,
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
                crate_02sv_lake: 1,
                cache_01: 1,
                cache_02: 1,
                cache_07: 1,
                mansion_structure_01: 1,
                chest_01: 1,
                chest_03f: 1,
                outhouse_01: 1,
                perch_01: 12,
                grassy_cover_01: 4,
                grassy_cover_02: 4,
                grassy_cover_03: 4,
                grassy_cover_complex_01: 2
            },
        ],
        importantSpawns: [
            "warehouse_01f",
            "mansion_structure_01",
            "kopje_patch_01",
            "savannah_patch_01"
        ],
    },
};

export const Savannah = util.mergeDeep({}, Main, mapDef);
