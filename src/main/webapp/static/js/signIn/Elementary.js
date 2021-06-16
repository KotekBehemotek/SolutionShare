document.addEventListener("DOMContentLoaded", function () {

    const background = document.body;
    let formArea = new LeftSideElement("cell1U");
    let hintsArea = new LeftSideElement("cell1");
    let input = new Input(htmlInputs);
    let hintLabel = new HintLabel(htmlLabels, htmlHints);

    gBId(questionArea).addEventListener("mouseover", function () {
        if (!globalFocus) {
            formArea.moveRight();
            hintsArea.moveRight();
            blurItOut(gBId(helloArea));
            blurItOut(gBId(buttonsArea));
        }
    });

    gBId(questionArea).addEventListener("mouseout", function () {
        if (!globalFocus) {
            formArea.moveLeft();
            hintsArea.moveLeft();
            reBlur(gBId(helloArea));
            reBlur(gBId(buttonsArea));
        }
    });

    gBId(form).addEventListener("submit", submitFunction);

    function inputFunction(i) {
        let target = input.getElement(i);
        if (i === 0) {
            hintLabel.markHintAsSomething(i, 0, target.value.length > 2 && target.value.length < 31);
            hintLabel.markHintAsSomething(i, 1, !testInput(target.value, regexWhite));
            input.markAsSomething(i, hintsStates[i][0] && hintsStates[i][1]);
        } else if (i === 1) {
            hintLabel.markHintAsSomething(i, 0, testInput(target.value, regexEmail));
            input.markAsSomething(i, hintsStates[i][0]);
        } else if (i === 2) {
            hintLabel.markHintAsSomething(i, 0, target.value.length > 5 && target.value.length < 31);
            hintLabel.markHintAsSomething(i, 1, testInput(target.value, regexDigit));
            hintLabel.markHintAsSomething(i, 2, !testInput(target.value, regexWhite));
            input.markAsSomething(i, hintsStates[i][0] && hintsStates[i][1] && hintsStates[i][2]);
            input.getElement(3).value = "";
        } else {
            hintLabel.markHintAsSomething(i, 0, target.value === input.getElement(2).value);
            input.markAsSomething(i, hintsStates[i][0]);
        }
    }

    for (let i = 0; i < 4; i++) {
        input.getElement(i).addEventListener("focus", function () {
            globalFocus = true;
            blurItOut(gBId(helloArea));
            blurItOut(gBId(buttonsArea));
            hintLabel.rollOut(i);
        });

        input.getElement(i).addEventListener("blur", function () {
            globalFocus = false;
            hintLabel.rollBack(i);
            setTimeout(function () {
                if (input.getElement(i).value.length === 0) {
                    markAsSomething(input.getElement(i), true);
                }
                if (!globalFocus) {
                    reBlur(gBId(helloArea));
                    reBlur(gBId(buttonsArea));
                }
            }, 100);
        });

        input.getElement(i).addEventListener("input", function () {
            inputFunction(i);
            moveBackground(background, 25);
            doSomethingWithSubmit();
        });
        input.getElement(i).addEventListener("keydown", function (event) {
            if (event.code === "Backspace") {
                inputFunction(i);
                moveBackground(background, 25);
                doSomethingWithSubmit();
            }
        });
        input.getElement(i).addEventListener("cut", function () {
            inputFunction(i);
            moveBackground(background, 25);
            doSomethingWithSubmit();
        })
    }
});