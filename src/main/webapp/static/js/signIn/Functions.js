function gBId(idInHTML) {
    return document.getElementById(idInHTML);
}

function gBCN(classNameInHTML, number) {
    return document.getElementsByClassName(classNameInHTML).item(number);
}

function blurItOut(target) {
    target.style.filter = "blur(5px)";
}

function reBlur(target) {
    target.style.filter = "blur(0px)";
}

function moveRight(target) {
    target.style.marginLeft = "20%";
}

function moveLeft(target) {
    target.style.marginLeft = "0%";
}

function markAsSomething(target, state) {
    if (state) {
        target.style.backgroundColor = "rgba(207, 246, 246, 0.9)";
    } else {
        target.style.backgroundColor = "rgba(255, 227, 225, 0.9)";
    }
}

function rollOut(target) {
    target.style.width = "600px";
    target.style.opacity = "1.0";
}

function rollBack(target) {
    target.style.width = "300px";
    target.style.opacity = "0.0";
}

function markHintAsSomething(target, state) {
    if (state) {
        target.style.color = "rgba(207, 246, 246, 0.9)";
        target.style.listStyleType = "disc";
    } else {
        target.style.color = "rgba(255, 227, 225, 0.9)";
        target.style.listStyleType = "circle";
    }
}

function doSomethingWithSubmit() {
    let target = gBCN(submit, 0);
    if (countResults() === 0) {
        target.style.opacity = "1.0";
    } else {
        target.style.opacity = "0.0";
    }
}

function moveBackground(target, multiplier) {
    target.style.backgroundPosition = countResults() * multiplier + "%";
}

function countResults() {
    let counter = 0;
    for (let i = 0; i < inputsStates.length; i++) {
        if (!inputsStates[i]) {
            counter++;
        }
    }
    return counter;
}