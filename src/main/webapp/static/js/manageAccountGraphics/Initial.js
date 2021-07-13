let missingFileElementary = "../../../static/js/manageAccountGraphics/Elementary.js";
let missingFileLast = "../../../static/js/manageAccountGraphics/Last.js";

document.addEventListener("DOMContentLoaded", function () {
    xhrController.addToLine("searchForImag", 0, "imagIsInBase" + 0);
    xhrController.addToLine("searchForImag", 1, "imagIsInBase" + 1);
    xhrController.addToLine("initial");
});

function initial() {
    for (let i = 0; i < 2; i++) {
        if (xhrStorage.takeFromStorage("imagIsInBase" + i)) {
            informator.imagIsInBase(i);
        }
    }
        loadScriptFile(missingFileElementary);
        loadScriptFile(missingFileLast);
}

function loadScriptFile(url) {
        const head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);
}