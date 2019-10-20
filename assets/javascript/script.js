var hourDiv = $(".hour-div");
var hour = ["9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
$(document).ready(function () {
  $("#date-time").text(moment().format('dddd,  MMMM Do YYYY'));
  //creating 9 divs
  for (var i = 1; i < hour.length; i++) {
    hourDiv.clone().appendTo(".container");
  }

  var planner = $(".planner");
  var time = $(".time");

  // displaying time in divs  
  $.each(time, function (i) {
    $(this).attr("data-letter", i);
    $(this).text(hour[i]);
  });

  $.each(planner, function (i) {
    if ($(".time").eq(i).text() === moment().format('h A')) {
      console.log("equal" + $(".time").eq(i).text())
      $(this).css("background-color", "#FE2020")
    }
    else if ($(".time").eq(i).text() < moment().format('h A')) {
      console.log("before" + $(".time").eq(i).text())

      $(this).css("background-color", "#0E86D4")
    }
    else if ($(".time").eq(i).text() > moment().format('h A')) {
      console.log("after" + $(".time").eq(i).text())
      $(this).css("background-color", "#96bf21")
    }
  });

  var plannerData =
  {
    obj:
      [
        { time: "9 AM", eventDetail: "" },
        { time: "10 AM", eventDetail: "" },
        { time: "11 AM", eventDetail: "" },
        { time: "12 AM", eventDetail: "" },
        { time: "1 PM", eventDetail: "" },
        { time: "2 PM", eventDetail: "" },
        { time: "3 PM", eventDetail: "" },
        { time: "4 PM", eventDetail: "" },
        { time: "5 PM", eventDetail: "" }
      ]
  };
  
  var restoredData = JSON.parse(localStorage.getItem('plannerData'));

  function renderEvents() {
     restoredData = JSON.parse(localStorage.getItem('plannerData'));
     localStorage.setItem('plannerData', JSON.stringify(plannerData));
    for (var j = 0; j < restoredData.obj.length; j++) {
      $(".planner").eq(j).text(restoredData.obj[j].eventDetail);
    }
  }

  $(".save").each(function (i) {
    $(this).on("click", function () {
      var restoredData = JSON.parse(localStorage.getItem('plannerData'));
      restoredData.obj[i].eventDetail = $(".planner").eq(i).val();
      console.log(restoredData)
      localStorage.setItem('plannerData', JSON.stringify(restoredData));
    });
  });

  renderEvents();

  // $.each(planner, function (i) {
  //     $(this).text(plannerData)
  // });

});