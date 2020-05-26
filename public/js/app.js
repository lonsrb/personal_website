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

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
$(['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','bg6.jpg','bg7.jpg','bg8.jpg','bg9.jpg']).preload();


function getBGImageUrl() {
    let numBackgrounds = 9;
    let bgChoosen = Math.floor(Math.random() * numBackgrounds) + 1;
    return 'url("/images/bg' + bgChoosen + '.jpg")';
}
$(document).ready(function() {
    $('#fullpage-wrapper').css('background-image', getBGImageUrl());

    setInterval(function() {
        let newUrl = getBGImageUrl();
        $('#fullpage-wrapper').css({"background-image": getBGImageUrl()});

        // $('#fullpage-wrapper').fadeTo(4000, 0.5 , function()
        // {
        //     $(this).css('background-image', newUrl);
        // }).fadeTo(4000, 1);
    }, 9000);



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
    // $('#fullpage-wrapper').css("top", "20px");
})

