

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstInput = $("input#first").val();
    var lastInput = $("input#last").val();
    var streetInput= $("input#street").val();
    var stateInput = $("input#state").val();
    var cityInput = $("input#city").val();
    var zipInput = $("input#zip").val();
    var commentInput = $("input#comment").val();
    var commentUpper = commentInput;
    commentUpper = commentUpper.toUpperCase();

    $(".first").text(firstInput);
    $(".last").text(lastInput);
    $(".street").text(streetInput);
    $(".state").text(stateInput);
    $(".city").text(cityInput);
    $(".zip").text(zipInput);
    $(".comment").text(commentInput);
    $(".commentUpper").text(commentUpper);
    $("#feedback").show();
    // var firstUpper = first.toUpperCase




  // var catName = firstInput + lastInput;
    event.preventDefault();
  });

});
