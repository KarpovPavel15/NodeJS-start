document.addEventListener("DOMContentLoaded", function(event) { 

var url = location.search;
var anchor = ""; 
var GET = Array(); 
function parseGET(str){
str = str.split('?');
str = str[1];
/*if(str.indexOf('#')!=-1)
{
anchor = str.substr(str.indexOf('#')+1);
str = str.substr(0,str.indexOf('#'));
}*/
params = str.split('&');
for (i=0; i<params.length; i++)
{
var keyval = params[i].split('=');
GET[keyval[0]]= decodeURI(keyval[1]);
}
return (GET);
};
GET = parseGET(url);
GET['email']= GET['email'].replace("%40","@");
var birthday = new Date(GET["date"]);
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
content.innerHTML="<p> Здравствуйте, "+GET['last_name']+" "+GET['first_name']+".</p><p> До вашего дня рождения осталось "+remaining+" дней.</p><p>Дата рождения-"+GET['date']+"<br>email-"+GET['email']+"<br>Страна-"+GET['country']+"</p>";
});
