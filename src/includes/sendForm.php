<?php 
phpinfo();
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recipient="neilmalpartida@gmail.com";
    $subject="Web Dev Inquiry";
    $sender=$_POST["user-name"]; 
    $senderLastName=$_POST["user-last-name"];            
    $senderEmail=$_POST["user-email"];
    $message=$_POST["user-message"];
    $senderFullName=$sender . " " .$senderLastName;

    $mailBody="Name: $senderFullName \nEmail: $senderEmail\n$message";

    mail($recipient, $subject, $mailBody, "From: $senderFullName <$senderEmail>");
}

?>