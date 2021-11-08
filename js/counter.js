var eventFired = false,
  objectPositionTop = $("#counter").offset().top / 2;

$(window).on("scroll", function () {
  var currentPosition = $(document).scrollTop();
  if (currentPosition > objectPositionTop && eventFired === false) {
    eventFired = true;
    $(".stat-data").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
});
