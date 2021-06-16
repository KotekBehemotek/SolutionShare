document.addEventListener("DOMContentLoaded", function () {

    let universalOb = {
        cells: ["cell2", "cell4A", "cell23A", "cell60A"],
        postElements: ["postArea"],
    };

    function getById(idInHTML) {
        return document.getElementById(idInHTML);
    }

    function getByClassName(classNameInHTML, number) {
        return document.getElementsByClassName(classNameInHTML).item(number);
    }

    document.body.addEventListener("wheel", function (event) {
        getById(universalOb.cells[1]).style.opacity = "0.0";
        getById(universalOb.cells[2]).style.opacity = "0.0";
        getById(universalOb.cells[3]).style.opacity = "0.0";
        if (event.deltaY < 0) {
            if (window.getComputedStyle(getByClassName(universalOb.cells[0])).getPropertyValue("opacity") !== "1") {
                setTimeout(function () {
                    getById(universalOb.cells[1]).style.display = "none";
                    getById(universalOb.cells[2]).style.display = "none";
                    getById(universalOb.cells[3]).style.display = "none";
                    getByClassName(universalOb.cells[0], 0).style.gridColumn = "5 / 12";
                    getByClassName(universalOb.cells[0], 0).style.gridRow = "1 / 16";
                    getByClassName(universalOb.cells[0]).style.display = "grid";
                }, 200);
                setTimeout(function () {
                    getByClassName(universalOb.cells[0]).style.opacity = "1.0";
                }, 300);
            }
        } else if (event.deltaY > 0) {
            if (window.getComputedStyle(getByClassName(universalOb.cells[0])).getPropertyValue("opacity") === "1") {
                setTimeout(function () {
                    getByClassName(universalOb.cells[0]).style.opacity = "0.0";
                }, 200);
                setTimeout(function () {
                    getById(universalOb.cells[1]).style.display = "inherit";
                    getById(universalOb.cells[2]).style.display = "inherit";
                    getById(universalOb.cells[3]).style.display = "inherit";
                    getByClassName(universalOb.cells[0], 0).style.gridColumn = "2 / 3";
                    getByClassName(universalOb.cells[0], 0).style.gridRow = "1 / 2";
                    getByClassName(universalOb.cells[0]).style.display = "none";
                }, 300);
            }
        }
    });
});