module.exports = function(elem) {
    window["foo"] = window["foo"] || {};
    window["foo"].loadStyles = function(el) {
        el.appendChild(elem);
    }
}
