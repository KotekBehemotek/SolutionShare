document.addEventListener("DOMContentLoaded", function () {

    let universalOb = {
        inputsInHTML: ["logInPageInputEmail", "logInPageInputPassword1"],
        lengthOk: [false, false],
        submit: document.getElementsByClassName("logInPageFormSubmit").item(0),
    };

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    for (let i = 0; i < universalOb.inputsInHTML.length; i++) {
        let target = getById(universalOb.inputsInHTML[i]);

        target.addEventListener("input", function () {
                universalOb.lengthOk[i] = target.value.length < 30 && target.value.length > 5;

            if (universalOb.lengthOk[0] && universalOb.lengthOk[1]) {
                universalOb.submit.style.opacity = "1.0";
                universalOb.submit.type = "submit";
            } else {
                universalOb.submit.style.opacity = "0.0";
                universalOb.submit.type = "";
            }
        });
    }
});