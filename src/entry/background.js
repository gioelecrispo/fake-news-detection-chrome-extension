import {loadModel} from "@/deeplearning/loadModel";
import {execute} from "@/deeplearning/execute";
import {initializeContextMenus, openWelcomePage} from "@/utils/utils";


try {
    // Fired when:
    // - the extension is first installed
    // - the extension is updated to a new version
    // - the browser is updated to a new version.
    chrome.runtime.onInstalled.addListener((details) => {
        if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
            openWelcomePage(details);
        }

        //chrome.runtime.setUninstallURL("https://gioelecrispo.github.io/projects");
    });
    initializeContextMenus();
    // initializeMessageRelay();
    // initializeOmnibox();
} catch (e) {
    console.error(e);
}


/*const sendMessageToContent = (message) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab) {
            console.log('Send msg to content:', message);
            chrome.tabs.sendMessage(activeTab.id, message);
        } else {
            console.log('Unable to send msg, no active tab:', message);
        }
    });
};*/

const sendMessageToPopup = (id, message) => {
    console.log('Send msg to popup -> id:', id, 'message', message);
    chrome.runtime.sendMessage({id: id, message: message});
};


const load = async () => {
    sendMessageToPopup("MODEL.isLoading")
    const MODEL_FILEPATH = "/models/mobilebert-fakenews-model.onnx";
    const response = await fetch(MODEL_FILEPATH, {headers: {'Content-Type': 'application/octet-stream'}});
    const arrayBuffer = await response.arrayBuffer();
    const model = await loadModel(arrayBuffer);
    sendMessageToPopup("MODEL.isLoaded")
    return model;
}


const predict = async (model, msg) => {
    sendMessageToPopup("MODEL.isPredicting")
    let text = '<TITLE> ' + msg + " --- <BODY>:" + msg;
    const result = await execute(model, text);
    console.log("result", result)
    sendMessageToPopup("MODEL.hasPredicted")
    return true;
};


const model = await load();

chrome.runtime.onMessage.addListener((msg, sender, callback) => {
    console.log('Received msg:', msg);
    let text = "";
    if (msg.id === "POPUP.requestPrediction") {
        text = msg.text;
    }
    const prediction = predict(model, text, callback);
    sendMessageToPopup("MODEL.result", prediction)
    console.log('Prediction:', prediction);
});
