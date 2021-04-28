$(document).ready(() => {
  $("#cart").on("click", () => {
    $("#cartMenu").show();
    $(".dropdown-menu").on("mouseleave", () => {
      $("#cartMenu").hide();
    });
  });

  $("#account").on("click", () => {
    $("#accountMenu").show();
    $(".dropdown-menu").on("mouseleave", () => {
      $("#accountMenu").hide();
    });
  });

  $("#help").on("click", () => {
    $("#helpMenu").show();
    $(".dropdown-menu").on("mouseleave", () => {
      $("#helpMenu").hide();
    });
  });
});
