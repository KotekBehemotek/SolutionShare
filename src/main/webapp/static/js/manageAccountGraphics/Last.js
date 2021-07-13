// universal handler for all operations assigned to redirecting buttons
function veryComplicatedExitFunction(evt) {
    let index = 0;
    for (let i = 0; i < buttons.length; i++) {
        if (evt.target.id === buttons[i]) {
            console.log(evt.target.id);
            console.log(buttons[i]);
            index = i;
        }
    }
    if (decideToSendForm(0)) {
        if (decideToSendForm(1)) {
            xhrController.addToLine("last", index);
        } else {
            xhrController.addToLine("last", index);
        }
    } else {
        if (decideToSendForm(1)) {
            xhrController.addToLine("last", index);
        } else {
            xhrController.addToLine("last", index);
        }
    }
}

function decideToSendForm(index) {
    if (informator.isNewImagDisplayed(index)) {
        xhrController.addToLine("sendForm", index);
        return true;
    } else {
        return false;
    }
}

function last(index) {
    location.href = directories[index];
}