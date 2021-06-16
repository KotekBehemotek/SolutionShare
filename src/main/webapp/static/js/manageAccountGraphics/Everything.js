document.addEventListener("DOMContentLoaded", function () {

    let ob = {
        grids: ["gridU", "gridU1"],
        formElements: [["form", "inFormGridPicture", "cell1SpecialSpecialSpecial1", "cell2SpecialSpecialSpecial1", "formLabelPicture", "inputPicture", "textOnPicturePictureDelete", "textOnPicturePictureSubmit"], ["form2", "inFormGridBackground", "cell1SpecialSpecialSpecial", "cell2SpecialSpecialSpecial", "formLabelBackgroundSubmit", "inputBackground", "textOnPictureBackgroundDelete", "textOnPictureBackgroundSubmit"]],
        gridCells: ["cell1", "cell2", "cell3"],
        picturesState: [[false, false], [false, false], [false, false]],
        imageU1InHTML: ["profilePictureU1", "backgroundPictureU1", "profileMask", "backgroundMask"],
        buttons: ["buttonVisitProfile", "buttonEditInfo", "buttonOnPinkBack"],
        directories: ['profile', 'manageAccountInf', 'start'],
    };

    let styleSelectorInHTML = document.getElementById("styleSelector");
    let previewButtonInHTML = document.getElementById("buttonOnPinkPreview");

    const xHR = new XMLHttpRequest();

    for (let i = 0; i < 2; i++) {
        let pictureType;
        if (i === 0) {
            pictureType = "profile";
        } else {
            pictureType = "background";
        }

        getById(ob.formElements[i][5]).addEventListener("change", function () {
            ob.picturesState[1][i] = this.files[0] != null;
            ob.picturesState[2][i] = false;
            displayPicture(i);
            refresh(i);
        });

        getById(ob.formElements[i][2]).addEventListener("click", function () {
            document.body.style.filter = "blur(10px)";
        });

        getById(ob.formElements[i][3]).addEventListener("click", function () {
            if (ob.picturesState[1][i]) {
                ob.picturesState[2][i] = true;
                pictureSwitch.switchFromMemory(i);
            } else if (whatsGoinOn.newPictureDeleted(i) || whatsGoinOn.savedPictureDisplayed(i)) {
                setTimeout(function () {
                    if (window.confirm("Permanently delete this " + pictureType + " picture?")) {
                        pictureSwitch.switchFromBase(i);
                        deletePicture(i, pictureType);
                    }
                }, 200);
            }
            displayPicture(i);
            refresh(i);
        });
    }

    document.addEventListener("mouseover", function () {
        this.body.style.filter = "blur(0px)";
    });

    let overCounter = false;
    styleSelectorInHTML.addEventListener("mouseover", function () {
        if (!overCounter) {
            this.style.backgroundPosition = "0";
            overCounter = true;
        } else if (overCounter) {
            this.style.backgroundPosition = "right";
            overCounter = false;
        }
    });

    styleSelectorInHTML.addEventListener("mouseout", function () {
        this.style.backgroundPosition = "center";
    });

    for (let i = 0; i < ob.buttons.length; i++) {
        getById(ob.buttons[i]).addEventListener("click", function () {
            sendForm(0, i);
        });
    }

    let whatsGoinOn = {
        savedPictureDisplayed: function (i) {
            return ob.picturesState[0][i] && !ob.picturesState[1][i] || ob.picturesState[0][i] && ob.picturesState[1][i] && ob.picturesState[2][i];
        },
        noPicture: function (i) {
            return !ob.picturesState[0][i] && !ob.picturesState[1][i] || !ob.picturesState[0][i] && ob.picturesState[2][i];
        },
        newPictureDisplayed: function (i) {
            return ob.picturesState[1][i] && !ob.picturesState[2][i];
        },
        newPictureDeleted: function (i) {
            return ob.picturesState[2][i];
        },
    };

    let pictureSwitch = {
        switchFromBase: function (i) {
            let curtain = getById(ob.formElements[i][1]);
            let imageOrigin = getById(ob.formElements[i][0]);

            setTimeout(function () {
                curtain.style.backgroundColor = "#cff6f6";
            }, 200);
            setTimeout(function () {
                imageOrigin.style.backgroundImage = "";
            }, 200);
        },
        switchFromMemory: function (i) {
            let curtain = getById(ob.formElements[i][1]);

            curtain.style.opacity = "0.0";
            setTimeout(function () {
                curtain.style.backgroundImage = '';
            }, 200);
            setTimeout(function () {
                curtain.style.opacity = '1.0';
            }, 400);
        },
    };

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    function getByClassName(classNameInHTML, number) {
        return document.getElementsByClassName(classNameInHTML).item(number);
    }

    verifyBase(0);

    function refresh(i) {
        deleteOrReject(i);
        hideBottomLabel(i);
        showPreview();
    }

    function verifyBase(k) {
        let askType;
        if (k === 0) {
            askType = "profile";
        } else {
            askType = "background";
        }

        xHR.open("GET", "pictureProvide?pictureType=" + askType + "ask", true);
        xHR.send();
        xHR.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ob.picturesState[0][k] = this.responseText === "true";
                refresh(k);
                if (k === 0) {
                    verifyBase(1);
                }
            }
        };
    }

    function redirect(i) {
        location.href = ob.directories[i];
    }

    function sendForm(j, i) {
        let sendType;
        if (j === 0) {
            sendType = "profile";
        } else {
            sendType = "background";
        }

        if (whatsGoinOn.newPictureDisplayed(j)) {
            let formFile = new FormData(getById(ob.formElements[j][0]));

            xHR.open("POST", "savePictureServlet", true);
            xHR.setRequestHeader("pictureType", sendType);
            xHR.send(formFile);
            xHR.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    if (j === 0) {
                        sendForm(1, i);
                    } else {
                        redirect(i);
                    }
                }
            }
        } else if (j === 0) {
            sendForm(1, i);
        } else if (j === 1) {
            redirect(i);
        }
    }

    function deleteOrReject(i) {
        let upperText = getById(ob.formElements[i][7]);
        let bottomText = getById(ob.formElements[i][6]);

        if (whatsGoinOn.savedPictureDisplayed(i)) {
            upperText.innerHTML = "Update picture";
            bottomText.innerHTML = "Delete picture";
        } else if (whatsGoinOn.noPicture(i)) {
            upperText.innerHTML = "Select picture";
        } else if (whatsGoinOn.newPictureDisplayed(i)) {
            upperText.innerHTML = "Select another picture";
            bottomText.innerHTML = "Reject change";
        }
    }

    function displayPicture(i) {
        let imagePlace = getById(ob.formElements[i][1]);
        let imageMask = getById(ob.imageU1InHTML[i + 2]);
        let formPicture = getById(ob.formElements[i][5]).files[0];

        if (whatsGoinOn.newPictureDisplayed(i)) {
            let pictureURL = URL.createObjectURL(formPicture);

            imagePlace.style.backgroundImage = 'url(' + pictureURL + ')';
            imageMask.style.backgroundImage = 'url(' + pictureURL + ')';
        }
        if (whatsGoinOn.newPictureDeleted(i)) {
            imageMask.style.opacity = "0.0";
        } else {
            imageMask.style.opacity = "1.0";
        }
    }

    function hideBottomLabel(i) {
        let upperLabel = getById(ob.formElements[i][4]).style;
        let bottomLabel = getById(ob.formElements[i][6]).style;

        if (whatsGoinOn.noPicture(i)) {
            upperLabel.borderRadius = "10px 10px 10px 10px";
            bottomLabel.display = "none";
            upperLabel.height = '100%';
        } else if (!whatsGoinOn.noPicture(i)) {
            upperLabel.borderRadius = "10px 10px 0 0";
            bottomLabel.display = "inherit";
            upperLabel.height = '50%';
        }
    }

    function unnecessary() {
        for (let i = 0; i < 3; i++) {
            getByClassName(ob.gridCells[i], 0).style.filter = "blur(10px)";
            getByClassName(ob.gridCells[i], 0).style.opacity = "0.7";
            setTimeout(function () {
                let gridU1 = getByClassName(ob.grids[1], 0);

                gridU1.style.display = "grid";
                gridU1.style.opacity = "1.0";
                gridU1.addEventListener("click", function () {
                    this.style.display = "none";
                    this.style.opacity = "0.0";
                    for (let i = 0; i < 3; i++) {
                        getByClassName(ob.gridCells[i], 0).style.filter = "blur(0px)";
                        getByClassName(ob.gridCells[i], 0).style.opacity = "1.0";
                    }
                });
            }, 200);
        }
    }

    function showPreview() {
        if (whatsGoinOn.newPictureDisplayed(0) || whatsGoinOn.newPictureDisplayed(1)) {
            previewButtonInHTML.style.opacity = "1.0";
            previewButtonInHTML.addEventListener("click", unnecessary);
        } else {
            previewButtonInHTML.style.opacity = "0.0";
            previewButtonInHTML.removeEventListener("click", unnecessary);
        }
    }

    function deletePicture(i, pictureType) {
        xHR.open("POST", "antiIG", true);
        xHR.setRequestHeader("pictureType", pictureType);
        xHR.send();
        xHR.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                ob.picturesState[0][i] = false;
                refresh(i);
            }
        };
    }
});
