<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 17/01/2021
  Time: 11:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Who are We?</title>

    <script src="../../../static/js/manageAccountInf/FormDeliver.js"></script>

    <link rel="stylesheet" href="../../../static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="../../../static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountInf/background.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountInf/cells.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountInf/mainText.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountInf/buttons.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountInf/form.css">

</head>
<body>

<div class="gridA">
    <div class="cell1">
        <button class="solutionButtons
                       buttonsOnBlue"
                id="buttonOnBlueProfile" type="button"> <span class="textOnButton
                                                                     textOnBlue">Visit profile</span>
        </button>
        <button class="solutionButtons
                       buttonsOnBlue"
                id="buttonOnBlueStart" type="button"> <span class="textOnButton
                                                                       textOnBlue">Start scrolling</span>
        </button>
        <button class="solutionButtons
                       buttonsOnBlue"
                id="buttonOnBlueEditPictures" type="button"> <span class="textOnButton
                                                                          textOnBlue">Edit pictures</span>
        </button>
        <button class="solutionButtons
                       buttonsOnBlue"
                id="buttonOnBlueEditLinks" type="button"> <span class="textOnButton
                                                                       textOnBlue">Edit links</span>
        </button>
    </div>
    <div class="cell2" id="cell2A">
        <div class="cell1Special">
            <form class="form" id="formCredo" action="manageAccountInf" method="post">
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputCredo" type="text"
                       placeholder="How would You describe Yourself? What is Your motto?" value="${requestScope.credo}" name="credo">
                </label>
                <input class="submitInput" type="submit">
            </form>
        </div>
        <div class="cell2Special">
            <form class="form" id="formInterests" action="manageAccountInf" method="post">
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputInterest1" type="text" placeholder="Interest" value="${requestScope.interest1}"
                       name="interest1">
                </label>
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputInterest2" type="text" placeholder="Interest" value="${requestScope.interest2}"
                       name="interest2">
                </label>
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputInterest3" type="text" placeholder="Interest" value="${requestScope.interest3}"
                       name="interest3">
                </label>
                <input class="submitInput" type="submit">
            </form>
        </div>
        <div class="cell3Special">
            <form class="form" id="formNames" action="manageAccountInf" method="post">
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputName1" type="text" placeholder="First name" value="${requestScope.name1}" name="name1">
                </label>
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputName2" type="text" placeholder="Second name / patrimonic" value="${requestScope.name2}"
                       name="name2">
                </label>
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputSurname" type="text" placeholder="Surname" value="${requestScope.surname}" name="surname">
                </label>
                <input class="submitInput" type="submit">
            </form>
        </div>
        <div class="cell4Special">
            <form class="form" id="formGeneral" action="manageAccountInf" method="post">
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputYear" type="number" placeholder="Birth year" value="${requestScope.year}" name="year">
                </label>
                <label>
                <input class="textInput
                            rightInput
                            solutionInputOk" id="textInputCity" type="text" placeholder="City" value="${requestScope.city}" name="city">
                </label>
                <label>
                <input class="textInput
                            rightInput
                            solutionInputOk" id="textInputCountry" type="text" placeholder="Country" value="${requestScope.country}" name="country">
                </label>
                <input class="submitInput" type="submit">
            </form>
        </div>
        <div class="cell5Special">
            <form class="form" id="formContact" action="manageAccountInf" method="post">
                <label>
                <input class="textInput
                            solutionInputOk" id="textInputPhone" type="number" placeholder="Public phone number" value="${requestScope.number}"
                       name="number">
                </label>
                <label>
                <input class="textInput
                            rightInput
                            solutionInputOk" id="textInputEmail" type="text" placeholder="Public email" value="${requestScope.email}" name="email">
                </label>
                <input class="submitInput" type="submit">
            </form>
        </div>
<%--        <div class="cell6Special"></div>--%>
<%--        <div class="cell7Special"></div>--%>
<%--        <div class="cell8Special"></div>--%>
<%--        <div class="cell9Special"></div>--%>
        <%--        <div class="cell10Special"></div>--%>
    </div>
    <div class="cell3 lastCell">
        <button class="solutionButtons
                       buttonsOnPink"
                id="buttonOnPinkBack" type="button"> <span class="textOnButton
                                                                                                    textOnPink">Take me back</span>
        </button>
    </div>
</div>

</body>
</html>
