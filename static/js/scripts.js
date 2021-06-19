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

    // DEVELOPMENT ACCORDION
    $(".development").click(function () {
        $(".developmentContent").show();
        $(".development").hide();
    });
    $(".developmentContent").click(function () {
        $(".development").show();
        $(".developmentContent").hide();
    });
    // END OF DEVELOPMENT ACCORDION

      // PRODUCT ACCORDION
      $(".product").click(function () {
        $(".productContent").show();
        $(".product").hide();
    });
    $(".productContent").click(function () {
        $(".product").show();
        $(".productContent").hide();
    });
    // END OF PRODUCT ACCORDION



});