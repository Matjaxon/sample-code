<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Your Account Sid and Auth Token from twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$message = $twilio->messages
                  ->create("+12316851234",
                           array(
                               'body' => "Hello there!",
                               'from' => "+15555555555",
                               'mediaUrl' => "https://demo.twilio.com/owl.png"
                           )
                  );

print($message.sid);