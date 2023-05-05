$(document).ready(function() {
    $("#myButton").click(function() {
      $("#myDiv").fadeOut();
    });
  });

  $(document).ready(function() {
    $(".nav-link").hover(
      function() {
        $(this).addClass("hover");
      },
      function() {
        $(this).removeClass("hover");
      }
    );
  });
  