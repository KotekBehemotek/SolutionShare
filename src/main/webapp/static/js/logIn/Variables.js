const helloArea = "helloArea";
const buttonsArea = "buttonsArea";
const questionArea = "cell26U";
const submit = "submit";
const form = "form";

const htmlInputs = ["inputEmail", "inputPassword"];
let inputsStates = [false, false];
const htmlLabels = ["hintLabelEmail", "hintLabelPassword1"];
const htmlHints = ["emailAssistOk", "password1AssistOk"];

let globalFocus = false;

const regexWhite = /.*\s+.*/;
const regexDigit = /.*[0-9]+.*/;
const regexEmail = /[a-z0-9\.\_\-]{3,}@[a-z0-9\-]{2,}\.[a-z]{2,4}/;