export function openWelcomePage() {
    // Acquire the welcome page URL
    let url = chrome.runtime.getURL("popup.html");

    // Open the welcome page in a new tab .
    chrome.tabs.create({ url });
}

export async function initializeContextMenus() {
    if (!chrome.contextMenus) {
        console.log("Context menus not supported");
        return;
    }
    await chrome.contextMenus.removeAll();
    //const QUICK_OPEN_PREFIX = "quickopen__";

    chrome.contextMenus.create({
        id: "page",
        title: "Check if this page is a fake news",
        contexts: ["page", "frame"],
    });

    chrome.contextMenus.create({
        id: "text-selection",
        title: "Check if this text is a fake news",
        contexts: ["selection"],
    });

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        chrome.runtime.sendMessage({
            id: "CONTEXT_MENU_CLICK",
            info,
            tab,
        });

        /*if (info.menuItemId.startsWith(QUICK_OPEN_PREFIX)) {
            chrome.tabs.create({
                url: getPageUrl(info.menuItemId.replace(QUICK_OPEN_PREFIX, "")),
            });
        }*/
    });
}
