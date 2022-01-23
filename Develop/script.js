
// display current date
var loadDate = function() {
  var date = moment().format("MMMM Do YY");
  $("#currentDay").text(date);

  timeBlock();
};

// display time blocks
var timeBlock = function() {

  // get starting hour
var startTime = moment().subtract(3, 'hours').format('HH');

// convert value to integer
var parsed = parseInt(startTime);

  // calculate using integers
  for (; parsed <= 24; parsed++) {

    // convert integer sum to string value
    var startTime = parsed.toString()

    // convert 24 hour time to 12 hour time
    var rowTime = moment(startTime, 'hours').format("LT")

    // create div row
    var scheduleRow = $("<div>").addClass("time-block row");

    // create p element
    var scheduleTime = $("<p>")
      .addClass("hour col-1")
      .text(rowTime);

    // create textarea
    var scheduleText = $("<textarea>")
      .addClass("description col-10")
      .attr("id", "scheduleReminder");

    // create button
    var scheduleBtn = $("<button>")
      .addClass("saveBtn col-1")
      .attr("id", "save");


    // append p, textarea, and button to div row
    $(scheduleRow).append(scheduleTime, scheduleText, scheduleBtn);

    //append div row to container
    $(".container").append(scheduleRow);
  }
};

loadDate();

// save task to local storage.
$("#save").on("click", function(event) {
  event.target.getAttribute("save");
  var task = document.getElementById("scheduleReminder").value;
  console.log(task);

  if (task) {
    localStorage.setItem("schedule", JSON.stringify(task));
    console.log(localStorage);
  }
});


