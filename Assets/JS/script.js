$(function(){
   'use strict';
   localStorage.clear();

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

$(".fa-plus").on("click", function()//if user clicks '+' go to add new appointment page.
   {
      console.log("click?");
   $(".landing-page").addClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");
   $(".new-appointment-page").removeClass("off");

   }
);

$("#apptDateInput").pickadate();//this uses a js plugin to get the date and time from the user.
$("#apptTime").pickatime();


var allAppts= [];
var tempAppt = new Appointment();
// This function takes the form info and puts it into an object tempAppt, then goes back to the landing page

$("#appointment-submit").on("click", function(e){
   e.preventDefault();
   tempAppt.apptTitle = $("#apptNameInput").val();
   tempAppt.apptDate = $("#apptDateInput").val();
   tempAppt.apptTime = $("#apptTime").val();
   tempAppt.apptAddress = $("#apptAddressInput").val();
   tempAppt.apptCityState = $("#apptCityStateInput").val();
   tempAppt.apptComments = $("#apptCommentsInput").val();

   localStorage.setItem(("apptMEGL-" + tempAppt.apptTitle), JSON.stringify(tempAppt));//puts tempappt into local storage.
   var temptemp = JSON.parse(localStorage.getItem("apptMEGL-" + tempAppt.apptTitle));//this pulls the thing I JUST PUT INTO LOCAL STORAGE into a new variable: temptemp

   allAppts.push(temptemp);//this pushes temptemp into the allappts array.

   //WHY DOES IT WORK THIS WAY?! i cant just take tempappt and push it into the allappts array. it overwrites all elements in allappts with tempappt. but If i put tempappt into local storage FIRST, then pull it down from localstorage into a NEW variable, and the push THAT vairable into allappts... it works fine! WTF!?

   $(".new-appointment-page").addClass("off");
   $(".landing-page").removeClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");

   //console.log(tempAppt);

   landingPageUpdate();
});

// this function adds a new item in the landing page
function landingPageUpdate()
{
   $(".appointment-list").html(" ");//clears the current appointments on the landing page.
   for(var i = 0; i < allAppts.length; i++)
   {
      $(".appointment-list").append("<a href='#'><li id='apptContainer' class = 'NSAppointment'><span id = 'weather-box'class = 'appointment-information off'><div id = 'appointment-time' class = 'appointment-information'>" + allAppts[i].apptTime + "</div><div id = 'weather-information' class = 'appointment-information'><i class='fa fa-cloud fa-3x'></i></div></span><span id ='apptInfoBox' class='off'><div id = 'appointment-title' class = 'appointment-information'>" + allAppts[i].apptTitle + "</div><div id = 'appointment-address' class = 'appointment-information'>" + allAppts[i].apptAddress + "</div><div id = 'appointment-city-state' class = 'appointment-information'>&nbsp;&nbsp;&nbsp;&nbsp;@" + allAppts[i].apptCityState + "</div></span></li></a>");
      // localStorage.setItem("appt"+i+"", JSON.stringify(tempAppt));
      //console.log(localStorage);

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

// This navigates back to the landing page from the new appointment page and the edit page

$(".fa-angle-left").on("click", function()
   {
      console.log("click?");
   $(".landing-page").removeClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");
   $(".new-appointment-page").addClass("off");
   }
);

// this navigates to edit page from landing page

$("#apptInfoBox").on("click", function()
   {
      console.log("click?");
   $(".landing-page").addClass("off");
   $(".details-page").removeClass("off");
   $(".edit-page").addClass("off");
   $(".new-appointment-page").addClass("off");
   }
);

// this navigates to the edit appointment page

$(".details-page-footer").on("click", function()
{
      console.log("click?");
   $(".landing-page").addClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").removeClass("off");
   $(".new-appointment-page").addClass("off");
   }
);

// This takes the tempAppt variable and puts it into local Storage

var returnObject = {};

for(var num = 0; num <= localStorage.length; num++)
{
   console.log(JSON.parse(localStorage.getItem('appt'+num+'')));
};



}); //end file
