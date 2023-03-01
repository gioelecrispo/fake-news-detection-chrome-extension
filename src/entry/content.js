/*chrome.runtime.onMessage.addListener((msg, sender, callback) => {
    console.log('Received msg in CONTENT!!!:', msg, sender, callback);
    let text = "";
    if (msg.id === "CONTEXT_MENU_CLICK") {
        text = msg.info.selectionText;
    }
    chrome.runtime.sendMessage({id: "POPUP.requestPrediction", text: text});
})*/

// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('mouseup', function (e) {
    console.log("AAAAAAAAAAAAA")
    console.log(e)
    var selection = window.getSelection().toString();

    if (selection.length > 0) {
        renderBubble(e.pageX, e.pageY-40, selection);
    }
}, false);


// Close the bubble when we click on the screen.
// eslint-disable-next-line no-unused-vars
document.addEventListener('mousedown', function (e) {
    bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
// eslint-disable-next-line no-unused-vars
function renderBubble(mouseX, mouseY, selection) {
    bubbleDOM.innerHTML = selection; // "Check if it is a fake news";
    bubbleDOM.style.top = mouseY + 'px';
    bubbleDOM.style.left = mouseX + 'px';
    bubbleDOM.style.visibility = 'visible';
}
