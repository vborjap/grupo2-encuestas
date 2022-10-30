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

export function link(prefix, ...dynamic) {
    dynamic.pop();
    let posfix = dynamic.join("/");
    return `${prefix}/${posfix}`;
}