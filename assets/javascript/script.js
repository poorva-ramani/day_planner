var closeBtn = document.querySelector("#close-btn");
var closeButton = document.querySelector(".close-button");
var modalText = document.querySelector("#modal-text");
var modalSubtext = document.querySelector("#modal-subtext");
var modal = document.querySelector(".modal");

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
    if ($(".time").eq(i).text() === moment().format('h A')) {
      $(this).css("background-color", "#FE2020");
    }
    else if ($(".time").eq(i).text() > moment().format('h A')) {
      $(this).css("background-color", "#96bf21");
    }
    else if ($(".time").eq(i).text() < moment().format('h A')) {
      $(this).css("background-color", "#ccc");

    }
  });
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
      console.log(restoredData);
      localStorage.setItem('plannerData', JSON.stringify(restoredData));
    });
  });
 $(".planner").each(function (i) {
  $(this).on("click", function () {
    modalText.style.color = "green";
    modalText.textContent = "✨ Correct Answer !!  ✨";
    modalSubtext.textContent = "You get 15 more seconds in your scoretime";
    this.onclick = toggleModal();
    closeButton.addEventListener("click", toggleModal);
    closeBtn.addEventListener("click", toggleModal);
  });
});

  renderEvents();
});

