<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

// TODO: move these off of the filesystem and into real environment
// variables before this ever reaches a public server.
$smtpHost     = 'smtp.hostinger.com';
$smtpUsername = 'enquirie@fenizomlmsoft.com';
$smtpPassword = 'tquRBj4~';
$smtpPort     = 465;

// TODO: replace with the real inbox that should receive demo-request leads.
$recipientEmail = 'phptestingtls@gmail.com';
$recipientName  = 'CloneScript Team';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
// Chrome's Private Network Access check requires this on the preflight response
// whenever the page origin (e.g. a devtunnels.ms/ngrok URL) is treated as "public"
// but the request targets localhost/a private IP -- without it the browser blocks
// the request as a CORS failure even though the Allow-Origin header is correct.
header('Access-Control-Allow-Private-Network: true');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$payload = json_decode(file_get_contents('php://input'), true);
if (!is_array($payload)) {
    $payload = $_POST;
}

$name    = trim($payload['name'] ?? '');
$email   = trim($payload['email'] ?? '');
$phone   = trim($payload['phone'] ?? '');
$product = trim($payload['product'] ?? '');
$subject = trim($payload['subject'] ?? '') ?: 'New Demo Request';
$currency = trim($payload['currency'] ?? 'USD');
$cart = is_array($payload['cart'] ?? null) ? $payload['cart'] : [];
$cartTotalUsd = $payload['cartTotalUsd'] ?? null;

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'A valid name and email are required.']);
    exit;
}

function e($value)
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function formatUsd($value)
{
    if (!is_numeric($value)) {
        return e($value);
    }
    return '$' . number_format((float) $value, 2);
}

$cartRowsHtml = '';
foreach ($cart as $item) {
    $itemName  = e(($item['productName'] ?? 'Product') . ' — ' . ($item['planName'] ?? ''));
    $itemPrice = formatUsd($item['price'] ?? '');
    $cartRowsHtml .= <<<HTML
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #eef0f6;color:#1f2430;font-size:14px;">{$itemName}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #eef0f6;color:#1f2430;font-size:14px;text-align:right;white-space:nowrap;">{$itemPrice}</td>
        </tr>
HTML;
}

$cartSectionHtml = '';
if ($cartRowsHtml !== '') {
    $totalHtml = formatUsd($cartTotalUsd);
    $cartSectionHtml = <<<HTML
        <tr>
          <td colspan="2" style="padding:24px 0 8px;">
            <p style="margin:0 0 10px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#767676;">Their Investment</p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef0f6;border-radius:10px;overflow:hidden;">
              {$cartRowsHtml}
              <tr>
                <td style="padding:12px 14px;font-weight:700;color:#1f2430;font-size:14px;">Total</td>
                <td style="padding:12px 14px;font-weight:700;color:#1f2430;font-size:14px;text-align:right;">{$totalHtml}</td>
              </tr>
            </table>
          </td>
        </tr>
HTML;
}

$safeName    = e($name);
$safeEmail   = e($email);
$safePhone   = e($phone !== '' ? $phone : 'Not provided');
$safeProduct = e($product !== '' ? $product : 'Not specified');
$safeCurrency = e($currency);
$submittedAt = e(date('d M Y, h:i A'));

$htmlBody = <<<HTML
<div style="background:#f4f5fb;padding:32px 16px;font-family:'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 20px 45px rgba(16,27,72,0.08);">
    <tr>
      <td style="background:linear-gradient(135deg,#4b2ec9,#0030b8);padding:28px 32px;">
        <p style="margin:0;color:#ffffff;font-size:12px;letter-spacing:.08em;text-transform:uppercase;opacity:.85;">CloneScript</p>
        <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;">New Demo Request</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:28px 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;width:120px;">Name</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;font-weight:600;">{$safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Email</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;"><a href="mailto:{$safeEmail}" style="color:#0030b8;text-decoration:none;">{$safeEmail}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Phone</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safePhone}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Product</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safeProduct}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#767676;font-size:13px;">Currency preference</td>
            <td style="padding:8px 0;color:#1f2430;font-size:14px;">{$safeCurrency}</td>
          </tr>
          {$cartSectionHtml}
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px 28px;">
        <p style="margin:0;color:#a3a7b7;font-size:12px;">Submitted {$submittedAt} via the Schedule Free Demo page.</p>
      </td>
    </tr>
  </table>
</div>
HTML;

$altBody = "New Demo Request\n\n"
    . "Name: {$name}\n"
    . "Email: {$email}\n"
    . "Phone: {$phone}\n"
    . "Product: {$product}\n"
    . "Currency preference: {$currency}\n";
if ($cartRowsHtml !== '') {
    $altBody .= "\nInvestment:\n";
    foreach ($cart as $item) {
        $altBody .= '- ' . ($item['productName'] ?? 'Product') . ' — ' . ($item['planName'] ?? '') . ': ' . formatUsd($item['price'] ?? '') . "\n";
    }
    $altBody .= 'Total: ' . formatUsd($cartTotalUsd) . "\n";
}

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUsername;
    $mail->Password   = $smtpPassword;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $smtpPort;

    $mail->setFrom($smtpUsername, 'CloneScript');
    $mail->addAddress($recipientEmail, $recipientName);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;
    $mail->AltBody = $altBody;

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Message has been sent successfully.']);
} catch (Exception $e) {
    http_response_code(502);
    error_log('sendMail.php PHPMailer error: ' . $mail->ErrorInfo);
    echo json_encode(['success' => false, 'message' => 'Message could not be sent.']);
}
