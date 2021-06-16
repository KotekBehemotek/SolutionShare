const helloArea = "helloArea";
const buttonsArea = "buttonsArea";
const questionArea = "cell26U";
const submit = "submit";
const form = "form";

const htmlInputs = ["inputNickname", "inputEmail", "inputPassword1", "inputPassword2"];
let inputsStates = [false, false, false, false];
const htmlLabels = ["hintLabelNick", "hintLabelEmail", "hintLabelPassword1", "hintLabelPassword2"];
const htmlHints = [["nicknameAssistLengthEr", "nicknameAssistWhite"], ["emailAssistLikeEmail"], ["password1AssistLengthEr", ["password1AssistDigit"], "password1AssistWhite"], ["password2AssistIsSame"]];
let hintsStates = [[false, false], [false], [false, false, false], [false]];

let globalFocus = false;

const regexWhite = /.*\s+.*/;
const regexDigit = /.*[0-9]+.*/;
const regexEmail = /[a-z0-9\.\_\-]{3,}@[a-z0-9\-]{2,}\.[a-z]{2,4}/;