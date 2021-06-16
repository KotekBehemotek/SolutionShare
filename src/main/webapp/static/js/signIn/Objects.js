class LeftSideElement extends TMLent {
    constructor(htmlId) {
        super(htmlId);
    }

    moveRight() {
        moveRight(this.getElement());
    };

    moveLeft() {
        moveLeft(this.getElement());
    };
}

class Input extends SerialTMLent {
    constructor(htmlIds) {
        super(htmlIds);
    }

    markAsSomething(target, state) {
        markAsSomething(this.getElement(target), state);
        inputsStates[target] = state;
    };
}

class HintLabel extends SerialContainer {
    constructor(htmlId, subSet) {
        super(htmlId, subSet);
    }

    rollOut(target) {
        rollOut(this.getElement(target));
    };

    rollBack(target) {
        rollBack(this.getElement(target));
    };

    markHintAsSomething(target, target1, state) {
        markHintAsSomething(this.getSubSerialElement(target, target1), state);
        hintsStates[target][target1] = state;
    };
}