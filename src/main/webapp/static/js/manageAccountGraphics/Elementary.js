const background = document.body;
let form = new Form(forms, formElements);
let button = new Button(buttons, directories);

form.forNumber(function (i) {
    refresh(i);

    // verifies if new images are selected and marked as valid
    form.getSubSerialElement(i, 4).addEventListener("change", function () {
        informator.imagIsUploaded(i);
        informator.imagIsNotMarked(i);
        if (informator.isNewImagDisplayed(i)) {
            form.displayImag(i);
        }
        form.doSomethingWithMask(i);
        refresh(i);
    });

    // creates blurry background for OS files explorer
    form.getSubSerialElement(i, 1).addEventListener("click", function () {
        background.style.filter = "blur(5px)";
    });

    // handles deleting image animations and technical process
    form.getSubSerialElement(i, 2).addEventListener("click", function () {
        if (informator.isImagUploaded(i)) {
            informator.imagIsMarked(i);
            form.animateFromMemory(i);
        } else if (informator.isNewImagDisplayed(i) || informator.isSavedImagDisplayed(i)) {
            setTimeout(function () {
                if (window.confirm("Permanently delete this " + imagTypes[i] + " picture?")) {
                    form.animateFromBase(i);
                    xhrController.addToLine("deleteImag", i);
                }
            }, 200);
        }
        refresh(i);
    });
});

// reblures background after closing the OS files explorer
document.addEventListener("mouseover", function () {
    this.body.style.filter = "blur(0px)";
});

// handles animations for theme selector
gBId(styleSelector).addEventListener("mouseover", animateSelector);
gBId(styleSelector).addEventListener("mouseout", deAnimateSelector);

// handles redirection and images saving for redirecting buttons
button.forAll("addListener", "click", function (evt) {
    veryComplicatedExitFunction(evt);
});

// utility function refreshing information about images states
function refresh(i) {
    form.deleteOrReject(i);
    showPreviewButton();
    if (informator.isNoImag(i)) {
        form.showOneButton(i);
    } else {
        form.showTwoButtons(i);
    }
}