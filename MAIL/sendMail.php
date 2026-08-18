<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Set to 0 in production
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'enquirie@fenizomlmsoft.com';
    $mail->Password   = 'tquRBj4~';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('enquirie@fenizomlmsoft.com', 'Fenizo MLM Soft');
    $mail->addAddress('phptestingtls@gmail.com'); // Change to actual recipient



// // Bman project
//     $mail->Host       = 'smtp.hostinger.com';
//     $mail->SMTPAuth   = true;
//     $mail->Username   = 'info@nexman.in';
//     $mail->Password   = 'jkmC$~4gDZ4!';
//     $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
//     $mail->Port       = 465;

//     // Recipients
//     $mail->setFrom('info@nexman.in', 'BMAN MLM Soft TESTING');
//     $mail->addAddress('satheeshkumar@fenizotechnologies.com'); // Change to actual recipient





    // $mail->Host       = 'smtp.hostinger.com';
    // $mail->SMTPAuth   = true;
    // $mail->Username   = 'noreplay@fenizomlmsoft.com';
    // $mail->Password   = '=y0N9~Ak0Y';
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    // $mail->Port       = 465;


    // // $mail->isSMTP();
    // // $mail->Host       = 'smtp-relay.brevo.com';
    // // $mail->SMTPAuth   = true;
    // // $mail->Username   = getenv('SMTP_USER');   // Brevo's login string
    // // $mail->Password   = getenv('SMTP_PASS');   // Brevo SMTP key
    // // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // NOT SMTPS
    // // $mail->Port       = 2525;
    // // $mail->Timeout    = 15;


    // // Recipients
    // $mail->setFrom('noreplay@fenizomlmsoft.com', 'Fenizo MLM Soft');
    // $mail->addAddress('phptestingtls@gmail.com'); // Change to actual recipient


    // // Content
    // $mail->isHTML(true);
    // $mail->Subject = 'Test Email from Fenizo';
    // $mail->Body    = 'This is a test email sent using Hostinger SMTP.';
    // $mail->AltBody = 'This is a test email sent using Hostinger SMTP.';

    // $mail->send();













    // $mail->Host       = 'smtp.hostinger.com';
    // $mail->SMTPAuth   = true;
    // $mail->Username   = 'hoppr@fenizotechnologies.com';
    // $mail->Password   = 'R^m&f*mo7';
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    // $mail->Port       = 465;


    // // $mail->isSMTP();
    // // $mail->Host       = 'smtp-relay.brevo.com';
    // // $mail->SMTPAuth   = true;
    // // $mail->Username   = getenv('SMTP_USER');   // Brevo's login string
    // // $mail->Password   = getenv('SMTP_PASS');   // Brevo SMTP key
    // // $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  // NOT SMTPS
    // // $mail->Port       = 2525;
    // // $mail->Timeout    = 15;


    // // Recipients
    // $mail->setFrom('hoppr@fenizotechnologies.com', 'Fenizo MLM Soft');
    // $mail->addAddress('phptestingtls@gmail.com'); // Change to actual recipient








    // $mail->Host       = 'smtp.office365.com';
    // $mail->SMTPAuth   = true;
    // $mail->Username   = 'ssn@qbitsq.com';
    // $mail->Password   = 'rpwPfMtxTVE7';
    // // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    // // $mail->SMTPSecure = false; // SSL
    // $mail->SMTPSecure = tls; // SSL
    // $mail->Port       = 587;

    // // Recipients
    // $mail->setFrom('ssn@qbitsq.com', 'Fenizo MLM Soft');
    // // $mail->addAddress('phptestingtls@gmail.com'); // Change to actual recipient
    // $mail->addAddress('satheeshkumar@fenizotechnologies.com'); // Change to actual recipient


    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email from Fenizo';
    $mail->Body    = 'This is a test email sent using Hostinger SMTP.';
    $mail->AltBody = 'This is a test email sent using Hostinger SMTP.';

    $mail->send();


    
    echo 'Message has been sent successfully';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
