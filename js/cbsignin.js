function validate(){
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
    console.log(user,pass);
   var re=new RegExp();
    

    if(form.username.value == "") {
      alert("Error: Username cannot be blank!");
      form.username.focus();
      return false;
    }
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username can be any letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
if(form.password.value == "") {
      alert("Error: Password cannot be blank!");
      form.password.focus();
      return false;
    }
    if(form.password.value != "") {
      if(form.password.value.length < 6) {
        alert("Error: Password must contain at least six characters!");
        form.password.focus();
        return false;
      }
      
  if(user == "javascript" && pass == "javascript")
    sessionStorage.setItem("javascript",user);
alert ("Login successfully");
window.location = "profile.html"; // Redirecting to other page.
return false;
}

}