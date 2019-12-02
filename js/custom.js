
  
  var submission = function() {
    var maleNames = ['Kwasi', 'Kwandwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
  
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    if (date-of-birth === "" || date-of-birth < 1 || date-of-birth > 12 || month === "" || month < 0 || month > 31 || year-of-birth === "" || year-of-birth.length > 4 || name === ""){
      alert("Confirm that you have entered the correct information!")
  
    var date = document.getElementById("d").value;
    var month = document.getElementById("m").value;
    var year = document.getElementById("yy").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female")
    var currentDate = new Date(year + "/" + month + "/" + date);
    var currentYear = currentDate.getDay();
    if (male.checked) {
      document.getElementById("winnie").innerHTML = "This is your Akan name  " + maleNames[currentYear] + " so you were born on " + daysOfTheWeek[currentYear]
    } else if (female.checked) {
      document.getElementById("winnie").innerHTML = "This is your Akan name  " + femaleNames[currentYear] + " so you were born on " + daysOfTheWeek[currentYear]
    }
  
  }
  $ (document).ready(function(){
    $
  })