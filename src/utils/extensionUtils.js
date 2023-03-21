export function sendMessageToPopup(id, message) {
    chrome.runtime.sendMessage({id: id, message: message});
}

export function  sendMessageToContent(id, message) {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
            console.log('Send msg to content:', message);
            chrome.tabs.sendMessage(activeTab.id, {id: id, message: message});
        } else {
            console.log('Unable to send msg to CONTENT, no active tab:', message);
        }
    });
}


export function openNewTabPage(htmlPage) {
    // Acquire the welcome page URL
    let url = chrome.runtime.getURL(htmlPage);
    // Open the welcome page in a new tab .
    chrome.tabs.create({ url });
}

export async function initializeContextMenus() {
    if (!chrome.contextMenus) {
        console.log("Context menus not supported");
        return;
    }
    await chrome.contextMenus.removeAll();

    chrome.contextMenus.create({
        id: "page",
        title: "Check if this page is a fake news",
        contexts: ["page", "frame"],
    });

    /*chrome.contextMenus.create({
        id: "text-selection",
        title: "Check if this text is a fake news",
        contexts: ["selection"],
    });*/

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        chrome.tabs.sendMessage(tab.id, {
            id: "CONTEXT_MENU_CLICK",
            info,
            tab,
        });
    });
}
