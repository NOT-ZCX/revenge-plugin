import { logger } from "@revenge-mod/api";

export default {
    onLoad: () => {
        logger.log("My Plugin has loaded!");
        // Add your patches or logic here
    },
    onUnload: () => {
        logger.log("My Plugin has been unloaded!");
        // Remove patches or cleanup here
    }
};
