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

    $(".ranking").each(function () {

        var value = Number($(this).html());
        var percentage = (value * .0909 * ($(this).width() - 10)) + "px";
        $(this).html("");
        $(this).append("<div class='ranking-bar' style='width:" + percentage + "'>" + value + "</div>");
//        $(this).css("width", percentage);
    });

    let height = $(document).height();
    $("#content-container").height(height);
})

