<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set content type
header('Content-Type: application/json');

// Check if the request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$year = isset($_POST['year']) ? sanitize_input($_POST['year']) : '';
$model = isset($_POST['model']) ? sanitize_input($_POST['model']) : '';
$part_name = isset($_POST['part_name']) ? sanitize_input($_POST['part_name']) : '';
$purchase = isset($_POST['purchase']) ? sanitize_input($_POST['purchase']) : '';
$vin = isset($_POST['vin']) ? sanitize_input($_POST['vin']) : '';
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$mobile = isset($_POST['mobile']) ? sanitize_input($_POST['mobile']) : '';
$zip_code = isset($_POST['zip_code']) ? sanitize_input($_POST['zip_code']) : '';
$comment = isset($_POST['comment']) ? sanitize_input($_POST['comment']) : '';

// Validate required fields
$errors = [];
if (empty($year)) $errors[] = 'Year is required';
if (empty($model)) $errors[] = 'Car model is required';
if (empty($part_name)) $errors[] = 'Part name is required';
if (empty($name)) $errors[] = 'Name is required';
if (empty($email)) $errors[] = 'Email is required';
if (empty($mobile)) $errors[] = 'Contact number is required';
if (empty($zip_code)) $errors[] = 'ZIP Code is required';

// Validate email format
if (!empty($email) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Invalid email format';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Email configuration
$to_email = 'info@oneauto-salvage.com';
$subject = 'New Auto Parts Quote Request - ' . $name;
$from_email = 'noreply@oneauto-salvage.com'; // Use your domain email
$reply_to = $email;

// Create HTML email content
$email_body = createEmailHTML([
    'year' => $year,
    'model' => $model,
    'part_name' => $part_name,
    'purchase' => $purchase,
    'vin' => $vin,
    'name' => $name,
    'email' => $email,
    'mobile' => $mobile,
    'zip_code' => $zip_code,
    'comment' => $comment
]);

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: One Auto Salvage <' . $from_email . '>',
    'Reply-To: ' . $reply_to,
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$mail_sent = mail($to_email, $subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Send confirmation email to customer
    sendCustomerConfirmation($email, $name, [
        'year' => $year,
        'model' => $model,
        'part_name' => $part_name
    ]);
    
    echo json_encode([
        'success' => true, 
        'message' => 'Your quote request has been submitted successfully. We will contact you within 24 hours.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to send email. Please try again or call us directly at +1 (307) 302-8308.'
    ]);
}

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Function to create HTML email content
function createEmailHTML($data) {
    $current_date = date('F j, Y \a\t g:i A T');
    
    $html = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Auto Parts Quote Request</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; }
            .header { background-color: #04003f; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background-color: #f8f9fa; font-weight: bold; }
            .highlight-row { background-color: #e3f2fd; }
            .highlight-header { background-color: #1976d2; color: white; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; color: #666; }
            .urgent { color: #d32f2f; font-weight: bold; }
            .contact-info { background-color: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚗 New Auto Parts Quote Request</h1>
                <p>Submitted on: ' . $current_date . '</p>
            </div>
            
            <div class="content">
                <div class="contact-info">
                    <strong>⚡ PRIORITY REQUEST - Please respond within 24 hours</strong>
                </div>
                
                <h2>Customer Information</h2>
                <table>
                    <tr>
                        <th style="width: 30%;">Field</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td><strong>Customer Name</strong></td>
                        <td>' . ($data['name'] ?: 'Not provided') . '</td>
                    </tr>
                    <tr>
                        <td><strong>Email Address</strong></td>
                        <td><a href="mailto:' . $data['email'] . '">' . ($data['email'] ?: 'Not provided') . '</a></td>
                    </tr>
                    <tr>
                        <td><strong>Contact Number</strong></td>
                        <td><a href="tel:' . $data['mobile'] . '">' . ($data['mobile'] ?: 'Not provided') . '</a></td>
                    </tr>
                    <tr>
                        <td><strong>ZIP Code</strong></td>
                        <td>' . ($data['zip_code'] ?: 'Not provided') . '</td>
                    </tr>
                </table>
                
                <h2>🔧 Vehicle & Parts Information</h2>
                <table>
                    <tr class="highlight-row">
                        <td class="highlight-header"><strong>Vehicle Year</strong></td>
                        <td><strong>' . ($data['year'] ?: 'Not provided') . '</strong></td>
                    </tr>
                    <tr class="highlight-row">
                        <td class="highlight-header"><strong>Vehicle Model</strong></td>
                        <td><strong>' . ($data['model'] ?: 'Not provided') . '</strong></td>
                    </tr>
                    <tr class="highlight-row">
                        <td class="highlight-header"><strong>Part Needed</strong></td>
                        <td><strong>' . ($data['part_name'] ?: 'Not provided') . '</strong></td>
                    </tr>
                    <tr>
                        <td><strong>Purchase Timeline</strong></td>
                        <td>' . ($data['purchase'] ?: 'Not specified') . '</td>
                    </tr>
                    <tr>
                        <td><strong>Vehicle VIN</strong></td>
                        <td>' . ($data['vin'] ?: 'Not provided') . '</td>
                    </tr>
                    <tr>
                        <td><strong>Additional Comments</strong></td>
                        <td>' . ($data['comment'] ?: 'No additional comments') . '</td>
                    </tr>
                </table>
                
                <div class="contact-info">
                    <h3>📋 Next Steps:</h3>
                    <ul>
                        <li>Search inventory for: <strong>' . $data['year'] . ' ' . $data['model'] . ' ' . $data['part_name'] . '</strong></li>
                        <li>Prepare quote with pricing and availability</li>
                        <li>Contact customer within 24 hours</li>
                        <li>Provide shipping and warranty information</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>One Auto Salvage - Quote Request System</strong></p>
                <p>📧 This email was automatically generated from oneauto-salvage.com</p>
                <p>📞 Customer Service: +1 (307) 302-8308</p>
            </div>
        </div>
    </body>
    </html>';
    
    return $html;
}

// Function to send confirmation email to customer
function sendCustomerConfirmation($customer_email, $customer_name, $request_info) {
    $subject = 'Thank You for Your Auto Parts Quote Request - One Auto Salvage';
    $from_email = 'noreply@oneauto-salvage.com';
    
    $confirmation_body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Quote Request Confirmation</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background-color: white; }
            .header { background-color: #04003f; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .highlight { background-color: #e3f2fd; padding: 15px; border-left: 4px solid #1976d2; margin: 15px 0; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; color: #666; }
            .contact-btn { background-color: #1976d2; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 5px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Thank You, ' . $customer_name . '!</h1>
                <p>Your Auto Parts Quote Request Has Been Received</p>
            </div>
            
            <div class="content">
                <p>Dear ' . $customer_name . ',</p>
                
                <p>Thank you for choosing <strong>One Auto Salvage</strong> for your auto parts needs. We have successfully received your quote request for:</p>
                
                <div class="highlight">
                    <h3>Your Request Details:</h3>
                    <p><strong>Vehicle:</strong> ' . $request_info['year'] . ' ' . $request_info['model'] . '</p>
                    <p><strong>Part Needed:</strong> ' . $request_info['part_name'] . '</p>
                    <p><strong>Request Date:</strong> ' . date('F j, Y \a\t g:i A') . '</p>
                </div>
                
                <h3>What Happens Next?</h3>
                <ul>
                    <li>✅ Our parts specialists will search our extensive inventory</li>
                    <li>✅ We\'ll prepare a detailed quote with competitive pricing</li>
                    <li>✅ You\'ll receive a response within <strong>24 hours</strong></li>
                    <li>✅ We\'ll include shipping and warranty information</li>
                </ul>
                
                <div style="text-align: center; margin: 30px 0;">
                    <h3>Need Immediate Assistance?</h3>
                    <a href="tel:+13073028308" class="contact-btn">📞 Call Now: +1 (307) 302-8308</a>
                    <a href="mailto:info@oneauto-salvage.com" class="contact-btn">📧 Email Us</a>
                </div>
                
                <div class="highlight">
                    <h3>Why Choose One Auto Salvage?</h3>
                    <ul>
                        <li>🏆 Largest inventory in the USA (2000+ yards)</li>
                        <li>💰 Best prices guaranteed</li>
                        <li>🚚 Free shipping nationwide</li>
                        <li>🛡️ 6-month warranty on all parts</li>
                        <li>👨‍🔧 ASE-certified quality assurance</li>
                    </ul>
                </div>
            </div>
            
            <div class="footer">
                <p><strong>One Auto Salvage</strong></p>
                <p>📍 1309 Coffeen Ave, Suite 1200, Sheridan, WY 82801</p>
                <p>📧 info@oneauto-salvage.com | 📞 +1 (307) 302-8308</p>
                <p style="font-size: 12px; color: #999;">This is an automated confirmation email. Please do not reply to this message.</p>
            </div>
        </div>
    </body>
    </html>';
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-type: text/html; charset=UTF-8',
        'From: One Auto Salvage <' . $from_email . '>',
        'X-Mailer: PHP/' . phpversion()
    ];
    
    mail($customer_email, $subject, $confirmation_body, implode("\r\n", $headers));
}
?>