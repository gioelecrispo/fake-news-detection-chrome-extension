/* eslint-disable */
import {initializeContextMenus, openNewTabPage, sendMessageToPopupAndContent} from "@/utils/utils";
import {BertClassifier} from "@/deeplearning/bertClassifier";


await chrome.storage.local.set({ "MODEL.isLoaded": false });
let model = new BertClassifier("/models/mobilebert-fakenews-model.onnx",
    "/models/vocab.json",512, async () => {
        sendMessageToPopupAndContent("MODEL.isLoading");
});
try {
    // Fired when: the extension is first installed, updated to a new version or browser is updated to a new version.
    chrome.runtime.onInstalled.addListener((details) => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            openNewTabPage("tutorial.html");
        }
        chrome.runtime.setUninstallURL("https://gioelecrispo.github.io/fake-news-detection-chrome-extension/feedback");
    });
    initializeContextMenus();
    await model.loadModel(async () => {
        sendMessageToPopupAndContent("MODEL.isLoaded");
        await chrome.storage.local.set({ "MODEL.isLoading": false });
        await chrome.storage.local.set({ "MODEL.isLoaded": false });
    });
} catch (e) {
    console.error(e);
}


chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    console.log('Received msg:', msg);
    if (model === undefined || model === null) {
        console.log("RELOADINGG");
        model = new BertClassifier("/models/mobilebert-fakenews-model.onnx",
            "/models/vocab.json",512, async () => {
                sendMessageToPopupAndContent("MODEL.isLoading");
                await chrome.storage.local.set({ "MODEL.isLoading": true });
            });
        await model.loadModel(async () => {
            sendMessageToPopupAndContent("MODEL.isLoaded");
            await chrome.storage.local.set({ "MODEL.isLoading": false });
            await chrome.storage.local.set({ "MODEL.isLoaded": false });
        });
    }

    if (msg.id === "MODEL.requestPrediction") {
        const text = msg.text;
        const prediction = await model.predict(text,
            async (text) => {
            sendMessageToPopupAndContent("MODEL.isPredicting");
            await chrome.storage.local.set({ "MODEL.isPredicting": true });
        }, async (prediction) => {
            sendMessageToPopupAndContent("MODEL.hasPredicted");
            await chrome.storage.local.set({ "MODEL.isPredicting": false });
            await chrome.storage.local.set({ "MODEL.hasPredicted": true });
            sendMessageToPopupAndContent("MODEL.result", prediction);
        });
        /*const prediction = await predict(model, text);
        console.log('Prediction:', prediction);
        sendMessageToPopupAndContent("MODEL.result", prediction);
    } else if (msg.id === "CONTENT.askForLanguage") {
        const lang = await chrome.tabs.detectLanguage();
        console.log('Language:', lang);
        sendResponse({result: lang})*/
    }
});

