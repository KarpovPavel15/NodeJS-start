document.addEventListener("DOMContentLoaded", function(event) { 

var birthday = new Date(sessionStorage["date"]);
var today = new Date(); 
birthday.setFullYear(today.getFullYear());
if(birthday<today){birthday.setFullYear(birthday.getFullYear()+1);}
var remaining = birthday - today; 

remaining /= 1000; 
remaining /= 60;    
remaining /= 60;    
remaining /= 24;    
remaining=Math.ceil(remaining);

var content = document.getElementById("content");
content.innerHTML="<p> Здравствуйте, "+sessionStorage['last_name']+" "+sessionStorage['first_name']+".</p><p> До вашего дня рождения осталось "+remaining+" дней.</p><p>Дата рождения-"+sessionStorage['date']+"<br>email-"+sessionStorage['email']+"<br>Страна-"+sessionStorage['country']+"</p>";


});