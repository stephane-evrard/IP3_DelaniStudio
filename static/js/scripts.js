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

    //PORTFOLIO HOVER 
    $(".portfolio1Title").hide();
    $(".portfolio1").hover(function (e) {
        $(".portfolio1Title").show();
    }, function () {
        $(".portfolio1Title").hide();
    });

    $(".portfolio2Title").hide();
    $(".portfolio2").hover(function (e) {
        $(".portfolio2Title").show();
    }, function () {
        $(".portfolio2Title").hide();
    });

    $(".portfolio3Title").hide();
    $(".portfolio3").hover(function (e) {
        $(".portfolio3Title").show();
    }, function () {
        $(".portfolio3Title").hide();
    });

    $(".portfolio4Title").hide();
    $(".portfolio4").hover(function (e) {
        $(".portfolio4Title").show();
    }, function () {
        $(".portfolio4Title").hide();
    });

    $(".portfolio5Title").hide();
    $(".portfolio5").hover(function (e) {
        $(".portfolio5Title").show();
    }, function () {
        $(".portfolio5Title").hide();
    });

    $(".portfolio6Title").hide();
    $(".portfolio6").hover(function (e) {
        $(".portfolio6Title").show();
    }, function () {
        $(".portfolio6Title").hide();
    });

    $(".portfolio7Title").hide();
    $(".portfolio7").hover(function (e) {
        $(".portfolio7Title").show();
    }, function () {
        $(".portfolio7Title").hide();
    });

    $(".portfolio8Title").hide();
    $(".portfolio8").hover(function (e) {
        $(".portfolio8Title").show();
    }, function () {
        $(".portfolio8Title").hide();
    });
    //END OF PORTFOLIO HOVER 


});