document.addEventListener("DOMContentLoaded", function () {

    let ob = {
        picturesForm: ["coverInput", "picturesForm", "postPictureLabel", "picturesInput", "readyPic", "previewPicture"],
        picturesStates: [false, false, false, false, false, false, false, false, false, false, false, false, false],
        picturesRealIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        picturesOrientation: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        picturesTitles: ["", "", "", "", "", "", "", "", "", "", "", ""],
        picturesDescriptions: ["", "", "", "", "", "", "", "", "", "", "", ""],
        pictureIsCentered: [true, false, false, false, false, false, false, false, false, false, false, false],
        picturesPreview: ["absoluteCover", "previewPicturesGrid", "cellPictures", "controlGrid"],
        linksForm: ["linksForm1", "linksInput", "readyLink"],
        linksStates: [false, false, false, false, false, false, false, false],
        textForm: ["textForm", "textInput"],
        buttons: [["postCoverLabel", "deleteCover"], ["postPictureLabel", "managePicturesButton"], ["selectCover", "deleteCoverText"], ["selectPostPictures", "managePostPictures"]],
        controlGrid: ["controlCell1", "controlCell2", "indexCell"],
        controlGridPicturesButtons: ["changeDimensions", "changeDimensionsText", "deletePicture", "deletePictureText"],
    };

    for (let i = 1; i < 13; i++) {
        getById(ob.picturesForm[3] + i).addEventListener("change", function () {
            let target;
            if (findSlot.findLast() !== "none") {
                target = findSlot.findLast();

                ob.picturesStates[target] = this.files[0] != null;
                changeButtonsNumber(1, 50);
                displayPicture(3, target);
                adjustLabel();
            } else {
                changeButtonsNumber(1, 100);
            }
        });
    }

    getById(ob.picturesForm[0]).addEventListener("change", function () {
        ob.picturesStates[0] = this.files[0] != null;
        displayPicture(0, "");
        changeButtonsNumber(0, 50);
    });

    getById(ob.buttons[1][1]).addEventListener("click", function () {
        appearPreview(true);
        addScrollingButtons(true);
        activatePictures("");
        cssScrolling.setStart();
    });

    getById("buttonOnPinkReady").addEventListener("click", function () {
        appearPreview(false);
        addScrollingButtons(false);
    });

    let findSlot = {
        findLast: function () {
            let lastSlot;

            for (let i = 1; i < 13; i++) {
                if (!ob.picturesStates[i]) {
                    lastSlot = i;
                    break;
                }
            }

            if (lastSlot === undefined) {
                return "none";
            } else {
                return lastSlot;
            }
        },

        findIfAny: function () {
            let counter = 0;
            for (let i = 0; i < 13; i++) {
                if (ob.picturesStates[i]) {
                    counter++;
                }
            }
            return counter > 0;
        },

        findCenterIndex: function () {
            let center;

            for (let i = 0; i < 13; i++) {
                if (ob.pictureIsCentered[i]) {
                    center = i;
                    break;
                }
            }
            return center;
        },

        findCenter: function () {
            return findSlot.findCenterIndex() + 1;
        },

        findPrevious: function () {
            return findSlot.findCenter() - 1;
        },

        findNext: function () {
            return findSlot.findCenter() + 1;
        },
    };

    let cssScrolling = {
        right: function (index) {
            let target = getById(ob.picturesForm[5] + index);
            console.log(index);

            if (target !== undefined && target != null) {
                if (index === findSlot.findCenter() - 1) {
                    target.style.marginLeft = "0%";
                    target.style.opacity = "0.0";
                    setTimeout(function () {
                        target.style.display = "none";
                    }, 200);
                } else if (index === findSlot.findCenter()) {
                    target.style.marginLeft = "10%";
                } else if (index === findSlot.findCenter() + 1) {
                    target.style.marginLeft = "40%";
                } else if (index === findSlot.findCenter() + 2) {
                    target.style.display = "block";
                    setTimeout(function () {
                        target.style.marginLeft = "70%";
                        target.style.opacity = "1.0";
                    }, 20);
                }
            }
        },

        left: function (index) {
            let target = getById(ob.picturesForm[5] + index);

            if (target !== undefined && target != null) {
                if (index === findSlot.findCenter() + 1) {
                    target.style.marginLeft = "80%";
                    target.style.opacity = "0.0";
                    setTimeout(function () {
                        target.style.display = "none";
                    }, 200);
                } else if (index === findSlot.findCenter()) {
                    target.style.marginLeft = "70%";
                } else if (index === findSlot.findCenter() - 1) {
                    target.style.marginLeft = "40%";
                } else if (index === findSlot.findCenter() - 2) {
                    target.style.display = "block";
                    setTimeout(function () {
                        target.style.marginLeft = "10%";
                        target.style.opacity = "1.0";
                    }, 20);
                }
            }
        },

        setStart: function () {
            let center = findSlot.findCenter();
            let before = center - 1;
            let after = center + 1;

            let target = getById(ob.picturesForm[5] + center);
            let beforeTarget = getById(ob.picturesForm[5] + before);
            let afterTarget = getById(ob.picturesForm[5] + after);

            if (beforeTarget !== undefined && beforeTarget != null) {
                beforeTarget.style.display = "block";
                beforeTarget.style.marginLeft = "10%";
                beforeTarget.style.opacity = "1.0";
            }
            if (target !== undefined && target != null) {
                target.style.display = "block";
                target.style.marginLeft = "40%";
                target.style.opacity = "1.0";
            }
            if (afterTarget !== undefined && afterTarget != null) {
                afterTarget.style.display = "block";
                afterTarget.style.marginLeft = "70%";
                afterTarget.style.opacity = "1.0";
            }

            adjustIndexIndicator("");
        },
    };

    refresh();

    function refresh() {
        if (!findSlot.findIfAny()) {
            changeButtonsNumber(1, 100);
        } else {
            changeButtonsNumber(1, 50);
        }
        if (ob.picturesStates[0]) {
            changeButtonsNumber(0, 50);
        } else {
            changeButtonsNumber(0, 100);
        }
    }

    function changeButtonsNumber(button, height) {
        getById(ob.buttons[button][0]).style.height = height + "%";
        getById(ob.buttons[button][1]).style.height = (height - 100) * -1 + "%";

        if (height === 100) {
            getById(ob.buttons[button][0]).style.borderRadius = "10px 10px 10px 10px";
            getById(ob.buttons[button + 2][1]).style.display = "none";
        } else {
            getById(ob.buttons[button][0]).style.borderRadius = "10px 10px 0 0";
            getById(ob.buttons[button + 2][1]).style.display = "block";
        }
    }

    function adjustLabel() {
        getById(ob.picturesForm[2]).htmlFor = ob.picturesForm[3] + findSlot.findLast();
    }

    function adjustIndexIndicator(direction) {
        let target = getById(ob.controlGrid[2]);

        if (direction) {
            target.style.paddingRight = "4%";
            target.style.opacity = "0.0";
            setTimeout(function () {
                target.style.paddingRight = "0";
                target.style.paddingLeft = "4%";
                target.innerHTML = ob.picturesRealIndex[findSlot.findCenterIndex()].toString();
                setTimeout(function () {
                    target.style.paddingLeft = "0";
                    target.style.opacity = "1.0";
                }, 100);
            }, 100);
        } else if (!direction) {
            target.style.paddingLeft = "4%";
            target.style.opacity = "0.0";
            setTimeout(function () {
                target.style.paddingLeft = "0";
                target.style.paddingRight = "4%";
                target.innerHTML = ob.picturesRealIndex[findSlot.findCenterIndex()].toString();
                setTimeout(function () {
                    target.style.paddingRight = "0";
                    target.style.opacity = "1.0";
                }, 100);
            }, 100);
        } else {
            target.innerHTML = ob.picturesRealIndex[findSlot.findCenterIndex()].toString();
        }
    }

    function displayPicture(whatType, index) {
        let imagePlace = getById(ob.picturesForm[whatType + 1] + index);
        let imagePreview = getById(ob.picturesForm[5] + index);
        let formPicture = getById(ob.picturesForm[whatType] + index).files[0];
        let pictureURL = URL.createObjectURL(formPicture);

        imagePlace.style.backgroundImage = 'url(' + pictureURL + ')';
        imagePreview.style.backgroundImage = 'url(' + pictureURL + ')';
    }

    function appearPreview(whichWay) {
        let controlGrid = getById(ob.picturesPreview[3]);
        let picturesCell = getById(ob.picturesPreview[2]);
        let previewGrid = getById(ob.picturesPreview[1]);
        let absoluteCover = getById(ob.picturesPreview[0]);

        if (whichWay) {
            absoluteCover.style.display = "block";
            setTimeout(function () {
                absoluteCover.style.opacity = "0.9";
                setTimeout(function () {
                    previewGrid.style.display = "grid";
                    setTimeout(function () {
                        picturesCell.style.opacity = "1.0";
                        controlGrid.style.opacity = "1.0";
                    }, 100);
                }, 400);
            }, 100);
        } else {
            picturesCell.style.opacity = "0.0";
            controlGrid.style.opacity = "0.0";
            setTimeout(function () {
                previewGrid.style.display = "none";
                setTimeout(function () {
                    absoluteCover.style.opacity = "0.0";
                    setTimeout(function () {
                        absoluteCover.style.display = "none";
                    }, 100);
                }, 400);
            }, 200);
        }
    }

    function scrollPictures(direction) {
        let center = findSlot.findCenterIndex();

        if (direction) {
            for (let i = center; i < center + 4; i++) {
                cssScrolling.right(i);
                adjustIndexIndicator(direction);
                activatePictures(direction);
            }
            ob.pictureIsCentered[center + 1] = true;
        } else {
            for (let j = center + 2; j > center - 2; j--) {
                cssScrolling.left(j);
                adjustIndexIndicator(direction);
                activatePictures(direction);
            }
            ob.pictureIsCentered[center - 1] = true;
        }
        ob.pictureIsCentered[center] = false;
    }

    function activatePictures(direction) {
        let changePrevious = getById(ob.controlGridPicturesButtons[0] + findSlot.findPrevious());
        let deletePrevious = getById(ob.controlGridPicturesButtons[2] + findSlot.findPrevious());
        let changeLabel = getById(ob.controlGridPicturesButtons[0] + findSlot.findCenter());
        let deleteLabel = getById(ob.controlGridPicturesButtons[2] + findSlot.findCenter());
        let changeNext = getById(ob.controlGridPicturesButtons[0] + findSlot.findNext());
        let deleteNext = getById(ob.controlGridPicturesButtons[2] + findSlot.findNext());

        if (direction && changeNext != null && deleteNext != null) {
            changeLabel.style.display = "none";
            deleteLabel.style.display = "none";
            changeLabel.removeEventListener("click", unnecessaryChange);
            deleteLabel.removeEventListener("click", unnecessaryDelete);

            changeNext.style.display = "block";
            deleteNext.style.display = "block";
            changeNext.addEventListener("click", unnecessaryChange);
            deleteNext.addEventListener("click", unnecessaryDelete);
        } else if (!direction && changePrevious != null && deletePrevious != null) {
            changeLabel.style.display = "none";
            deleteLabel.style.display = "none";
            changeLabel.removeEventListener("click", unnecessaryChange);
            deleteLabel.removeEventListener("click", unnecessaryDelete);

            changePrevious.style.display = "block";
            deletePrevious.style.display = "block";
            changePrevious.addEventListener("click", unnecessaryChange);
            deletePrevious.addEventListener("click", unnecessaryDelete);
        } else {
            changeLabel.style.display = "block";
            deleteLabel.style.display = "block";
            changeLabel.addEventListener("click", unnecessaryChange);
            deleteLabel.addEventListener("click", unnecessaryDelete);
        }
    }

    function addScrollingButtons(add) {
        if (add) {
            getById(ob.controlGrid[0]).addEventListener("click", unnecessaryScrollLeft);
            getById(ob.controlGrid[1]).addEventListener("click", unnecessaryScrollRight);
        } else {
            getById(ob.controlGrid[0]).removeEventListener("click", unnecessaryScrollLeft);
            getById(ob.controlGrid[1]).removeEventListener("click", unnecessaryScrollRight);
        }
    }

    function unnecessaryScrollLeft() {
        if (ob.pictureIsCentered[0] !== true) {
            scrollPictures(false);
        }
    }

    function unnecessaryScrollRight() {
        if (ob.pictureIsCentered[11] !== true && ob.picturesStates[findSlot.findCenter() + 1]) {
            scrollPictures(true);
        }
    }

    function unnecessaryChange() {

    }

    function unnecessaryDelete() {

    }

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    function getByClassName(classNameInHTML, number) {
        return document.getElementsByClassName(classNameInHTML).item(number);
    }

});