// objects created using TMLENT framework
class Form extends SerialContainer {
    constructor(htmlId, subSet) {
        super(htmlId, subSet);
    }

    displayImag(i) {
        displayImag(this.getSubSerialElement(i, 0), gBId(gridU1Elements[i][i + 2]), this.getSubSerialElement(i, 4))
    }

    doSomethingWithMask(i) {
        doSomethingWithMask(gBId(gridU1Elements[i][i + 2]), informator.isImagMarked(i));
    }

    showTwoButtons(i) {
        showTwoButtons(this.getSubSerialElement(i, 3), this.getSubSerialElement(i, 2));
    }

    showOneButton(i) {
        showOneButton(this.getSubSerialElement(i, 3), this.getSubSerialElement(i, 2));
    }

    animateFromBase(i) {
        animateFromBase(this.getSubSerialElement(i, 0), this.getElement(i));
    }

    animateFromMemory(i) {
        animateFromMemory(this.getSubSerialElement(i, 0));
    }

    deleteOrReject(i) {
        deleteOrReject(i, this.getSubSerialElement(i, 6), this.getSubSerialElement(i, 5));
    }

    deleteImag(i) {
        deleteImag(i);
    }
}

class Button extends SerialTMLent {
    constructor(htmlId, directories) {
        super(htmlId);
        this.directories = directories;
    }

    getDirectory(i) {
        return this.directories[i];
    }

    getAway(i) {
        location.href = this.directories[i];
    }
}

// additional utility object
class Informator {
    imagIsInBase(index) {
        picturesStates[0][index] = true;
    };

    imagIsNotInBase(index) {
        picturesStates[0][index] = false;
    };

    imagIsUploaded(index) {
        picturesStates[1][index] = true;
    };

    imagIsNotUploaded(index) {
        picturesStates[1][index] = false;
    };

    imagIsMarked(index) {
        picturesStates[2][index] = true;
    };

    imagIsNotMarked(index) {
        picturesStates[2][index] = false;
    };

    isImagInBase(index) {
        return picturesStates[0][index];
    };

    isImagUploaded(index) {
        return picturesStates[1][index];
    };

    isImagMarked(index) {
        return picturesStates[2][index];
    };

    isSavedImagDisplayed(i) {
        return picturesStates[0][i] && !picturesStates[1][i] || picturesStates[0][i] && picturesStates[1][i] && picturesStates[2][i];
    }

    isNoImag(i) {
        return !picturesStates[0][i] && !picturesStates[1][i] || !picturesStates[0][i] && picturesStates[2][i];
    }

    isNewImagDisplayed(i) {
        return picturesStates[1][i] && !picturesStates[2][i];
    }
}