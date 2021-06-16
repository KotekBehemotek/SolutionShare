<%--
  Created by IntelliJ IDEA.
  User: tomaszkomorski
  Date: 20/01/2021
  Time: 17:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Your profile</title>

    <script src="../../../static/js/profile/TaskSelector.js"></script>
    <script src="../../../static/js/profile/NewPost.js"></script>

    <link rel="stylesheet" href="../../../static/css/grids/gridLayout.css">
    <link rel="stylesheet" href="../../../static/css/styles/silkStyleDay.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/buttons.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/cells.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/mainText.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/postPictures.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/postLinks.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/postText.css">
    <link rel="stylesheet" href="../../../static/css/design/profile/postPicturesPreview.css">
</head>
<body>

<div class="gridA">
    <div class="cell1A" id="cell1A">
        <div class="cell1" id="profileDiv">
            <div id="profilePicture"
                 style="background-image: url('pictureProvide?pictureType=profile')"></div>
        </div>
        <div id="backgroundPicture"
             style="background-image: url('pictureProvide?pictureType=background')">
        </div>
    </div>
    <div class="cell2">
        <div class="cellAspectSpecial">
            <div id="cell1Special">
                <form id="picturesForm" enctype="multipart/form-data" action="savePictureServlet" method="post">
                    <label id="postCoverLabel" for="coverInput">
                        <span class="textOnButton" id="selectCover">Select post cover</span>
                        <input class="formInput" id="coverInput" type="file" name="cover">
                    </label>
                        <input class="formInput" id="picturesInput1" type="file" name="picture1">
                        <input class="formInput" id="picturesInput2" type="file" name="picture2">
                        <input class="formInput" id="picturesInput3" type="file" name="picture3">
                        <input class="formInput" id="picturesInput4" type="file" name="picture4">
                        <input class="formInput" id="picturesInput5" type="file" name="picture5">
                        <input class="formInput" id="picturesInput6" type="file" name="picture6">
                        <input class="formInput" id="picturesInput7" type="file" name="picture7">
                        <input class="formInput" id="picturesInput8" type="file" name="picture8">
                        <input class="formInput" id="picturesInput9" type="file" name="picture9">
                        <input class="formInput" id="picturesInput10" type="file" name="picture10">
                        <input class="formInput" id="picturesInput11" type="file" name="picture11">
                        <input class="formInput" id="picturesInput12" type="file" name="picture12">
                    <div id="deleteCover">
                        <span class="textOnButton" id="deleteCoverText">Delete cover</span>
                    </div>
                    <input class="formSubmit" type="submit">
                </form>
                <div class="littleAspectPicture" id="littleAspectPicture1">
                    <div class="littlePicture" id="littlePicture1">
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyPic1"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyPic2"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyPic3"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyPic4"></div>
                        </div>
                    </div>
                </div>
                <div class="littleAspectPicture" id="littleAspectPicture2">
                    <div class="littlePicture" id="littlePicture2">
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2" id="readyPic5"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2" id="readyPic6"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2 readyPictureB" id="readyPic7"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2 readyPictureB" id="readyPic8"></div>
                        </div>
                    </div>
                </div>
                <div class="littleAspectPicture" id="littleAspectPicture3">
                    <div class="littlePicture" id="littlePicture3">
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2" id="readyPic9"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2" id="readyPic10"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2 readyPictureB" id="readyPic11"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPicture2 readyPictureB" id="readyPic12"></div>
                        </div>
                    </div>
                </div>
                <label id="postPictureLabel" for="picturesInput1">
                    <span class="textOnButton" id="selectPostPictures">Add post picture</span>
                </label>
                <div id="managePicturesButton">
                    <span class="textOnButton" id="managePostPictures">Manage post pictures</span>
                </div>
            </div>
        </div>
        <div class="cellAspectSpecial">
            <div id="cell2Special">
                <div id="littleAspectLink1">
                    <form id="linksForm1" action="saveLinkServlet" method="post">
                        <label class="linkLabel" for="linksInput1">
                            <input class="input linkInputL" id="linksInput1" type="url" name="link1" placeholder="link 1">
                        </label>
                        <label class="linkLabel" for="linksInput2">
                            <input class="input linkInputL" id="linksInput2" type="url" name="link2" placeholder="link 2">
                        </label>
                        <label class="linkLabel" for="linksInput3">
                            <input class="input linkInputL" id="linksInput3" type="url" name="link3" placeholder="link 3">
                        </label>
                        <label class="linkLabel" for="linksInput4">
                            <input class="input linkInputL" id="linksInput4" type="url" name="link4" placeholder="link 4">
                        </label>
                        <input class="formSubmit" type="submit">
                    </form>
                </div>
                <div id="littleAspectLink2">
                    <form id="linksForm2" action="saveLinkServlet" method="post">
                        <label class="linkLabel" for="linksInput5">
                            <input class="input linkInputR" id="linksInput5" type="url" name="link5" placeholder="link 5">
                        </label>
                        <label class="linkLabel" for="linksInput6">
                            <input class="input linkInputR" id="linksInput6" type="url" name="link6" placeholder="link 6">
                        </label>
                        <label class="linkLabel" for="linksInput7">
                            <input class="input linkInputR" id="linksInput7" type="url" name="link7" placeholder="link 7">
                        </label>
                        <label class="linkLabel" for="linksInput8">
                            <input class="input linkInputR" id="linksInput8" type="url" name="link8" placeholder="link 8">
                        </label>
                        <input class="formSubmit" type="submit">
                    </form>
                </div>
                <div class="littleAspectPicture" id="littleAspectLink3">
                    <div class="littlePicture" id="littleLink1">
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyLink11"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyLink12"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyLink13"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyLink14"></div>
                        </div>
                    </div>
                </div>
                <div class="littleAspectPicture" id="littleAspectLink4">
                    <div class="littlePicture" id="littleLink2">
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyLink21"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture" id="readyLink22"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyLink23"></div>
                        </div>
                        <div class="readyAspectPicture">
                            <div class="readyPicture readyPictureB" id="readyLink24"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="cell3Special">
            <form id="textForm" action="savePostServlet" method="post">
                <textarea class="input" id="textInput" placeholder="Text area"></textarea>
                <input class="formSubmit" type="submit">
            </form>
        </div>
    </div>
    <div class="cell4" id="cell4A">Scroll up<br>to create a post</div>
    <div class="cell23" id="cell23A">
        <h1 class="nameArea">${requestScope.name1}&nbsp${requestScope.name2}&nbsp${requestScope.surname}</h1>
    </div>
    <div class="cell60" id="cell60A">Scroll down<br>for timeline</div>
</div>
<div class="grid" id="previewPicturesGrid">
    <div id="controlGrid">
        <div id="controlCell1"></div>
        <div id="indexCell"></div>
        <div id="controlCell2"></div>
        <div class="lastCell">
            <button class="solutionButtons buttons buttonsOnPink" id="buttonOnPinkReady" type="button">
                <span class="textOnButton textOnPink">Ready</span>
            </button>
        </div>
    </div>
    <div id="cellPictures">
        <div class="previewPicture" id="previewPicture1">
            <div class="changeDimensions" id="changeDimensions1">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText1">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture1">
                <span class="deletePictureText textOnButton" id="deletePictureText1">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture2">
            <div class="changeDimensions" id="changeDimensions2">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText2">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture2">
                <span class="deletePictureText textOnButton" id="deletePictureText2">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture3">
            <div class="changeDimensions" id="changeDimensions3">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText3">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture3">
                <span class="deletePictureText textOnButton" id="deletePictureText3">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture4">
            <div class="changeDimensions" id="changeDimensions4">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText4">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture4">
                <span class="deletePictureText textOnButton" id="deletePictureText4">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture5">
            <div class="changeDimensions" id="changeDimensions5">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText5">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture5">
                <span class="deletePictureText textOnButton" id="deletePictureText5">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture6">
            <div class="changeDimensions" id="changeDimensions6">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText6">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture6">
                <span class="deletePictureText textOnButton" id="deletePictureText6">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture7">
            <div class="changeDimensions" id="changeDimensions7">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText7">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture7">
                <span class="deletePictureText textOnButton" id="deletePictureText7">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture8">
            <div class="changeDimensions" id="changeDimensions8">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText8">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture8">
                <span class="deletePictureText textOnButton" id="deletePictureText8">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture9">
            <div class="changeDimensions" id="changeDimensions9">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText9">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture9">
                <span class="deletePictureText textOnButton" id="deletePictureText9">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture10">
            <div class="changeDimensions" id="changeDimensions10">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText10">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture10">
                <span class="deletePictureText textOnButton" id="deletePictureText10">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture11">
            <div class="changeDimensions" id="changeDimensions11">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText11">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture11">
                <span class="deletePictureText textOnButton" id="deletePictureText11">Delete picture</span>
            </div>
        </div>
        <div class="previewPicture" id="previewPicture12">
            <div class="changeDimensions" id="changeDimensions12">
                <span class="changeDimensionsText textOnButton" id="changeDimensionsText12">Change aspect ratio</span>
            </div>
            <div class="deletePicture" id="deletePicture12">
                <span class="deletePictureText textOnButton" id="deletePictureText12">Delete picture</span>
            </div>
        </div>
    </div>
</div>
<div id="absoluteCover"></div>
</body>
</html>
