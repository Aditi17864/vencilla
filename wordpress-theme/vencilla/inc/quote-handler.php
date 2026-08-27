<?php
// Quote Request Handler

add_action('wp_ajax_vencilla_quote', 'vencilla_handle_quote');
add_action('wp_ajax_nopriv_vencilla_quote', 'vencilla_handle_quote');

function vencilla_handle_quote() {
    check_ajax_referer('vencilla_nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name'] ?? '');
    $company = sanitize_text_field($_POST['company'] ?? '');
    $email = sanitize_email($_POST['email'] ?? '');
    $phone = sanitize_text_field($_POST['phone'] ?? '');
    $country = sanitize_text_field($_POST['country'] ?? '');
    $product = sanitize_text_field($_POST['product'] ?? '');
    $quantity = sanitize_text_field($_POST['quantity'] ?? '');
    $message = sanitize_textarea_field($_POST['message'] ?? '');
    
    if (empty($name) || empty($company) || empty($email) || empty($phone) || empty($country) || empty($product)) {
        wp_send_json_error(['message' => 'Please fill all required fields.']);
    }
    
    $attachment_id = 0;
    $attachments = [];
    
    if (!empty($_FILES['document']['name'])) {
        $file = $_FILES['document'];
        
        $allowed_mimes = [
            'pdf' => 'application/pdf',
            'doc' => 'application/msword',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];
        
        $file_type = wp_check_filetype($file['name'], $allowed_mimes);
        
        if (empty($file_type['ext'])) {
            wp_send_json_error(['message' => 'Invalid file type. Only PDF, DOC, and DOCX are allowed.']);
        }
        
        require_once(ABSPATH . 'wp-admin/includes/file.php');
        $upload_overrides = ['test_form' => false];
        $movefile = wp_handle_upload($file, $upload_overrides);
        
        if ($movefile && !isset($movefile['error'])) {
            $attachment_data = [
                'post_mime_type' => $movefile['type'],
                'post_title'     => sanitize_file_name($file['name']),
                'post_content'   => '',
                'post_status'    => 'inherit'
            ];
            
            $attachment_id = wp_insert_attachment($attachment_data, $movefile['file']);
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            $attach_data = wp_generate_attachment_metadata($attachment_id, $movefile['file']);
            wp_update_attachment_metadata($attachment_id, $attach_data);
            
            $attachments[] = $movefile['file'];
        }
    }
    
    $post_id = wp_insert_post([
        'post_title' => 'Quote Request from ' . $company,
        'post_type' => 'vc_quote_request',
        'post_status' => 'publish'
    ]);
    
    if ($post_id) {
        update_post_meta($post_id, 'name', $name);
        update_post_meta($post_id, 'company', $company);
        update_post_meta($post_id, 'email', $email);
        update_post_meta($post_id, 'phone', $phone);
        update_post_meta($post_id, 'country', $country);
        update_post_meta($post_id, 'product', $product);
        update_post_meta($post_id, 'quantity', $quantity);
        update_post_meta($post_id, 'message', $message);
        if ($attachment_id) {
            update_post_meta($post_id, 'document_id', $attachment_id);
        }
    }
    
    $to = 'export@vencilla.com';
    $fallback_email = get_option('admin_email');
    $to = !empty($to) ? $to : $fallback_email;
    
    $subject = 'New Quote Request from ' . $company;
    $body = "<h2>New Quote Request Details</h2>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Company:</strong> $company</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Country:</strong> $country</p>
        <p><strong>Product:</strong> $product</p>
        <p><strong>Quantity:</strong> $quantity</p>
        <p><strong>Message:</strong><br/>$message</p>";
        
    $headers = ['Content-Type: text/html; charset=UTF-8'];
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
    
    $sent = wp_mail($to, $subject, $body, $headers, $attachments);
    
    if ($sent) {
        wp_send_json_success(['message' => 'Your quote request has been submitted successfully.']);
    } else {
        wp_send_json_error(['message' => 'Something went wrong. Please try again.']);
    }
}
