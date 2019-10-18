var hourDiv = $(".hour-div");
timeArr=["9AM","10AM","11AM","12AM","1PM","2PM","3PM","4PM","5PM"];
$(document).ready(function(){

$("#date-time").text(moment().format('dddd,  MMMM Do YYYY'));
            
 for(var i=0;i<8;i++){
    hourDiv.clone().appendTo(".container");
 }
        $.each(timeArr, function(index,value){
            console.log(index);
            console.log(value);
            $(".time").text(value);
        });

        // $.each($('.productDescription'), function (index, value) {
        //     console.log(index + ':' + $(value).text());
        //     });

        //     $('a').each(function (index, value){
        //         console.log($(this).attr('href'));
        //         });
});