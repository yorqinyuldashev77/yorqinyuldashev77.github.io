
$("#sendMail").on("click", function() {
var Email = $("#Email").val().trim();
var name = $("#name").val().trim();
var phone = $("#phone").val().trim();
var login = $("#login").val().trim();
var password = $("#password").val().trim();

if(Email == "") {
$("#errorMess").text("Elektron pochtanggizni yozing!!!");
return false;
}else if(name == "") {
$("#errorMess").text("Ismingizni yozing!!!");
return false;
} else if(phone == ""){
$("#errorMess").text("Telefon raqamingizni yozing");
return false;
}else if(login == "") {
    $("#errorMess").text("Loginni kiriting!!!")
    return false;
    }else if(password.length <= 6) {
$("#errorMess").text("Parolni yozing!!! Parol 6 ta belgidan ko`p bo`lsin");
return false;
    }
$("#errorMess").text("");

});

$.ajax({
    url:'ajax/mail.php',
    type:'POST',
    cache:false,
    data:{'Email':email, 'name':name, 'phone':phone, 'login':login, 'password':password},
    dataType:'html',
    beforeSend:function(){
        $("#sendMail").prop("disabled",true);
    },
    success:function(data){
        if(!data) 
        alert("Xatolik yuz berdi, Birozdan so`ng urinib ko`ring")
         else
        $("#mailForm").trigger("reset");
        $("#sendMail").prop("disabled", false);
       
    }
}

)