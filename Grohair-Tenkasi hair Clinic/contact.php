<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

$name      = strip_tags(trim($data['name']      ?? ''));
$email     = strip_tags(trim($data['email']     ?? ''));
$phone     = strip_tags(trim($data['phone']     ?? ''));
$date      = strip_tags(trim($data['date']      ?? ''));
$time      = strip_tags(trim($data['time']      ?? ''));
$treatment = strip_tags(trim($data['treatment'] ?? ''));
$message   = strip_tags(trim($data['message']   ?? ''));
$source    = strip_tags(trim($data['source']    ?? ''));

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and phone are required']);
    exit;
}

if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

$to      = 'adgrohairtenkasi@gmail.com';
$subject = 'New Consultation Booking - GroHair Tenkasi';

$body  = "New consultation booking request:\n\n";
$body .= "Name      : $name\n";
$body .= "Email     : $email\n";
$body .= "Phone     : $phone\n";
$body .= "Date      : $date\n";
$body .= "Time      : $time\n";
$body .= "Treatment : $treatment\n";
$body .= "Message   : $message\n";
$body .= "Source    : $source\n";

$headers  = "From: no-reply@adgrohairtenkasi.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Booking request sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again.']);
}
