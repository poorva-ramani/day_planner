var hourDiv = $(".hour-div");
var hour = ["09 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
$(document).ready(function () {
  $("#date-time").text(moment().format('dddd,  MMMM Do YYYY'));
  //creating 9 divs
  for (var i = 1; i < hour.length; i++) {
    hourDiv.clone().appendTo(".container");
  }

  function toggleModal() {
    modal.classList.toggle("show-modal");
  }

  var planner = $(".planner");
  var time = $(".time");

  // displaying time in divs  
  $.each(time, function (i) {
    $(this).text(hour[i]);
  });

  var plannerData =
  {
    obj:
      [
        { time: "9 AM", eventDetail: "" },
        { time: "10 AM", eventDetail: "" },
        { time: "11 AM", eventDetail: "" },
        { time: "12 PM", eventDetail: "" },
        { time: "1 PM", eventDetail: "" },
        { time: "2 PM", eventDetail: "" },
        { time: "3 PM", eventDetail: "" },
        { time: "4 PM", eventDetail: "" },
        { time: "5 PM", eventDetail: "" }
      ]
  };
  
  $.each(planner, function (i) {
    var timeslot=$(".time").eq(i).text() ;
    if (timeslot === moment().format('H A')) {
      $(this).css("background-color", "#FE2020");
    }
    else if (moment(timeslot, ["h A"]).format("HH") > moment().format('H A')) {
      $(this).css("background-color", "#96bf21");
    }
    else if (moment(timeslot, ["h A"]).format("HH") < moment().format('H A')) {
      $(this).css("background-color", "#ccc");
    }
  });

  function renderEvents() {
    restoredData = JSON.parse(localStorage.getItem('plannerData'));
    localStorage.setItem('plannerData', JSON.stringify(plannerData));
    console.log()
    for (var j = 0; j < restoredData.obj.length; j++) {
      $(".planner").eq(j).text(restoredData.obj[j].eventDetail);
    }
    localStorage.setItem('plannerData', JSON.stringify(restoredData));
  }

  $(".save").each(function (i) {
    $(this).on("click", function () {
      var restoredData = JSON.parse(localStorage.getItem('plannerData'));
      restoredData.obj[i].eventDetail = $(".planner").eq(i).val();
      localStorage.setItem('plannerData', JSON.stringify(restoredData));
    });
  });

  renderEvents();
});

