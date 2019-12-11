"use strict";
var $ = function(id) { return document.getElementById(id); };

function logout(){
alert ("Logged out successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}

var displayCurrentTime = function() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var datenew = time.getDate();
    var monthnew = time.getMonth();
    var yearnew = time.getFullYear();
    if(hours>12){
        var num = hours-12;
        $("hours").innerHTML = padSingleDigit(num);
        $("ampm").innerHTML = "pm";
    }
    
    else if(hours==0){
        $("hours").innerHTML = padSingleDigit(num);
        $("ampm").innerHTML = "am";
    }
    
    else{
        $("hours").innerHTML = hours;
        $("ampm").innerHTML = "am";
    }
    $("minutes").innerHTML = padSingleDigit(minutes);
    $("seconds").innerHTML = padSingleDigit(seconds);
    $("date").innerHTML = datenew+"/"+monthnew+"/"+yearnew;
};

var padSingleDigit = function(num) {
	if (num < 10) {	return "0" + num; }
	else { return num; }
};

window.onload = function(){
    displayCurrentTime();
    setInterval(displayCurrentTime,1000);

};