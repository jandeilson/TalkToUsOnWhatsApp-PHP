<?php

require 'vendor/autoload.php'; // (https://github.com/sendgrid/sendgrid-php)

$lead = $_GET['lead'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$message = $_GET['message'];

$request_body = json_decode('{
    "personalizations": [
        {
            "to": [
                {
                    "email": "'.$email.'"
                }
            ],
            "subject": "Contact [WhatsApp]"
        }
    ],
    "from": {
        "email": "'.$email.'",
        "name": "'.$lead.'"
    },
    "subject": "Contact [WhatsApp]",
    "content": [
        {
            "type": "text/html",
            "value": "'.$lead.' got in touch via WhatsApp."
        }
    ]
}');

$apiKey = ''; // your SendGrid API Key
$sg = new \SendGrid($apiKey);

try {
    $response = $sg->client->mail()->send()->post($request_body);
   // echo $response->statusCode();
   // echo $response->body();
   // print_r($response->headers());
    ?><script>window.top.location.href = "https://api.whatsapp.com/send?phone=<?php echo $phone;?>&text=Hello, my name is <?php echo $lead; ?>. <?php echo $message; ?>";</script><?php
} catch(\SendGrid\Exception $e) {
    echo $e->getCode();
    foreach($e->getErrors() as $er) {
        echo $er;
    }
}