import { patcher, webpack } from "@revenge-mod/api";

// This is a simplified selector for the Profile Badge component
// Note: In real-world development, you may need to use Discord's DevTools to 
// find the exact module name/property that renders the badge array.
const BadgeModule = webpack.find(m => m.default?.displayName === "ProfileBadges");

export function onLoad() {
    patcher.after("ProfileBadges", BadgeModule, "default", (args, res) => {
        // Ensure this only affects your account (check by your user ID)
        const userId = "YOUR_USER_ID_HERE"; 
        const props = args[0];

        if (props.user.id === userId) {
            // Push your custom badge object into the array
            res.props.children.push({
                id: "custom-badge",
                icon: "https://example.com/your-badge-icon.png", // URL to your image
                description: "My Custom Badge"
            });
        }
        return res;
    });
}

export function onUnload() {
    patcher.unpatchAll("ProfileBadges");
}
