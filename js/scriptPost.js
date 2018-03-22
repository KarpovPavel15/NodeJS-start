function func(){

var first_name=document.getElementById("first_name").value;
var last_name=document.getElementById("last_name").value;
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
var confirm_password=document.getElementById("confirm_password").value;
var date=document.getElementById("date").value;
var country=document.getElementById("country").value;

window.sessionStorage.setItem("first_name",first_name);
window.sessionStorage.setItem("last_name",last_name);
window.sessionStorage.setItem("email",email);
window.sessionStorage.setItem("password",password);
window.sessionStorage.setItem("confirm_password",confirm_password);
window.sessionStorage.setItem("date",date);
window.sessionStorage.setItem("country",country);


window.location.href = "resultPost.html"
}