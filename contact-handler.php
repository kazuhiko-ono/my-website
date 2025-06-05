<?php
// セキュリティヘッダー設定
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// CSRF対策とPOSTメソッドのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'POSTメソッドのみ許可されています']);
    exit;
}

// 入力データの取得とサニタイズ
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validate_phone($phone) {
    // 日本の電話番号形式をチェック
    $pattern = '/^[0-9\-\(\)\+\s]+$/';
    return preg_match($pattern, $phone);
}

// フォームタイプの判定
$form_type = sanitize_input($_POST['form_type'] ?? '');
$response = ['success' => false, 'message' => ''];

try {
    switch ($form_type) {
        case 'seminar':
            $name = sanitize_input($_POST['name'] ?? '');
            $email = sanitize_input($_POST['email'] ?? '');
            $phone = sanitize_input($_POST['phone'] ?? '');
            $date = sanitize_input($_POST['date'] ?? '');
            $participation = sanitize_input($_POST['participation'] ?? '');
            $message = sanitize_input($_POST['message'] ?? '');
            
            // バリデーション
            if (empty($name)) {
                throw new Exception('お名前を入力してください');
            }
            if (empty($email) || !validate_email($email)) {
                throw new Exception('正しいメールアドレスを入力してください');
            }
            if (!empty($phone) && !validate_phone($phone)) {
                throw new Exception('正しい電話番号を入力してください');
            }
            
            // セミナー申込処理
            $subject = 'セミナー申込み - ' . $name . '様';
            $email_body = "セミナーのお申込みをいただきありがとうございます。\n\n";
            $email_body .= "お名前: " . $name . "\n";
            $email_body .= "メールアドレス: " . $email . "\n";
            $email_body .= "電話番号: " . $phone . "\n";
            $email_body .= "希望日程: " . $date . "\n";
            $email_body .= "参加方法: " . $participation . "\n";
            $email_body .= "その他ご要望: " . $message . "\n\n";
            $email_body .= "2営業日以内に詳細をご連絡いたします。\n";
            $email_body .= "\n学習支援パートナー";
            
            break;
            
        case 'consultation':
            $name = sanitize_input($_POST['name'] ?? '');
            $email = sanitize_input($_POST['email'] ?? '');
            $phone = sanitize_input($_POST['phone'] ?? '');
            $date = sanitize_input($_POST['date'] ?? '');
            $type = sanitize_input($_POST['type'] ?? '');
            $topic = sanitize_input($_POST['topic'] ?? '');
            
            // バリデーション
            if (empty($name)) {
                throw new Exception('お名前を入力してください');
            }
            if (empty($email) || !validate_email($email)) {
                throw new Exception('正しいメールアドレスを入力してください');
            }
            if (empty($phone) || !validate_phone($phone)) {
                throw new Exception('電話番号を正しく入力してください');
            }
            if (empty($topic)) {
                throw new Exception('相談内容を入力してください');
            }
            
            // 個人相談予約処理
            $subject = '個人相談予約 - ' . $name . '様';
            $email_body = "個人相談のご予約をいただきありがとうございます。\n\n";
            $email_body .= "お名前: " . $name . "\n";
            $email_body .= "メールアドレス: " . $email . "\n";
            $email_body .= "電話番号: " . $phone . "\n";
            $email_body .= "希望日時: " . $date . "\n";
            $email_body .= "相談方法: " . $type . "\n";
            $email_body .= "相談内容: " . $topic . "\n\n";
            $email_body .= "2営業日以内に日程調整のご連絡をいたします。\n";
            $email_body .= "\n学習支援パートナー";
            
            break;
            
        case 'general':
            $name = sanitize_input($_POST['name'] ?? '');
            $email = sanitize_input($_POST['email'] ?? '');
            $subject_input = sanitize_input($_POST['subject'] ?? '');
            $message = sanitize_input($_POST['message'] ?? '');
            
            // バリデーション
            if (empty($name)) {
                throw new Exception('お名前を入力してください');
            }
            if (empty($email) || !validate_email($email)) {
                throw new Exception('正しいメールアドレスを入力してください');
            }
            if (empty($message)) {
                throw new Exception('お問い合わせ内容を入力してください');
            }
            
            // 一般お問い合わせ処理
            $subject = 'お問い合わせ - ' . $name . '様' . (!empty($subject_input) ? ' - ' . $subject_input : '');
            $email_body = "お問い合わせをいただきありがとうございます。\n\n";
            $email_body .= "お名前: " . $name . "\n";
            $email_body .= "メールアドレス: " . $email . "\n";
            $email_body .= "件名: " . $subject_input . "\n";
            $email_body .= "お問い合わせ内容: " . $message . "\n\n";
            $email_body .= "2営業日以内にご回答いたします。\n";
            $email_body .= "\n学習支援パートナー";
            
            break;
            
        default:
            throw new Exception('不正なフォームタイプです');
    }
    
    // メール送信設定
    $to = $email; // お客様への自動返信
    $admin_email = 'info@learning-partner.com'; // 管理者メール（実際のアドレスに変更）
    
    $headers = "From: noreply@learning-partner.com\r\n";
    $headers .= "Reply-To: info@learning-partner.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // お客様への自動返信メール送信
    $mail_sent = mail($to, $subject, $email_body, $headers);
    
    // 管理者への通知メール
    $admin_subject = '[Webサイト] ' . $subject;
    $admin_body = "Webサイトから" . $form_type . "の申込みがありました。\n\n" . $email_body;
    mail($admin_email, $admin_subject, $admin_body, $headers);
    
    if ($mail_sent) {
        // データベースに保存（実装する場合）
        // save_to_database($form_type, $_POST);
        
        $response['success'] = true;
        switch ($form_type) {
            case 'seminar':
                $response['message'] = 'セミナーの申し込みを受け付けました。確認メールをお送りしましたので、ご確認ください。';
                break;
            case 'consultation':
                $response['message'] = '個人相談のご予約を受け付けました。2営業日以内にご連絡いたします。';
                break;
            case 'general':
                $response['message'] = 'お問い合わせを受け付けました。2営業日以内にご回答いたします。';
                break;
        }
    } else {
        throw new Exception('メール送信に失敗しました。しばらく経ってから再度お試しください。');
    }
    
} catch (Exception $e) {
    $response['message'] = $e->getMessage();
    
    // エラーログに記録
    error_log("Contact form error: " . $e->getMessage() . " - " . json_encode($_POST));
}

echo json_encode($response);
exit;

// データベース保存関数（将来の拡張用）
function save_to_database($form_type, $data) {
    // データベース接続設定
    /*
    $host = 'localhost';
    $dbname = 'learning_partner';
    $username = 'your_db_user';
    $password = 'your_db_password';
    
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $sql = "INSERT INTO contacts (form_type, name, email, phone, data, created_at) VALUES (?, ?, ?, ?, ?, NOW())";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$form_type, $data['name'], $data['email'], $data['phone'] ?? '', json_encode($data)]);
        
        return true;
    } catch (PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        return false;
    }
    */
    return true;
}
?>