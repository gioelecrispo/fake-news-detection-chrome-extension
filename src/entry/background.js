/* eslint-disable */
import {initializeContextMenus, openNewTabPage} from "@/utils/extensionUtils";
import BertClassifier from "@/deeplearning/bertClassifier";


try {
    // Fired when: the extension is first installed, updated to a new version or browser is updated to a new version.
    chrome.runtime.onInstalled.addListener(async (details) => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            openNewTabPage("tutorial.html");
        }
        await chrome.storage.sync.set({"OPTIONS.isAutomaticPageDetectionEnabled": true});
        chrome.runtime.setUninstallURL("https://gioelecrispo.github.io/fake-news-detection-chrome-extension/feedback");
    });
    initializeContextMenus();

} catch (e) {
    console.error(e);
}


let model = undefined;


chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(async function(msg) {
        if (msg.id === "MODEL.requestPrediction") {
            const text = msg.text;
            if (model === undefined) {
                model = new BertClassifier("/models/mobilebert-fakenews-model.onnx",
                    "/models/vocab.json", 512, async () => { });
                port.postMessage({id: "MODEL.isLoading"})
                await model.loadModel(async () => {});
                port.postMessage({id: "MODEL.isLoaded"});
            }
            port.postMessage({id: "MODEL.isPredicting"});
            console.log("model prediction?", model);
            const prediction = await model.predict(text,
                async (text) => {}, async (prediction) => {});
            port.postMessage({id: "MODEL.hasPredicted"});
            port.postMessage({id: "MODEL.result", payload: prediction});
        }
    });
});
