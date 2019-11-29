function getName(){
var DayOfMonth=document.getElementsByClassName("Day").value;
var month=document.getElementsByClassName("month").value;
var year=document.getElementsByClassName("year").value;
var date =current-Date ('${year})-${month}-${dayOfMonth}');
var birthDay=date.getDay();
var male=document.getElementById("male");
var female=document.getElementById("female");
var result=document.getElementById("result");
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
if(month=="" || month.lenght<4|| month.lenght>4){
alert("ENTER A VALID YEAR");
}
else if(year<0 || year>1890){
alert("ENTER A VALID MONTH");
}
else if(dayOfMonth<0 || dayOfMonth>31){
alert ("ENTER A VALID DAY");
}

else if (male.check==false)(female.check==false);{
    alert("ENTER CORRECT GENDER");
    
    }




