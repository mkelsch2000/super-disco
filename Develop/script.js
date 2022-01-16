// display current date
var loadDate = function() {
  var date = moment().format("MMMM Do YY");
  $("#currentDay").text(date);
};

loadDate();