
    var person;
    if(person = prompt("Ismingizni kiriting!!!"))
    alert ("Salom " + person);
    if (confirm("Royxatdan o`tishni istaysizmi?")) {
	parent.location='reg.html';
	alert("Tasdiqlang");

$("#sendmail").on("click", function() {
var name = $("#name").val().trim();
var phone = $("#phone").val().trim();
var gmail = $("#gmail").val().trim();
var login = $("#login").val().trim();
var password = $("#password").val().trim();

if(name == ""){
$("#errorMess").text("Ismingizni yozing");
return false;
}else if(phone == "") {
$("#errorMess").text("Raqamingizni yozing");
return false;
} else if(gmail == ""){
$("#errorMess").text(" yozing");
return false;
}else if(login == ""){
$("#errorMess").text("Ismingizni yozing");
return false;
}else if(password.length < 5){
$("#errorMess").text("Ismingizni yozing");
return false;
}

$("#errorMess").text("");