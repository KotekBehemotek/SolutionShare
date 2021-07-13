// gives easy access to elements accessed by ID
function gBId(idInHTML) {
    return document.getElementById(idInHTML);
}

// gives easy access to elements accessed by name 
function gBCN(classNameInHTML, number) {
    return document.getElementsByClassName(classNameInHTML).item(number);
}

// handles animations when image is being deleted from the database
function animateFromBase(target, target2) {
    setTimeout(function () {
        target.style.backgroundColor = "rgba(207, 246, 246, 0.7)";
    }, 200);
    setTimeout(function () {
        target2.style.backgroundImage = "";
    }, 200);
}

// handles animations when image is being deleted from selection
function animateFromMemory(target) {
    target.style.opacity = "0.0";
    setTimeout(function () {
        target.style.backgroundImage = '';
    }, 200);
    setTimeout(function () {
        target.style.opacity = '1.0';
    }, 400);
}

// gives access to two image buttons (reselect and delete)
function showTwoButtons(target1, target2) {
    target1.style.borderRadius = "10px 10px 0 0";
    target1.style.height = "50%";
    target2.style.display = "inherit";
}

// gives access to one image button (select)
function showOneButton(target1, target2) {
    target1.style.borderRadius = "10px 10px 10px 10px";
    target1.style.height = "100%";
    target2.style.display = "none";
}

// makes image visible
function displayImag(target1, target2, source) {
    let imagURL = URL.createObjectURL(source.files[0]);

    target1.style.backgroundImage = 'url(' + imagURL + ')';
    // target2.style.backgroundImage = 'url(' + imagURL + ')';
}

// covers or uncovers image (for deselecting purpose)
function doSomethingWithMask(target, imagDeleted) {
    if (imagDeleted) {
        // target.style.opacity = "0.0";
    } else {
        // target.style.opacity = "1.0";
    }
}

// animates theme selector
function animateSelector() {
    let target = gBId(styleSelector);
    if (!selectorCounter) {
        target.style.backgroundPosition = "0";
        selectorCounter = true;
    } else if (selectorCounter) {
        target.style.backgroundPosition = "right";
        selectorCounter = false;
    }
}

// "neutral" part of theme selector animation
function deAnimateSelector() {
    gBId(styleSelector).style.backgroundPosition = "center";
}

// shows "preview pictures" button or hides it
function showPreviewButton() {
    let target = gBId(preview);

    if (informator.isNewImagDisplayed(0) || informator.isNewImagDisplayed(1)) {
        target.style.opacity = "1.0";
        target.addEventListener("click", showPreview)
    } else {
        target.style.opacity = "0.0";
        target.removeEventListener("click", showPreview);
    }
}

// shows screen of picture preview
function showPreview() {
    for (let i = 0; i < 3; i++) {
        gBCN(gridElements[i], 0).style.filter = "blur(10px)";
        gBCN(gridElements[i], 0).style.opacity = "0.7";
    }
    setTimeout(function () {
        let gridU1 = gBCN("gridU1", 0);

        gridU1.style.display = "grid";
        gridU1.style.opacity = "1.0";
        gridU1.addEventListener("click", function () {
            this.style.display = "none";
            this.style.opacity = "0.0";
            for (let i = 0; i < 3; i++) {
                gBCN(gridElements[i], 0).style.filter = "blur(0px)";
                gBCN(gridElements[i], 0).style.opacity = "1.0";
            }
        });
    }, 200);
}

// changes text values on images buttons
function deleteOrReject(i, target, target2) {
    if (informator.isSavedImagDisplayed(i)) {
        target.innerHTML = "Update picture";
        target2.innerHTML = "Delete picture";
    } else if (informator.isNoImag(i)) {
        target.innerHTML = "Select picture";
    } else if (informator.isNewImagDisplayed(i)) {
        target.innerHTML = "Select another picture";
        target2.innerHTML = "Reject change";
    }
}

// adds event listener to selected element
function addListener(target, type, func) {
    target.addEventListener(type, func);
}