/* Left Menus List */

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

// Application Urls
import URL from "./applicationUrls";

const menus = [
    {
        name: LOCALIZATION.HOME,
        icon: "cicon-home",
        url: URL.DASHBOARD
    },
    // {
    //     name: LOCALIZATION.REPORTS,
    //     icon: "cicon-progress",
    //     url: URL.REPORTS
    // },
    // {
    //     name: LOCALIZATION.CONFIGURATIONS,
    //     icon: "cicon-gear",
    //     url: URL.CONFIGURATIONS
    // },
    // {
    //     name: LOCALIZATION.USER_MANAGEMENT,
    //     icon: "cicon-user",
    //     url: URL.USER_MANAGEMENT
    // },
    {
        name: LOCALIZATION.LOGOUT,
        icon: "cicon-exit",
        isLogout: true
    }
];

export default menus;