import {menuList, configList} from "./sidebar.handlebars";
const globalData = {
    menuList,
    configList
}
export function json (context) {
    return JSON.stringify(context);
}

export function global(key) {
    return globalData[key];
}