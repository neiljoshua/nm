<?php
  require '../../vendor/autoload.php';

  define("ROOTPATH", $_SERVER['DOCUMENT_ROOT']);

  use Mailgun\Mailgun;
  $mailgun = new Mailgun;

  $dotenv = new Dotenv\Dotenv(ROOTPATH);
  $dotenv->load();

  $mailgun_key=getenv('MAILGUN_KEY');
  $mailgun = $mailgun->create($mailgun_key);

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $sender=$_POST["user-name"];
    $senderLastName=$_POST["user-last-name"];
    $senderEmail=$_POST["user-email"];
    $message=$_POST["user-message"];
    $senderFullName=$sender . " " .$senderLastName;
    $subject="Website Inquiry from ". $senderFullName ;
  }

  $mailgun->messages()->send('neiljoshua.dev', [
    'from'    => 'neil@neiljoshua.dev',
    'to'      => 'neil@neiljoshua.dev',
    'subject' => $subject,
    'text'    => $senderFullName . " " . $senderEmail . " " . $message
  ]);
