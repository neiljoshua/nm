<?php 
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $recipient="neil@neiljoshua.com";
    $subject="Web dev inquiry";
    $sender=$_POST["user_name"]; 
    $senderLastName=$_POST["user_last_name"]            
    $senderEmail=$_POST["user_email"];
    $message=$_POST["user_message"];
    $senderFullName = $sender . " " .$senderLastName;

    $mailBody="Name: $senderFullName \nEmail: $senderEmail\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");
}

?>