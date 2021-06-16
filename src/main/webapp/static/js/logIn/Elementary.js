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
            hintLabel.markHintAsSomething1(i, testInput(target.value, regexEmail));
            input.markAsSomething(i, inputsStates[i]);
        } else {
            hintLabel.markHintAsSomething1(i, testInput(target.value, regexDigit) && !testInput(target.value, regexWhite) && target.value.length > 5 && target.value.length < 31);
            input.markAsSomething(i, inputsStates[i]);
        }
    }

    for (let i = 0; i < 2; i++) {
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
            moveBackground(background, 50);
            doSomethingWithSubmit();
        });
        input.getElement(i).addEventListener("keydown", function (event) {
            if (event.code === "Backspace") {
                inputFunction(i);
                moveBackground(background, 50);
                doSomethingWithSubmit();
            }
        });
        input.getElement(i).addEventListener("cut", function () {
            inputFunction(i);
            moveBackground(background, 50);
            doSomethingWithSubmit();
        })
    }
});