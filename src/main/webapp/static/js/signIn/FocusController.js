document.addEventListener("DOMContentLoaded", function () {

    let universalOb = {
        inputsInHTML: ["signInPageInputNickname", "signInPageInputEmail", "signInPageInputPassword1", "signInPageInputPassword2"],
        focusState: [false, false, false, false],
        globalFocus: false,
    };

    var questionTextAreaJS = document.getElementById("cell26U");
    var helloTextAreaJS = document.getElementById("cell23A");
    var buttonsAreaJS = document.getElementById("cell102U");
    var formAreaJS = document.getElementById("cell1U");
    var underButtonJS = document.getElementsByClassName("cell1").item(1);

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    function blurItOut(px) {
        helloTextAreaJS.style.filter = "blur(" + px + "px)";
        buttonsAreaJS.style.filter = "blur(" + px + "px)";
    }

    function comeCloser(px) {
        formAreaJS.style.marginLeft = px + "%";
        underButtonJS.style.marginLeft = px + "%";
    }

    function blurController() {
        let counter = 0;

        for (let i = 0; i < universalOb.focusState.length; i++) {
            if (universalOb.focusState[i]) {
                counter++;
            }
        }

        universalOb.globalFocus = counter > 0;

        if (universalOb.globalFocus) {
            blurItOut(10);
        } else {
            blurItOut(0);
        }

    }

    for (let i = 0; i < universalOb.inputsInHTML.length; i++) {
        let target = getById(universalOb.inputsInHTML[i]);

        universalOb.focusState[i] = target.onfocus;

        blurController();

        target.addEventListener("focus", function () {
            universalOb.focusState[i] = true;
            blurController();
        });
        target.addEventListener("blur", function () {
            universalOb.focusState[i] = false;
            setTimeout(blurController, 50);
        });
    }

    questionTextAreaJS.addEventListener("mouseover", function () {
        if (!universalOb.globalFocus) {
                blurItOut(10);
                comeCloser(20);
        }
    });

    questionTextAreaJS.addEventListener("mouseout", function () {
        if (!universalOb.globalFocus) {
                blurItOut(0);
                comeCloser(0);
        }
    });
});