$(document).ready(function () {
    // Handle Tab Navigation
    $(".tab-titles li").click(function () {
        const tabId = $(this).data("tab");

        $(".tab-titles li").removeClass("active");
        $(this).addClass("active");

        $(".tab-pane").removeClass("active");
        $("#" + tabId).addClass("active");
    });

    // Handle Accordion Toggle
    $(".accordion-btn").click(function () {
        $(this).next(".accordion-content").slideToggle();
    });
});
