# NSAppointments App:

## HTML Plan:

### Landing Page:


* Title
   * NSAppointments
   * Icon-font for new Page
* Search Bar
   * magnifying glass to show that it's a Search
   * Placeholder Text?
* Appointment Thumbnails
   * Little bit of weather information
   * Title of Appointment
   * Time of Appointment
   * Little bit of Location information
* Divider to show that we're moving to new day
   * day information
   * border

### Make an Appointment Page:

* Title
   * icon font to navigate back to Landing Page
   * title to let user know we're on new appt Page
   * bottom border
* Form:
   * name of Appointment
   * Time of Appointment
      * day start (mm/dd)
      * precise time start (hh/mm)
      * duration
   * Location of Appointment
      * address
      * city/state/zip(do we need zip?)
   * Description
* Button for submitting a Form
   * name of btn (make NSAppt)

### Details Page:

* Title
   * icon back to landing Page
   * name of Appointment as title
   * btm border
* Details from Form
* weather information  
   * need to get the weather API
      * Tell it where we are (not really)
      * Tell it where we're going
      * tell it when we're going
   * need to display the weather
      * What it's projected to be
      * style accordingly? if sunny, sun, if rainy, rain?
      *
* Edit app Button
   * leads to edit Page
   * says something obvious, like edit NSAppointment

### Edit a Page:

* title  
   * icon to go to Details
   * another icon to go to landing page?
   * title
* form w/ info populated from previous form
   * as placeholder txt, but how?
* btm buttons
   * delete Appointment
   * save Appointment

## CSS Plan:

### Style All the things!

We're going to style. It's gonna be pretty cool. Aw yes. Lots of centering. Should everything be nested in a media query?

## JS Plan:

* click, to bring x, y, or z to the front.
* submit info to local
* get that sweet info, and display it all cool-like.
