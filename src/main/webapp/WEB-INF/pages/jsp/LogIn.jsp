<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 08/06/2020
  Time: 00:11
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8"%>
<html lang="en">
<head>
    <title>You're back!</title>

    <script src="../../../static/js/signIn/Functions.js"></script>
    <script src="../../../static/js/tmlentFramework/Classes.js"></script>
    <script src="../../../static/js/logIn/Objects.js"></script>
    <script src="../../../static/js/logIn/Variables.js"></script>
    <script src="../../../static/js/logIn/NonElementary.js"></script>
    <script src="../../../static/js/logIn/Elementary.js"></script>

    <link rel="stylesheet" href="../../../static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="../../../static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/background.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/cells.css">
    <link rel="stylesheet" href="../../../static/css/design/logIn/mainThing.css">
</head>
<body>

<div class="gridA">
    <div id="helloArea">
        <h1 class="hello" id="hello">Solve</h1>
    </div>
    <div id="questionArea">
        <h3 class="question" id="question">Who is returning to his space today?</h3>
    </div>
    <div class="grid">
        <div class="cell1" id="cell1">
            <div class="underButton" id="hintLabelEmail">
                <ul class="additionalTextList" id="emailAssistList">
                    <li id="emailAssistOk">Is an actual email address</li>
                </ul>
            </div>
            <div class="underButton" id="hintLabelPassword1">
                <ul class="additionalTextList" id="password1AssistList">
                    <li id="password1AssistOk">Meet password requirements</li>
                </ul>
            </div>
        </div>
        <div class="gridU">
            <div class="cell1" id="cell1U">
                <form class="form" id="form" action="logIn" method="post">
                    <label class="formLabel">
                        <input class="textInput" id="inputEmail" type="email" placeholder="Your @ email @" name="email">
                    </label>
                    <label class="formLabel">
                        <input class="textInput" id="inputPassword" type="Password" placeholder="Your * password *" name="password1">
                    </label>
                    <label class="formLabel">
                        <input class="submit" type="submit" value="I'm ready!">
                    </label>
                </form>
            </div>
            <div id="cell26U"></div>
            <div class="lastCell" id="buttonsArea">
                <button class="button1 button1Right" type="button" onclick=location.href='signIn'>
                    <span class="textOnButton">Do not own an account yet</span>
                </button>
                <button class="button1 button1Right"
                        id="logInPageButtonOnPinkBack" type="button" onclick=location.href='Landing.jsp'>
                    <span class="textOnButton">Start Page</span>
                </button>
            </div>
        </div>
    </div>
</div>

</body>
</html>
