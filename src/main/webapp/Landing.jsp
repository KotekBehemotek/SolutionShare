<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 28/05/2020
  Time: 00:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html lang="en">
<head>
    <title>Everyday solution</title>

    <link rel="stylesheet" href="static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="static/css/design/landing/cells.css">
</head>
<body>

<div class="gridA">
    <div class="cell1" id="cell1">
        <button class="button1 button1Left" type="button" onclick=location.href='logIn'>
            <span class="textOnButton">I want to Log In</span>
        </button>
        <button class="button1 button1Left" type="button" onclick=location.href='signIn'>
            <span class="textOnButton">I would like to Sign In</span>
        </button>
    </div>
    <div id="helloArea">
        <h1 class="hello" id="hello">Solution</h1>
    </div>
    <div id="questionArea">
        <h3 class="question" id="question">What brings You here?
        </h3>
    </div>
</div>
</body>
</html>
