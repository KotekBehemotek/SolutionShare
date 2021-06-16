<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 06/07/2020
  Time: 20:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html lang="en">
<head>
    <title>SignIn to Solve</title>

    <script src="../../../static/js/signIn/Functions.js"></script>
    <script src="../../../static/js/tmlentFramework/Classes.js"></script>
    <script src="../../../static/js/signIn/Objects.js"></script>
    <script src="../../../static/js/signIn/Variables.js"></script>
    <script src="../../../static/js/signIn/NonElementary.js"></script>
    <script src="../../../static/js/signIn/Elementary.js"></script>

    <link rel="stylesheet" href="../../../static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="../../../static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/background.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/cells.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/mainThing.css">
</head>
<body>

<div class="gridA">
    <div id="helloArea">
        <h1 class="hello" id="hello">SignIn to Solve</h1>
    </div>
    <div id="questionArea">
        <h3 class="question" id="question">Say something about yourself</h3>
    </div>
    <div class="grid">
        <div class="cell1" id="cell1">
            <div class="underButton" id="hintLabelNick">
                <ul class="additionalTextList" id="nicknameAssistList">
                    <li id="nicknameAssistLengthEr">Between 3 and 30 characters</li>
                    <li id="nicknameAssistWhite">No spaces, enters etc.</li>
                </ul>
            </div>
            <div class="underButton" id="hintLabelEmail">
                <ul class="additionalTextList" id="emailAssistList">
                    <li id="emailAssistLikeEmail">Is an actual email address</li>
                </ul>
            </div>
            <div class="underButton" id="hintLabelPassword1">
                <ul class="additionalTextList" id="password1AssistList">
                    <li id="password1AssistLengthEr">Between 6 and 30 characters</li>
                    <li id="password1AssistDigit">At least one digit</li>
                    <li id="password1AssistWhite">No spaces, enters etc.</li>
                </ul>
            </div>
            <div class="underButton" id="hintLabelPassword2">
                <ul class="additionalTextList" id="password2AssistList">
                    <li id="password2AssistIsSame">Repeats the first password</li>
                </ul>
            </div>
        </div>
        <div class="gridU">
            <div class="cell1" id="cell1U">
                <form class="form" id="form" action="signIn" method="post">
                    <label class="formLabel">
                        <input class="textInput" id="inputNickname" type="text" placeholder="nickname" name="nickname">
                    </label>
                    <label class="formLabel">
                        <input class="textInput" id="inputEmail" type="email" placeholder="@ email @" name="email">
                    </label>
                    <label class="formLabel">
                        <input class="textInput" id="inputPassword1" type="Password" placeholder="* password *" name="password1">
                    </label>
                    <label class="formLabel">
                        <input class="textInput" id="inputPassword2" type="Password" placeholder="** repeat password **" name="password2">
                    </label>
                    <label class="formLabel">
                        <input class="submit" type="submit" value="I'm ready!">
                    </label>
                </form>
            </div>
            <div id="cell26U"></div>
            <div class="lastCell" id="buttonsArea">
                <button class="button1 button1Right" type="button" onclick=location.href='logIn'>
                    <span class="textOnButton">Already own an account</span>
                </button>
                <button class="button1 button1Right" type="button" onclick=location.href='Landing.jsp'>
                    <span class="textOnButton">Start Page</span>
                </button>
            </div>
        </div>
    </div>
</div>

</body>
</html>