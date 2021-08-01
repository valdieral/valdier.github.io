$(document).ready(function () {
    $("img").mousedown(function(){
        return false;
    });
    $(".about-section").waypoint(
        function (a) {
            "down" == a ? $("nav").addClass("sticky") : $("nav").removeClass("sticky");
        },
        { offset: "600px" }
    ),
        $(".mobile-nav-icon").click(function () {
            $(".main-nav").slideToggle(200),
                $(".mobile-nav-icon").hasClass("fa-bars")
                    ? ($(".mobile-nav-icon").addClass("fa-times"), $(".mobile-nav-icon").removeClass("fa-bars"))
                    : ($(".mobile-nav-icon").addClass("fa-bars"), $(".mobile-nav-icon").removeClass("fa-times"));
        });
});
