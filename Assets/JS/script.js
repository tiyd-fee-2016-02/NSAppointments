
//This is the constructor for our appointment objects.
function Appointment(apptTitle, apptAddress, apptCityState, apptDate, apptTime, apptComments)
{
    this.apptTitle = apptTitle;
    this.apptAddress = apptAddress;
    this.apptCityState = apptCityState;
    this.apptDate = apptDate;
    this.apptTime = apptTime;
    this.apptComments = apptComments;
}

//these are test appointments... for testing.
var christmas = new Appointment("christmas!", "1 northpole lane", "juno, Alaska", "dec. 25th", "8pm", "the jolliest time of the year!")
var myBirthday = new Appointment("my Birthday", "108 bennett Ct.", "Durham, NC.", "Feb 22nd", "10am", "GIVE ME PRESENTS!");

console.log(christmas.apptTime);
console.log(myBirthday.apptCityState);

//these are localstorage experiments. they dont work yet. they'll break your page.
window.localStorage.setItem(MyBirthday.apptTitle, JSON.stringify(myBirthday));

//console.log("My birthday is on " + JSON.parse(global.localstorage.getItem((myBirthday.apptTitle).apptDate)));
