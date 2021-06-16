const submit = "submit";
const styleSelector = "styleSelector";
let selectorCounter = false;
const preview = "buttonOnPinkPreview";

const forms = ["form", "form2"];
const formElements = [["inFormGridPicture", "cell1SpecialSpecialSpecial1", "cell2SpecialSpecialSpecial1", "formLabelPicture", "inputPicture", "textOnPicturePictureDelete", "textOnPicturePictureSubmit"], ["inFormGridBackground", "cell1SpecialSpecialSpecial", "cell2SpecialSpecialSpecial", "formLabelBackgroundSubmit", "inputBackground", "textOnPictureBackgroundDelete", "textOnPictureBackgroundSubmit"]];
const gridU1Elements = ["profilePictureU1", "backgroundPictureU1", "profileMask", "backgroundMask"];
const imagTypes = ["profile", "background"];
let picturesStates = [[false, false], [false, false], [false, false]];
const buttons = ["buttonVisitProfile", "buttonEditInfo", "buttonOnPinkBack"];
const directories = ['profile', 'manageAccountInf', 'start'];
const gridElements = ["cell1", "cell2", "cell3"];

let xhrController = new XHRController();
let xhrStorage = new XHRStorage();
let informator = new Informator();