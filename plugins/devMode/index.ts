import { logger } from "@revenge-mod/api";
import { find } from "@revenge-mod/api/common/webpack";

export function onLoad() {
    const settings = find(m => m?.default?.developerMode !== undefined || m?.developerMode !== undefined);
    if (settings) {
        settings.developerMode = true;
        logger.log("Developer Mode Enabled.");
    }
}

export function onUnload() {
    logger.log("DevMode Unloaded.");
}
