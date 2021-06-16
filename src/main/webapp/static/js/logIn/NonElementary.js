function testInput (input, regex) {
    return regex.test(input);
}

function submitFunction(event) {
    if (countResults() === 0) {
        sendForm()
    } else {
        event.preventDefault();
    }
}

function sendForm() {
    const xHR = new XMLHttpRequest();
    let formData = new FormData(gBId(form));

    xHR.open("POST", "logIn", true);
    xHR.send(formData);
    return xHR.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            return true;
        }
    }
}