document.addEventListener("DOMContentLoaded", function () {

    let universalOb = {
        inputsInHTML: ["signInPageInputNickname", "signInPageInputEmail", "signInPageInputPassword1", "signInPageInputPassword2"],
        backgroundsState: [false, false, false, false],
        hintsInHTML: [["nicknameAssistLengthEr", "nicknameAssistWhite"], "emailAssistLikeEmail", ["password1AssistLengthEr", "password1AssistDigit", "password1AssistWhite"], "password2AssistIsSame"],
        hintsState: [[false, false], false, [false, false, false], false],
        regex: [/.*\s+.*/, /.*[0-9]+.*/, /[a-z0-9\.\_\-]{3,}@[a-z0-9\-]{2,}\.[a-z]{2,4}/],
        focusState: [false, false, false, false],
        submit: document.getElementsByClassName("signInPageFormSubmit").item(0),
    };

    const background = document.body;

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    function getByClassName(classNameInHTML, number) {
        return document.getElementsByClassName(classNameInHTML).item(number);
    }

    function revealBackground(i, width) {
        getByClassName("underButton", i).style.width = width + "px";
    }

    function changeHint(hint, colour, style) {
        hint.style.color = colour;
        hint.style.listStyleType = style;
    }

    function changeBackground(bacc, toAdd, toRemove) {
        bacc.classList.add(toAdd);
        bacc.classList.remove(toRemove);
    }

    function executeCSS(i, target, hint1, hint2, hint3) {
        if (i === 0) {
            let hnt1 = getById(universalOb.hintsInHTML[0] [0]);
            let hnt2 = getById(universalOb.hintsInHTML[0] [1]);
            if (hint1) {
                changeHint(hnt1, "#cff6f6", "disc");
            } else {
                changeHint(hnt1, "#ffe3e1", "circle");
            }
            if (hint2) {
                changeHint(hnt2, "#cff6f6", "disc");
            } else {
                changeHint(hnt2, "#ffe3e1", "circle");
            }
        } else if (i === 1) {
            if (hint1) {
                changeHint(getById(universalOb.hintsInHTML[1]), "#cff6f6", "disc");
            } else {
                changeHint(getById(universalOb.hintsInHTML[1]), "#ffe3e1", "circle");
            }
        } else if (i === 2) {
            let hnt1 = getById(universalOb.hintsInHTML[2] [0]);
            let hnt2 = getById(universalOb.hintsInHTML[2] [1]);
            let hnt3 = getById(universalOb.hintsInHTML[2] [2]);
            if (hint1) {
                changeHint(hnt1, "#cff6f6", "disc");
            } else {
                changeHint(hnt1, "#ffe3e1", "circle");
            }
            if (hint2) {
                changeHint(hnt2, "#cff6f6", "disc");
            } else {
                changeHint(hnt2, "#ffe3e1", "circle");
            }
            if (hint3) {
                changeHint(hnt3, "#cff6f6", "disc");
            } else {
                changeHint(hnt3, "#ffe3e1", "circle");
            }
            if (target.value !== getById("signInPageInputPassword2").value) {
                getById("signInPageInputPassword2").value = "";
                universalOb.backgroundsState[3] = false;
            }
        } else {
            if (hint1) {
                changeHint(getById(universalOb.hintsInHTML[3]), "#cff6f6", "disc");
            } else {
                changeHint(getById(universalOb.hintsInHTML[3]), "#ffe3e1", "circle");
            }
        }

        if (target.value.length > 0) {
            revealBackground(i, 600);
        } else {
            revealBackground(i, 300);
        }

        if (hint1 && hint2 && hint3 || target.value.length === 0) {
            changeBackground(getById(universalOb.inputsInHTML[i]), "solutionInputOk", "solutionInputEr");
        } else if (!hint1 || !hint2 || !hint3) {
            changeBackground(getById(universalOb.inputsInHTML[i]), "solutionInputEr", "solutionInputOk");
        }
    }

    for (let i = 0; i < universalOb.inputsInHTML.length; i++) {
        let target = getById(universalOb.inputsInHTML[i]);

        target.addEventListener("input", function () {
            if (i === 0) {
                universalOb.hintsState[i] [0] = target.value.length < 31 && target.value.length > 2;
                universalOb.hintsState[i] [1] = !universalOb.regex[0].test(target.value);
                universalOb.backgroundsState[i] = universalOb.hintsState[i] [0] && universalOb.hintsState[i] [1];

                executeCSS(i, target, universalOb.hintsState[i] [0], universalOb.hintsState[i] [1], true);
            } else if (i === 1) {
                universalOb.hintsState[i] = universalOb.regex[2].test(target.value);
                universalOb.backgroundsState[i] = universalOb.hintsState[i];

                executeCSS(i, target, universalOb.hintsState[i], true, true);
            } else if (i === 2) {
                universalOb.hintsState[i] [0] = target.value.length < 31 && target.value.length > 5;
                universalOb.hintsState[i] [1] = universalOb.regex[1].test(target.value);
                universalOb.hintsState[i] [2] = !universalOb.regex[0].test(target.value);
                universalOb.backgroundsState[i] = universalOb.hintsState[i] [0] && universalOb.hintsState[i] [1] && universalOb.hintsState[i] [2];

                executeCSS(i, target, universalOb.hintsState[i] [0], universalOb.hintsState[i] [1], universalOb.hintsState[i] [2]);
            } else {
                universalOb.hintsState[i] = target.value === getById("signInPageInputPassword1").value;
                universalOb.backgroundsState[i] = universalOb.hintsState[i];

                executeCSS(i, target, universalOb.hintsState[i], true, true);
            }

            target.addEventListener("focus", function () {
                universalOb.focusState[i] = true;

                revealBackground(i, 600);
            });

            target.addEventListener("blur", function () {
                universalOb.focusState[i] = false;

                revealBackground(i, 300);
            });

            let counter = 0;
            for (let i = 0; i < universalOb.backgroundsState.length; i++) {
                if (!universalOb.backgroundsState[i]) {
                    counter++;
                }
            }
                background.style.backgroundPosition = counter * 25 + "%";
            if (counter === 0) {
                universalOb.submit.style.opacity = "1.0";
                universalOb.submit.type = "submit";
            } else {
                universalOb.submit.style.opacity = "0.0";
                universalOb.submit.type = "";
            }
        });
    }
});