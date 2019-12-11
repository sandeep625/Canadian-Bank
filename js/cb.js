"use strict";
var $ = function(id) { return document.getElementById(id); };


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

function logout(){
alert ("Logged out successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}

function processEntries(){
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);
    if(isNaN(subtotal) || subtotal<0 || subtotal>10000){
        alert("Subtotal must be >0 and <10000");
    }
    else if(Number.isNaN(tax_rate) || tax_rate<0 || tax_rate>12){
        alert("Tax Rate must be > 0 and < 12");
    }

    else{
        $("sales_tax").value = ((subtotal*tax_rate)/100).toFixed(2);
        $("total").value = (subtotal+((subtotal*tax_rate)/100)).toFixed(2);    
    }
    $("subtotal").onfocus;
}

function clear(){
    $("subtotal").value = '';
    $("tax_rate").value = '';
    $("sales_tax").value = '';
    $("total").value     = '';
    $("subtotal").onfocus;
}

function clearSubtotal(){
    $("subtotal").value = '';
}

function clearTax_rate(){
    $("tax_rate").value = '';
}



window.onload = function(){
    $("calculate").onclick = processEntries;
    $("clear").onclick = clear;
    $("subtotal").onclick = clearSubtotal;
    $("tax_rate").onclick = clearTax_rate;
    displayCurrentTime();
    setInterval(displayCurrentTime,1000);
    /*$("uname").onfocus;
    $("subtotal").focus;*/
};

