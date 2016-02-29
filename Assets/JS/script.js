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
for(var p=0;p<localStorage.length;p++)
{
  var keyname = localStorage.key(p);
  var temptemp = JSON.parse(localStorage.getItem(keyname));//this pulls the thing I JUST PUT INTO LOCAL STORAGE into a new variable: temptemp
  allAppts.push(temptemp);//this pushes temptemp into the allappts array.
}
landingPageUpdate();//updates the landing page with the localstorage appts.




$(".fa-plus").on("click", function()//if user clicks '+' go to add new appointment page.
   {
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

  //since FOR SOME REASON the allAppts array isnt working. what the FLIP?!. we just grab info about the appt you clicked on directly from local storage.
  var apptDetail = JSON.parse(localStorage.getItem("apptMEGL-" + clickedTitle));


  $("#view-appointment-name").text(apptDetail.apptTitle);
  $("#view-appointment-date").text(apptDetail.apptDate);
  $("#view-appointment-time").text(apptDetail.apptTime);
  $("#view-appointment-address").text(apptDetail.apptAddress);
  $("#view-appointment-city").text(apptDetail.apptCity);
  $("#view-appointment-state").text(apptDetail.apptState);
  $("#view-appointment-comments").text(apptDetail.apptComments);
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
      $(".appointment-list").append("<a href='#' class='CLICKME' id='" + allAppts[i].apptTitle + "'><li id='apptContainer' class = 'NSAppointment'><span id = 'weather-box'class = 'appointment-information off'><div id = 'appointment-time' class = 'appointment-information'>" + allAppts[i].apptTime + "</div><div id = 'weather-information' class = 'appointment-information'><i class='fa fa-cloud fa-3x'></i></i></div></span><span id ='apptInfoBox' class='off'><div id = 'appointment-title' class = 'appointment-information'>" + allAppts[i].apptTitle + "</div><div id = 'appointment-address' class = 'appointment-information'>" + allAppts[i].apptAddress + "</div><div id = 'appointment-city' class = 'appointment-information'>@" + allAppts[i].apptCity + ", " + allAppts[i].apptState + "</div></span></li></a>");
      // localStorage.setItem("appt"+i+"", JSON.stringify(tempAppt));
      //console.log(localStorage);

   } //end for loop
}; //end landingPageUpdate

// user clicks on edit appt from appt details page: navigates to the edit appointment page
$(".details-page-footer").on("click", function()
{
   $(".landing-page").addClass("off");
   $(".details-page").addClass("off");
   $(".edit-page").removeClass("off");
   $(".new-appointment-page").addClass("off");

   //console.log(clickedTitle);
   var tempForEditing = JSON.parse(localStorage.getItem("apptMEGL-" + clickedTitle));
   //console.log(tempForEditing);

   $("#edit-appointment-name input").attr("placeholder", tempForEditing.apptTitle);
   $("#edit-appointment-date input").attr("placeholder", tempForEditing.apptDate);
   $("#edit-appointment-time input").attr("placeholder", tempForEditing.apptTime);
   $("#edit-appointment-address input").attr("placeholder", tempForEditing.apptAddress);
   $("#edit-appointment-city input").attr("placeholder", tempForEditing.apptCity);
   $("#edit-appointment-state input").attr("placeholder", tempForEditing.apptState);
   $("#edit-appointment-comments textarea").attr("placeholder", tempForEditing.apptComments);


});

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
   $('#weather-details').html(json.current_observation.weather);
   //this gets the current observation weather and puts it in the weather box on the landing page.
   $('#weather-details').append('<img src = ' + json.current_observation.icon_url + '>'); //gets the icon from wunderground
   $('#weather-details').append('<p>' + json.current_observation.temp_f + '</p>');
   $('#weather-details').append('<p>' + json.current_observation.feelslike_f + '</p>');
});






// this whole section is to check and see if the appt is after current time

// this gets the time and puts it into an array

var today = new Date; //today's date
var todayString = today.toJSON(); //today's date in a string
var dateTimeArray = []; //an array for today's date

var apptTime;




function convertToTimeArray(dateTime)  //Converting JSON date to workable strings.
{
  var dateTimeArray = [];
  dateTimeArray.push(dateTime.substr(0, 4));  //[0] year
  dateTimeArray.push(dateTime.substr(5, 2));  //[1] month
  dateTimeArray.push(dateTime.substr(8, 2));  //[2] day
  dateTimeArray.push(dateTime.substr(11, 2));  //[3] hour
  dateTimeArray.push(dateTime.substr(14, 2));  //[4] minute
  dateTimeArray.push(dateTime.substr(17, 2));  //[5] second
  return dateTimeArray;
};


// allAppts.apptTime.toJSON();

dateTimeArray = convertToTimeArray(todayString); //current time string
// apptTimeArray = convertToTimeArray(todayString); //time of appt

console.log(dateTimeArray);

var selectedApptTime = {};

var selectedApptTime = JSON.parse(localStorage.getItem("apptMEGL-" + tempAppt.apptTitle)).apptTime;

// this turns the string month into a number month
var selectedApptDate = [];
var selectedApptDate = JSON.parse(localStorage.getItem("apptMEGL-" + tempAppt.apptTitle)).apptDate;

for(var q=0;q<localStorage.length;q++)
{

   switch(selectedApptDate[q].substring(3,7)){
      case 'Jan':
         apptMonth = 01;
         break;
      case 'Feb':
         apptMonth = 02;
         break;
      case 'Mar':
         apptMonth = 03;
         break;
      case 'Apr':
         apptMonth = 04;
         break;
      case 'May':
         apptMonth = 05;
         break;
      case 'Jun':
         apptMonth = 06;
         break;
      case 'Jul':
         apptMonth = 07;
         break;
      case 'Aug':
         apptMonth = 08;
         break;
      case 'Sep':
         apptMonth = 09;
         break;
      case 'Oct':
         apptMonth = 10;
         break;
      case 'Nov':
         apptMonth = 11;
         break;
      case 'Dec':
         apptMonth = 12;
         break;
};

for(var q=0;q<localStorage.length;q++)
{
   var keyname = localStorage.key(q); //this gets the length of local storage
   var temptemp = JSON.parse(localStorage.getItem(keyname));//this parses all the items in local storage, puts them into temptemp


   }
   var appointmentDay = temptemp.apptDate.substring(0,2);
   var appointmentTime = temptemp.apptTime;
   var appointmentMonth = temptemp.apptDate.//thsi is wehre I get the month
   var appointmentYear = temptemp.apptDate.substring();//how do I know it's the last 4?



      if( >= dateTimeArray[0] && appt month >= dateTimeArray[1] && appointmentDay >= dateTimeArray[2] && appointmentTime < (dateTimeArray[3]-1)) //if appointment time is less than current hours - 1 hour
      {
         localStorage.removeItem("apptMEGL-" + tempAppt.apptTitle);
      };
};

// to delete an appointment

$('.delete-appointment-button')on('click', function())
{

}


}); //end file
