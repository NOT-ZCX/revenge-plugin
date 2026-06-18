import { patcher, webpack } from "@revenge-mod/api";

export const manifest = {
    name: "Custom Badges",
    description: "Adds a custom badge to your profile.",
    authors: [{ name: "YourName", id: "000000000000000000" }]
};

const BadgeModule = webpack.find(m => m.default?.displayName === "ProfileBadges");

export function onLoad() {
    patcher.after("default", BadgeModule, (args, res) => {
        // Implementation logic
        return res;
    });
}

export function onUnload() {
    patcher.unpatchAll("ProfileBadges");
}
