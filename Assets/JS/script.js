$(function(){
   'use strict';
   //localStorage.clear();

//This is the constructor for our appointment objects.
function Appointment(apptTitle, apptAddress, apptCity, apptState, apptDate, apptTime, apptComments)
{
    this.apptTitle = apptTitle;
    this.apptAddress = apptAddress;
    this.apptCity = apptCity;
    this.apptState = apptState;
    this.apptDate = apptDate;
    this.apptTime = apptTime;
    this.apptComments = apptComments;
    this.apptMEGT =  true;
};

//this section of code pulls all the appointments from localStorage and puts them in allAppts.
var allAppts= [];
//this code is mostly copy pasta'd from the WORKING code below.
for(var p=0;p<=localStorage.length-1;p++)
{
  var keyname = localStorage.key(p);
  var temptemp = JSON.parse(localStorage.getItem(keyname));//this pulls the thing I JUST PUT INTO LOCAL STORAGE into a new variable: temptemp
  allAppts.push(temptemp);//this pushes temptemp into the allappts array.
}
landingPageUpdate();




$(".fa-plus").on("click", function()//if user clicks '+' go to add new appointment page.
   {
      console.log("click?");
   $(".landing-page").addClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").addClass("off");
   $(".new-appointment-page").removeClass("off");

   }
);


var clickedTitle;
//when you click on an appointment, go to it's detail page.
$(".appointment-list").on("click", ".CLICKME", function(e){
  e.preventDefault();
  clickedTitle = $(this).attr("id");//this is the title of the appointment we clicked on.

  //go to the details page
  $(".landing-page").addClass("off");
  $(".details-page").removeClass("off");
  $(".edit-page").addClass("off");
  $(".new-appointment-page").addClass("off");

  //since FOR SOME REASON the allAppts array isnt working. FUCK. we just grab info about the appt you clicked on directly from local storage.
  var apptDetail = JSON.parse(localStorage.getItem("apptMEGL-" + clickedTitle));

  $("#view-appointment-name").text(apptDetail.apptTitle);
  $("#view-appointment-time").text(apptDetail.apptTime);
  $("#view-appointment-address").text(apptDetail.apptAddress);
  $("#view-appointment-city").text(apptDetail.apptCity);
  $("#view-appointment-state").text(apptDetail.apptState);
  $("#view-appointment-comment").text(apptDetail.apptComments);


});

$("#apptDateInput").pickadate();//this uses a js plugin to get the date and time from the user.
$("#apptTime").pickatime();


var tempAppt = new Appointment();
// This function takes the form info and puts it into an object tempAppt, then goes back to the landing page

$("#appointment-submit").on("click", function(e){
   e.preventDefault();
   tempAppt.apptTitle = $("#apptNameInput").val();
   tempAppt.apptDate = $("#apptDateInput").val();
   tempAppt.apptTime = $("#apptTime").val();
   tempAppt.apptAddress = $("#apptAddressInput").val();
   tempAppt.apptCity = $("#apptCityInput").val();
   tempAppt.apptState = $("#apptStateInput").val();
   tempAppt.apptComments = $("#apptCommentsInput").val();

   localStorage.setItem(("apptMEGL-" + tempAppt.apptTitle), JSON.stringify(tempAppt));//puts tempappt into local storage. we use the prefix "ApptMEGL-" to make sure its an appointment object for OUR app specifically. just in case there are other appointment-like objects in local storage from other websites.

   var temptemp = JSON.parse(localStorage.getItem("apptMEGL-" + tempAppt.apptTitle));//this pulls the thing I JUST PUT INTO LOCAL STORAGE into a new variable: temptemp

   allAppts.push(temptemp);//this pushes temptemp into the allappts array.

   //console.log(allAppts[allAppts.length-1]);//this prints out the appointment we just added FROM allAppts. PROOF IT IS GETTING SOMETHING into itself!

   //WHY DOES IT WORK THIS WAY?! i cant just take tempappt and push it into the allappts array. it overwrites all elements in allappts with tempappt. but If i put tempappt into local storage FIRST, then pull it down from localstorage into a NEW variable, and the push THAT vairable into allappts... it works fine! WTF!?

   //ALSO! ALSO! why cant i access allAppts consistently?! half the time the console tells me it's undefined. but it CLEARLY has information in it! like... seriously. wtf mate? its a global variable. i define it RIGHT at the tippy top of this file. i. have. no. idea.

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
      $(".appointment-list").append("<a href='#' class='CLICKME' id='" + allAppts[i].apptTitle + "'><li id='apptContainer' class = 'NSAppointment'><span id = 'weather-box'class = 'appointment-information off'><div id = 'appointment-time' class = 'appointment-information'>" + allAppts[i].apptTime + "</div><div id = 'weather-information' class = 'appointment-information'>" + "</i></div></span><span id ='apptInfoBox' class='off'><div id = 'appointment-title' class = 'appointment-information'>" + allAppts[i].apptTitle + "</div><div id = 'appointment-address' class = 'appointment-information'>" + allAppts[i].apptAddress + "</div><div id = 'appointment-city' class = 'appointment-information'>@" + allAppts[i].apptCity + ", " + allAppts[i].apptState + "</div></span></li></a>");
      // localStorage.setItem("appt"+i+"", JSON.stringify(tempAppt));
      //console.log(localStorage);

   } //end for loop
}; //end landingPageUpdate

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

// This takes the item in local Storage and puts it into an object that we can manipulate

var returnInformation = {};

for(var num = 0; num <= localStorage.length; num++)
{

   returnInformation = JSON.parse(localStorage.getItem('appt'+num+''));
   console.log(JSON.parse(localStorage.getItem('appt'+num+'')));
};

console.log(returnInformation);

var today = new Date().toJSON();

// This is the get wunderground api information JS

// var getForecastInfo = function(date, time, city, state){
//    $.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/" + state + "/" + city + ".json", function(json);
//    // if(time.indexof(PM) != -1)
//    // {
//    //
//    // }
// }
$.getJSON("http://api.wunderground.com/api/c5a1b3a2f25bb11e/conditions/q/NC/durham.json", function(json)
{
   $('#weather-information').html(json.current_observation.weather);
   //this gets the current observation weather and puts it in the weather box on the landing page.
   $('#weather-information').html(json.current_observation.icon_url); //gets the icon from wunderground
   $('#weather-information').html(json.current_observation.temp_f);
   $('#weather-information').html(json.current_observation.feelslike_f);
});

// this sanitizes our city and state inputs, so we can effectively use the API
// if()
//  {
//
// };

}); //end file
