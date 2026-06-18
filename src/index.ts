import { logger } from "@revenge-mod/api";
import * as devMode from "./plugins/devMode";
// Import new plugins here as you create them

const plugins = [
    devMode
    // Add new plugins to this list
];

export default {
    onLoad: () => {
        for (const plugin of plugins) {
            try {
                plugin.onLoad?.();
            } catch (e) {
                logger.error("Failed to load plugin:", e);
            }
        }
    },
    onUnload: () => {
        for (const plugin of plugins) {
            try {
                plugin.onUnload?.();
            } catch (e) {
                logger.error("Failed to unload plugin:", e);
            }
        }
    }
};
