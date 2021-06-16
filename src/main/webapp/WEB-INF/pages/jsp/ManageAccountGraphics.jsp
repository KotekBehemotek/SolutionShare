<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 07/01/2021
  Time: 16:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <title>Who are We?</title>

<%--    <script src="../../../static/js/manageAccountGraphics/Everything.js"></script>--%>
    <script src="../../../static/js/manageAccountGraphics/Functions.js"></script>
    <script src="../../../static/js/tmlentFramework/Classes.js"></script>
    <script src="../../../static/js/manageAccountGraphics/Objects.js"></script>
    <script src="../../../static/js/manageAccountGraphics/Variables.js"></script>
    <script src="../../../static/js/manageAccountGraphics/NonElementary.js"></script>
    <script src="../../../static/js/manageAccountGraphics/Requests.js"></script>
    <script src="../../../static/js/manageAccountGraphics/Elementary.js"></script>

    <link rel="stylesheet" href="../../../static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="../../../static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="../../../static/css/design/signIn/background.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountGraphics/cells.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountGraphics/mainThing.css">
    <link rel="stylesheet" href="../../../static/css/design/manageAccountGraphics/gridU1.css">
</head>
<body>

<div class="gridA">
    <div class="grid">
        <div class="gridU">
            <div class="cell1">
                <button class="button1 button1Left" id="buttonVisitProfile" type="button"><span
                        class="textOnButton">Visit profile</span>
                </button>
                <button class="button1 button1Left" id="buttonEditInfo" type="button"><span
                        class="textOnButton">Edit information</span>
                </button>
            </div>
            <div class="cell2" id="cell2U">
                <div class="cell1Special">
                    <div class="cell1SpecialSpecial"></div>
                    <div class="cell2SpecialSpecial">
                        <form class="form" id="form2" enctype="multipart/form-data" action="savePictureServlet"
                              method="post" style="background-image: url('pictureProvide?pictureType=background')">
                            <div class="inFormGrid" id="inFormGridBackground">
                                <div id="cell1SpecialSpecialSpecial">
                                    <label for="inputBackground" class="solutionFormLabel formLabel"
                                           id="formLabelBackgroundSubmit">
                                        <span class="textOnButton textOnPicture" id="textOnPictureBackgroundSubmit">Update picture</span>
                                        <input class="solutionFormInput formInput" id="inputBackground" type="file"
                                               name="picture">
                                        <input class="solutionFormInput formInput" id="formSubmitBackground"
                                               type="submit" name="submit">
                                    </label>
                                </div>
                                <div id="cell2SpecialSpecialSpecial">
                                    <span class="textOnButton textOnPicture" id="textOnPictureBackgroundDelete">Delete picture</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="cell3SpecialSpecial"></div>
                </div>
                <div class="cell2Special">
                    <div id="cell1SpecialSpecial1"></div>
                    <div id="cell2SpecialSpecial1">
                        <form class="form" id="form" enctype="multipart/form-data" action="savePictureServlet"
                              method="post" style="background-image: url('pictureProvide?pictureType=profile')">
                            <div class="inFormGrid1" id="inFormGridPicture">
                                <div id="cell1SpecialSpecialSpecial1">
                                    <label for="inputPicture" class="solutionFormLabel formLabel" id="formLabelPicture">
                                        <span class="textOnButton textOnPicture" id="textOnPicturePictureSubmit">Update picture</span>
                                        <input class="solutionFormInput formInput" id="inputPicture" type="file"
                                               name="picture">
                                        <input class="solutionFormInput formInput" id="formSubmit" type="submit"
                                               name="submit">
                                    </label>
                                </div>
                                <div id="cell2SpecialSpecialSpecial1">
                                    <span class="textOnButton textOnPicture" id="textOnPicturePictureDelete">Delete picture</span>
                                </div>
                            </div>
                        </form>
                        <div id="styleSelector">
                            <span id="styleSelectorText">Silk&nbsp&nbsp&nbsp</span>
                        </div>
                    </div>
                    <div class="cell3SpecialSpecial1"></div>
                </div>
            </div>
            <div class="cell3 lastCell">
                <button class="button1 button1Right" id="buttonOnPinkPreview" type="button">
                    <span class="textOnButton">Preview profile</span>
                </button>
                <button class="button1 button1Right" id="buttonOnPinkBack" type="button">
                    <span class="textOnButton">Home Page</span>
                </button>
            </div>
            <div class="gridU1">
                <div class="cell0" id="cell1U1">
                    <div id="profileDiv">
                        <div id="profilePictureU1"
                             style="background-image: url('pictureProvide?pictureType=profile')">
                            <div id="profileMask"></div>
                        </div>
                    </div>
                    <div id="backgroundPictureU1"
                         style="background-image: url('pictureProvide?pictureType=background')">
                        <div id="backgroundMask"></div>
                    </div>
                </div>
                <div class="cell23" id="cell23U1">
                    <h1 class="solutionText" id="textThisU1">This is how pictures will appear<br>on Your profile</h1>
                </div>
                <div class="cell26" id="cell26U1">
                    <h3 class="solutionText" id="textClickU1">Click anywhere when ready</h3>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
