
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
}

function getLocalStorage()
{
  var tempArray = window.localStorage; //temparray is ALL things in the localstorage
  tempArray = JSON.parse(tempArray);
  var returnArray;//return array is ONLY the appointments in local storage.
  for(var i =0;i<=tempArray.length;i++)
  {
    if(tempArray[i].apptMEGT === true)//is this object flagged as an appointment for OUR app specifically?
    {
      returnArray.push(temparray[i]); //pop this object into the return array.
    }
    else
    {//for our app, apptMEGT will always be true. its a flag showing that this object is an appointment for OUR app.
        //if apptMEGT is ANYTHING except true... do NOT put it into the return array
    }
  }
  return returnArray;
}

//these are test appointments... for testing.
//var christmas = new Appointment("christmas", "1 northpole lane", "juno, Alaska", "dec. 25th", "8pm", "the jolliest time of the year!")
var myBirthday = new Appointment("my Birthday", "108 bennett Ct.", "Durham, NC.", "Feb 22nd", "10am", "GIVE ME PRESENTS!");
var myBirthday2 = new Appointment("my Birthday2", "108 bennett Ct.", "Durham, NC.", "Feb 22nd", "10am", "GIVE ME PRESENTS!");
var myBirthday3= new Appointment("my Birthday3", "108 bennett Ct.", "Durham, NC.", "Feb 22nd", "10am", "GIVE ME PRESENTS!");
var myBirthday4 = new Appointment("my Birthday4", "108 bennett Ct.", "Durham, NC.", "Feb 22nd", "10am", "GIVE ME PRESENTS!");

//console.log(christmas.apptTime);
//console.log(myBirthday.apptCityState);

//these are localstorage experiments. they dont work yet. they'll break your page.
window.localStorage.clear();

window.localStorage.setItem(myBirthday.apptTitle, JSON.stringify(myBirthday));
window.localStorage.setItem(myBirthday2.apptTitle, JSON.stringify(myBirthday2));
window.localStorage.setItem(myBirthday3.apptTitle, JSON.stringify(myBirthday3));
window.localStorage.setItem(myBirthday4.apptTitle, JSON.stringify(myBirthday4));
//window.localStorage.setItem(christmas.apptTitle, JSON.stringify(christmas));

console.log("localstorage is " + window.localStorage.length + " items long.");

//this should get my birthday appointment and put it into the dayofbirth variable.
var dayOfBirth = JSON.parse(window.localStorage.getItem((myBirthday.apptTitle)));
console.log("My birthday is on " + dayOfBirth.apptDate);

console.log(getLocalStorage());
