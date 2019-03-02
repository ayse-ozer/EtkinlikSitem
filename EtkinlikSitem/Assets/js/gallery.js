$(document).ready(function () {

    //İmage - gallery 1 

    $("#gallery-class1").click(function () {

        $("#gallery").hide(1000);
        $("#gallery-2").hide(1000);
        $("#gallery-1").show(1000);
    });
    $("#turn-back-1").click(function () {

        $("#gallery").show(1000);
        $("#gallery-1").hide(1000);
    });

    //İmage - gallery 2

    $("#gallery-class2").click(function () {

        $("#gallery").hide(1000);
        $("#gallery-1").hide(1000);
        $("#gallery-2").show(1000);
    });
    $("#turn-back-2").click(function () {

        $("#gallery").show(1000);
        $("#gallery-2").hide(1000);
    });

    //İmage - gallery 3

    $("#gallery-class3").click(function () {

        $("#gallery").hide(1000);
        $("#gallery-1").hide(1000);
        $("#gallery-2").hide(1000);
        $("#gallery-3").show(1000);
    });
    $("#turn-back-3").click(function () {

        $("#gallery").show(1000);
        $("#gallery-3").hide(1000);
    });


});