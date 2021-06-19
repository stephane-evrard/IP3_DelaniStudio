// WORKING WITH JQUERY(ACCORDION)

$(document).ready(function () {
    $(".designContent").hide();
    $(".developmentContent").hide();
    $(".productContent").hide();

    // DESIGN ACCORDION
    $(".design").click(function () {
        $(".designContent").show();
        $(".design").hide();
    });
    $(".designContent").click(function () {
        $(".design").show();
        $(".designContent").hide();
    });
    // END OF DESIGN ACCORDION






});