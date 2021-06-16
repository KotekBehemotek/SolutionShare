// universal request handler
async function openConnection(method, destination, isHeader, header, isSend, toSend, confirm) {
    let xHR = xhrController.xHR;

    xHR.open(method, destination, true);
    if (isHeader) {
        xHR.setRequestHeader("pictureType", header);
    }
    if (isSend) {
        xHR.send(toSend);
    } else {
        xHR.send();
    }
    return new Promise(resolve => xHR.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (confirm) {
                resolve(this.responseText.localeCompare("true") === 0);
            } else {
                resolve(true);
            }
        }
    });

    // return await xHR.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         if (confirm) {
    //             console.log("response: " + this.responseText);
    //             console.log(this.responseText.localeCompare("true"));
    //             return (this.responseText.localeCompare("true") === 0);
    //         } else {
    //             return true;
    //         }
    //     }
    // }
}

// database image search tool
async function searchForImag(target) {
    // console.log(await openConnection("GET", "pictureProvide?pictureType=" + imagTypes[target] + "ask", false, false, false, false, true));
    return await openConnection("GET", "pictureProvide?pictureType=" + imagTypes[target] + "ask", false, false, false, false, true);
}

// images upload tool
async function sendForm(i) {
    let toSend = new FormData(gBId(forms[i]));
    return await openConnection("POST", "savePictureServlet", true, imagTypes[i], true, toSend, false);
}

// images deletion tool
async function deleteImag(target) {
    await openConnection("POST", "antiIG", true, imagTypes[target], false, false, false);
}

// universal handler for all operations assigned to redirecting buttons
function veryComplicatedExitFunction(evt) {
    if (informator.isNewImagDisplayed(0)) {
        if (xhrController.addToLine("sendForm", 0)) {
            console.log("first sent or omitted");
            if (informator.isNewImagDisplayed(1)) {
                xhrController.addToLine("sendForm", 1);
                console.log("second sent or omitted");
            }
        }
    } else {
        if (informator.isNewImagDisplayed(1)) {
            xhrController.addToLine("sendForm", 1);
            console.log("second sent or omitted");

        }
    }
    for (let i = 0; i < buttons.length; i++) {
        if (evt.target.id === buttons[i]) {
            console.log(evt.target.id);
            console.log(buttons[i]);
            return i;
        }
    }
}