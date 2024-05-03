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

function beforePrint() {
    // $("#content-container").css('background-color', "#33dd33");
    $('#fullpage-wrapper').height(1000);
    $('body').height(1053);
    $("#content-container").height(1002);
}

function afterPrint() {
    // $("#content-container").css('background-color', "#dd8833");
    $("#content-container").height(height);
    $('#fullpage-wrapper').height(height);
    $('body').height(height+80);
}

function getBGImageUrlForNumber(number) {
    return 'url("/images/bg' + number + '.jpg")';
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        let url = getBGImageUrlForNumber(this);
        console.log("preloading: " + url);
        // $('<img />').attr('src',url).appendTo('body').css('display','none');
    });
}

// $(window).load(function(){

// });



function getBGImageUrl() {
    let numBackgrounds = 9;
    let bgChoosen = Math.floor(Math.random() * numBackgrounds) + 1;
    return 'url("/images/bg' + bgChoosen + '.jpg")';
}
var height;

$(document).ready(function() {
    let images = ['1','2','3','4','5','6','7','8','9'];
    preload(images);

    $('#fullpage-wrapper').css('background-image', getBGImageUrl());

    setInterval(function() {
        let newUrl = getBGImageUrl();
        $('#fullpage-wrapper').css({"background-image": getBGImageUrl()});

        // $('#fullpage-wrapper').fadeTo(4000, 0.5 , function()
        // {
        //     $(this).css('background-image', newUrl);
        // }).fadeTo(4000, 1);
    }, 1000 * 60);



    $(".ranking").each(function () {

        var yearsData = $(this).html();
        // var yearsData = $(this).attr('data-yrs');
        var hideNumber = false;
        if (yearsData.includes("-")) {
            hideNumber = true
            yearsData = yearsData.replace('-','');
        }

        var value = Number(yearsData);
        var percentage = (value * (1.0/14.0) * ($(this).width() - 10)) + "px";
        $(this).html("");
        var suffix = value < 5 ? " " : " yrs"
        var stringForLabel = value + suffix;
        if (hideNumber) {
            stringForLabel = ""
        }
        $(this).append("<div class='ranking-bar' style='width:" + percentage + "'><div class='rank-yrs'>" + stringForLabel + "</div></div>");
//        $(this).css("width", percentage);
    });
    height = $(document).height();
    // let height = $(document).height();
    $("#content-container").height(height);

    // $('#fullpage-wrapper').css("top", "20px");
})

