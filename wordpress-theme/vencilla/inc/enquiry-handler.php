<?php
// Enquiry Handler

add_action('wp_ajax_vencilla_enquiry', 'vencilla_handle_enquiry');
add_action('wp_ajax_nopriv_vencilla_enquiry', 'vencilla_handle_enquiry');

function vencilla_handle_enquiry() {
    check_ajax_referer('vencilla_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name'] ?? '');
    $company = sanitize_text_field($_POST['company'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $phone = sanitize_text_field($_POST['phone'] ?? '');
    $enquiryType = sanitize_text_field($_POST['enquiryType'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');
    $product = sanitize_text_field($_POST['product'] ?? '');
    $division = sanitize_text_field($_POST['division'] ?? '');
    
    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(['message' => 'Please fill all required fields.']);
    }
    
    if (!is_email($email)) {
        wp_send_json_error(['message' => 'Invalid email address.']);
    }
    
    // Create enquiry post
    $post_id = wp_insert_post([
        'post_title' => 'Enquiry from ' . $name . (!empty($company) ? ' (' . $company . ')' : ''),
        'post_type' => 'vc_enquiry',
        'post_status' => 'publish'
    ]);
    
    if ($post_id) {
        update_post_meta($post_id, 'name', $name);
        update_post_meta($post_id, 'company', $company);
        update_post_meta($post_id, 'email', $email);
        update_post_meta($post_id, 'phone', $phone);
        update_post_meta($post_id, 'enquiryType', $enquiryType);
        update_post_meta($post_id, 'message', $message);
        update_post_meta($post_id, 'product', $product);
        update_post_meta($post_id, 'division', $division);
    }
    
    $to = 'export@vencilla.com';
    $fallback_email = get_option('admin_email');
    $to = !empty($to) ? $to : $fallback_email;
    
    $subject = 'New Enquiry from ' . $name . (!empty($product) ? ' — ' . $product : '');
    $body = "<h2>New Enquiry Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Enquiry Type:</strong> $enquiryType</p>
        <p><strong>Product:</strong> $product</p>
        <p><strong>Division:</strong> $division</p>
        <p><strong>Message:</strong><br/>$message</p>";
        
    $headers = ['Content-Type: text/html; charset=UTF-8'];
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        // Confirmation email to user
        $user_subject = 'Thank you for your enquiry - Vencilla';
        $user_body = "<p>Dear $name,</p><p>Thank you for your enquiry. Our commercial export team will review your specifications and contact you shortly.</p>";
        wp_mail($email, $user_subject, $user_body, ['Content-Type: text/html; charset=UTF-8']);
        
        wp_send_json_success(['message' => 'Thank you for your enquiry. Our commercial export team will review your specifications and contact you shortly.']);
    } else {
        wp_send_json_error(['message' => 'Something went wrong. Please try again.']);
    }
}
