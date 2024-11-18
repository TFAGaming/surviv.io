import fs from "fs";
import path from "path";
import type { MapDefs } from "../../shared/defs/mapDefs";
import { GameConfig, TeamMode } from "../../shared/gameConfig";
import { util } from "../../shared/utils/util";
import type { Vec2 } from "../../shared/utils/v2";

const isProduction = process.env["NODE_ENV"] === "production";

function getToday(): string {
    const daysOfWeek = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ];

    return daysOfWeek[new Date().getDay()];
}

function getMapsOfTheDay(): Array<{
        mapName: keyof typeof MapDefs;
        teamMode: TeamMode;
        enabled: boolean;
    }> {
    const maps: Array<{
        mapName: keyof typeof MapDefs;
        teamMode: TeamMode;
        enabled: boolean;
    }> = [];

    switch (getToday()) {
        case "sunday": {
            maps.push({ mapName: 'main', teamMode: 1, enabled: true });
            maps.push({ mapName: 'main', teamMode: 2, enabled: true });
            maps.push({ mapName: 'faction', teamMode: 4, enabled: true });
            break;
        }
        case "monday": {
            maps.push({ mapName: 'cobalt', teamMode: 1, enabled: true });
            maps.push({ mapName: 'main', teamMode: 2, enabled: true });
            maps.push({ mapName: 'cobalt', teamMode: 4, enabled: true });
            break;
        }
        case "tuesday": {
            maps.push({ mapName: 'turkey', teamMode: 1, enabled: true });
            maps.push({ mapName: 'turkey', teamMode: 2, enabled: true });
            maps.push({ mapName: 'main', teamMode: 4, enabled: true });
            break;
        }
        case "wednesday": {
            maps.push({ mapName: 'woods', teamMode: 1, enabled: true });
            maps.push({ mapName: 'main', teamMode: 2, enabled: true });
            maps.push({ mapName: 'main', teamMode: 4, enabled: true });
            break;
        }
        case "thursday": {
            maps.push({ mapName: 'desert', teamMode: 1, enabled: true });
            maps.push({ mapName: 'main', teamMode: 2, enabled: true });
            maps.push({ mapName: 'desert', teamMode: 4, enabled: true });
            break;
        }
        case "friday": {
            maps.push({ mapName: 'main', teamMode: 1, enabled: true });
            maps.push({ mapName: 'potato', teamMode: 2, enabled: true });
            maps.push({ mapName: 'potato', teamMode: 4, enabled: true });
            break;
        }
        case "saturday": {
            maps.push({ mapName: 'savannah', teamMode: 1, enabled: true });
            maps.push({ mapName: 'savannah', teamMode: 2, enabled: true });
            maps.push({ mapName: 'main', teamMode: 4, enabled: true });
            break;
        }
        default: {
            maps.push({ mapName: 'main', teamMode: 1, enabled: true });
            maps.push({ mapName: 'main', teamMode: 2, enabled: true });
            maps.push({ mapName: 'main', teamMode: 4, enabled: true });
            break;
        }
    }

    return maps;
}

/**
 * Default config
 */
export const Config = {
    devServer: {
        host: "127.0.0.1",
        port: 8001,
    },

    apiServer: {
        host: "0.0.0.0",
        port: 8000,
    },

    gameServer: {
        host: "0.0.0.0",
        port: 8001,
        apiServerUrl: "http://127.0.0.1:8000",
    },

    apiKey: "Kongregate Sucks Filled With Bastards",

    modes: [
        { mapName: "main", teamMode: TeamMode.Solo, enabled: true },
        { mapName: "main", teamMode: TeamMode.Duo, enabled: true },
        { mapName: "main", teamMode: TeamMode.Squad, enabled: true },
    ], // getMapsOfTheDay(),

    regions: {},

    debug: {
        spawnMode: "default",
    },

    rateLimitsEnabled: isProduction,

    client: {
        AIP_ID: undefined,
        AIP_PLACEMENT_ID: undefined,
        theme: "main",
    },

    thisRegion: "local",

    gameTps: 100,
    netSyncTps: 33,

    processMode: isProduction ? "multi" : "single",

    perfLogging: {
        enabled: true,
        time: 10,
    },

    gameConfig: {},
} satisfies ConfigType as ConfigType;

const runningOnVite = process.argv.toString().includes("vite");

const configPath = path.join(
    __dirname,
    isProduction && !runningOnVite ? "../../" : "",
    "../../",
);

function loadConfig(fileName: string, create?: boolean) {
    const path = `${configPath}${fileName}`;

    let loaded = false;
    if (fs.existsSync(path)) {
        const localConfig = JSON.parse(fs.readFileSync(path).toString());
        util.mergeDeep(Config, localConfig);
        loaded = true;
    } else if (create) {
        console.log("Config file doesn't exist... creating");
        fs.writeFileSync(path, JSON.stringify({}, null, 2));
    }

    util.mergeDeep(GameConfig, Config.gameConfig);
    return loaded;
}

// try loading old config file first for backwards compatibility
if (!loadConfig("survivio-config.json")) {
    loadConfig("survivio-config.json", true);
}

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

interface ServerConfig {
    host: string;
    port: number;

    /**
     * HTTPS/SSL options. Not used if running locally or with nginx.
     */
    ssl?: {
        keyFile: string;
        certFile: string;
    };
}

export interface ConfigType {
    devServer: ServerConfig;

    apiServer: ServerConfig;
    gameServer: ServerConfig & {
        apiServerUrl: string;
    };
    /**
     * API key used for game server and API server to communicate
     */
    apiKey: string;

    regions: Record<
        string,
        {
            https: boolean;
            address: string;
            l10n: string;
        }
    >;

    thisRegion: string;

    modes: Array<{
        mapName: keyof typeof MapDefs;
        teamMode: TeamMode;
        enabled: boolean;
    }>;

    /**
     * Server tick rate
     */
    gameTps: number;
    netSyncTps: number;

    /**
     * If games should all run in the same process
     * Or spawn a new process for each game
     * Defaults to single in development and multi in production
     */
    processMode: "single" | "multi";

    /**
     * Server logging
     */
    perfLogging: {
        enabled: boolean;
        /**
         * Seconds between each game performance log
         */
        time: number;
    };

    rateLimitsEnabled: boolean;

    client: {
        // adin play IDs
        AIP_ID: string | undefined;
        AIP_PLACEMENT_ID: string | undefined;
        theme: "main" | "easter" | "halloween" | "faction" | "snow" | "spring";
    };

    debug: {
        spawnMode: "default" | "fixed";
        // spawn pos for fixed, defaults to map center if not set
        spawnPos?: Vec2;
    };

    /**
     * Game config overrides
     * @NOTE don't modify values used by client since this only applies to server
     */
    gameConfig: DeepPartial<typeof GameConfig>;
}
