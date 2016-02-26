$(function(){
   'use strict';


//This is the constructor for our appointment objects.
function Appointment(apptTitle, apptAddress, apptCityState, apptDate, apptTime, apptComments)
{
    this.apptTitle = apptTitle;
    this.apptAddress = apptAddress;
    this.apptCityState = apptCityState;
    this.apptDate = apptDate;
    this.apptTime = apptTime;
    this.apptComments = apptComments;
    this.apptMEGT =  true;
};

$(".fa-plus").on("click", function()
   {
      console.log("click?");
   $(".landing-page").addClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");
   $(".new-appointment-page").removeClass("off");

   }
);


var allAppts = [];
var tempAppt = new Appointment();

$("#appointment-submit").on("click", function(e){
   e.preventDefault();
   tempAppt.apptTitle = $("#apptNameInput").val();
   tempAppt.apptDate = $("#apptDateInput").val();
   tempAppt.apptTime = $("#apptTimeInput").val();
   tempAppt.apptAddress = $("#apptAddressInput").val();
   tempAppt.apptCityState = $("#apptCityStateInput").val();
   tempAppt.apptComments = $("#apptCommentsInput").val();
   allAppts.push(tempAppt);
   $(".new-appointment-page").addClass("off");
   $(".landing-page").removeClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");
   console.log(allAppts);
   landingPageUpdate();
});

function landingPageUpdate()
{
   $(".appointment-list").html(" ");
   for(var i = 0; i <= allAppts.length; i++)
   {
      $(".appointment-list").append("<a href='#'><li id='apptContainer' class = 'NSAppointment'><span id = 'weather-box'class = 'appointment-information off'><div id = 'appointment-time' class = 'appointment-information'>" + allAppts[i].apptTime + "</div><div id = 'weather-information' class = 'appointment-information'><i class='fa fa-cloud fa-3x'></i></div></span><span id ='apptInfoBox' class='off'><div id = 'appointment-title' class = 'appointment-information'>" + allAppts[i].apptTitle + "</div><div id = 'appointment-address' class = 'appointment-information'>" + allAppts[i].apptAddress + "</div><div id = 'appointment-city-state' class = 'appointment-information'>&nbsp;&nbsp;&nbsp;&nbsp;" + allAppts[i].apptCityState + "</div></span></li></a>");
   } //end for loop
}; //end landingPageUpdate

// this puts input into localStorage
//
// $("#appointment-submit").on("click", function(e){
//    e.preventDefault();
//
//    localStorage.setItem("name", JSON.stringify($("#appointment-name").val()));
//    localStorage.setItem("date", JSON.stringify($("#appointment-date").val()));
//    localStorage.setItem("time", JSON.stringify($("#appointment-time").val()));
//    localStorage.setItem("address", JSON.stringify($("#appointment-address").val()));
//    localStorage.setItem("citystate", JSON.stringify($("#appointment-city-state").val()));
//    localStorage.setItem("comments", JSON.stringify($("#appointment-comments").val()));
//    console.log(localStorage);
// });

//========================GREG BELOW===========================================================================MATT ABOVE=================





}); //end file
