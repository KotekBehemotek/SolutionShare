document.addEventListener("DOMContentLoaded", function () {

    let universalOb = {
        inputsInHTML: [["textInputCredo"], ["textInputInterest1", "textInputInterest2", "textInputInterest3"], ["textInputName1", "textInputName2", "textInputSurname"], ["textInputYear", "textInputCity", "textInputCountry"], ["textInputPhone", "textInputEmail"]],
        inputsStates: [[false], [false, false, false], [false, false, false], [false, false, false], [false, false]],
        formsInHTML: ["formCredo", "formInterests", "formNames", "formGeneral", "formContact"],
        formsStates: [false, false, false, false, false],
        buttonsInHTML: ["buttonOnBlueProfile", "buttonOnBlueStart", "buttonOnBlueEditPictures", "buttonOnBlueEditLinks", "buttonOnPinkBack"],
        links: ["profile", "start", "manageAccountGraphics", "", "start"],
        submitsInHTML: "submitInput",
    };

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    const submitFunction = function (event) {
        event.preventDefault();
    };

    function redirect(button) {
        location.href = universalOb.links[button];
    }

    function sendIt(i) {
        const xHR = new XMLHttpRequest();
        let formData = new FormData(getById(universalOb.formsInHTML[i]));

        xHR.open("POST", "saveInf", true);
        xHR.setRequestHeader("form", universalOb.formsInHTML[i]);
        xHR.send(formData);
        return xHR.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                return true;
            }
        }
    }

    function sendForm(button) {
        let sent;
        for (let i = 0; i < universalOb.formsStates.length; i++) {
            sent = false;
            if (universalOb.formsStates[i]) {
                sent = sendIt(i);
            }
            if (i === 3 && sent || i === 3 && !universalOb.formsStates[i]) {
                redirect(button);
            }
        }
    }

    let a;
    let b;
    for (let i = 0; i < universalOb.inputsInHTML.length; i++) {
        getById(universalOb.formsInHTML[i]).addEventListener("submit", submitFunction, true);

        if (i > 0 && i < 4) {
            a = 3;
        } else if (i === 5) {
            a = 2;
        } else {
            a = 1;
        }

        for (let j = 0; j < a; j++) {
            if (i === 0) {
                b = 101;
            } else if (i === 4 && j === 0) {
                b = 16;
            } else if (i === 4 && j === 1) {
                b = 256;
            } else if (i === 3 && j === 0) {
                b = 5;
            } else if (i === 3 && j === 1) {
                b = 51;
            } else {
                b = 31;
            }

            getById(universalOb.inputsInHTML[i][j]).addEventListener("input", function () {
                if (this.value.length < b) {
                    universalOb.inputsStates[i][j] = true;
                    universalOb.formsStates[i] = true;
                }
            });
            getById(universalOb.buttonsInHTML[i]).addEventListener("click", function () {
                sendForm(i);
            });
        }
    }
});