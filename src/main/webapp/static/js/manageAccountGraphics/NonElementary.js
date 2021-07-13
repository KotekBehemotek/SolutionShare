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
}

// database image search tool
async function searchForImag(target) {
    return (await (openConnection("GET", "pictureProvide?pictureType=" + imagTypes[target] + "ask", false, false, false, false, true)));
}

// images upload tool
async function sendForm(i) {
    let toSend = new FormData(gBId(forms[i]));
    return (await (openConnection("POST", "savePictureServlet", true, imagTypes[i], true, toSend, false)));
}

// images deletion tool
async function deleteImag(target) {
    await (openConnection("POST", "antiIG", true, imagTypes[target], false, false, false));
}