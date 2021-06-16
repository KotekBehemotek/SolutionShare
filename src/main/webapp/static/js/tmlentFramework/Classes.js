// basic type of object in TMLENT framework
// its meant to cover simple elements
// out of the box gives access to its HTML identity and one method
// getElement method returns the covered element as a real HTML identity
class TMLent {
    constructor(htmlId) {
        this.htmlId = htmlId;
        this.getElement = function () {
            return gBId(this.htmlId);
        };
    }
}

// more advanced type of object in TMLENT framework
// is meant to cover similar elements (in meaning of role or type)
// out of the box gives access to its HTML identity (now as []), one already known method and two special methods
// forNumber method allows it to run function for the number of times matching number of elements covered by this object
// forAll runs specified function in loop with element covered by this object as the first argument. It allows up to 5 additional arguments
class SerialTMLent extends TMLent {
    constructor(htmlId) {
        super(htmlId);
        this.getElement = function (index) {
            return gBId(this.htmlId[index]);
        };
        this.forNumber = function (func) {
            for (let i = 0; i < this.htmlId.length; i++) {
                func(i);
            }
        };
        this.forAll = function (func, arg1, arg2, arg3, arg4, arg5) {
            for (let i = 0; i < this.htmlId.length; i++) {
                window[func + ""](this.getElement(i), arg1, arg2, arg3, arg4, arg5);
            }
        };
    };
}

// the most advanced type object in TMLENT framework
// its meant to cover elements which "contain" other elements (in hierarchy meaning)
// out of the box gives access to its HTML identity (as a []),
class SerialContainer extends SerialTMLent {
    constructor(htmlId, subSet) {
        super(htmlId);
        this.subSet = subSet;
        this.getSubElement = function (index) {
            return gBId(this.subSet[index]);
        };
        this.getSubSerialElement = function (index, index2) {
            return gBId(this.subSet[index][index2]);
        };
    }
}

// custom request controller
class XHRController {
    constructor() {
        this.xHR = new XMLHttpRequest();
        this.line = [];
        this.lineParams = [];
        this.lineKeys = [];
    }

    addToLine(func, param, key) {
        this.line.push(func);
        this.lineParams.push(param);
        this.lineKeys.push(key);
        if (this.line.length === 1) {
            this.moveTheLine();
        }
    }

    moveTheLine() {
        console.log("here");
        console.log(window[this.line[0] + ""](this.lineParams[0]));
        xhrStorage.addToStorage(xhrController.lineKeys[0], window[this.line[0] + ""](this.lineParams[0]));

        // window[this.line[0] + ""](this.lineParams[0]).then(result => function () {
        //     console.log(result);
        //     xhrStorage.addToStorage(xhrController.lineKeys[0], result);
        // });
        this.line.shift();
        this.lineParams.shift();
        this.lineKeys.shift();
        if (this.line.length > 0) {
            this.moveTheLine();
        }
    }
}

class XHRStorage {
    constructor() {
        this.storingLine = new Map();
    }

    addToStorage(key, ret) {
        this.storingLine.set(key, ret);
    }

    takeFromStorage(key) {
        this.storingLine.get(key);
        console.log(this.storingLine);
    }

    removeFromStorage(key) {
        return this.storingLine.delete(key);
    }
}