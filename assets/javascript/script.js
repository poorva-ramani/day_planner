var hourDiv = $(".hour-div");
timeArr=["10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];
$(document).ready(function(){
 for(var i=0;i<8;i++){
    $(".time").text(timeArr[i]);
    hourDiv.clone().appendTo(".container");
 }
});