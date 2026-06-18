const { logger } = window.revenge.api;
const { find } = window.revenge.api.common.webpack;

export const onLoad = () => {
    const settings = find(m => m?.default?.developerMode !== undefined || m?.developerMode !== undefined);
    if (settings) {
        settings.developerMode = true;
        logger.log("Developer Mode Enabled.");
    }
};

export const onUnload = () => {
    logger.log("DevMode Unloaded.");
};
