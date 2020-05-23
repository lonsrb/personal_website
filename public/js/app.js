// function resize()
// {
//     var heights = window.innerHeight;
//     alert("heights: " + heights);
//     document.getElementById("content-container").style.height = heights -40 + "px";
// }
// resize();
// window.onresize = function() {
//     resize();
// };

$(document).ready(function() {
    let numBackgrounds = 9;
    let bgChoosen = Math.floor(Math.random() * numBackgrounds) + 1;
    document.body.style.backgroundImage = 'url("/images/bg' + bgChoosen + '.jpg")';


    $(".ranking").each(function () {

        var valueAsString = $(this).html();
        var hideNumber = false;
        if (valueAsString.includes("-")) {
            hideNumber = true
            valueAsString = valueAsString.replace('-','');
        }

        var value = Number(valueAsString);
        var percentage = (value * (1.0/12.0) * ($(this).width() - 10)) + "px";
        $(this).html("");
        if (hideNumber) {
            value = ""
        }
        $(this).append("<div class='ranking-bar' style='width:" + percentage + "'>" + value + "</div>");
//        $(this).css("width", percentage);
    });

    let height = $(document).height();
    $("#content-container").height(height);
})

