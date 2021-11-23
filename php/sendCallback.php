<?php

session_start();

// if (!isset($_POST['csrf_token']) || !isset($_SESSION['csrf_token']) || ($_POST['csrf_token'] !== $_SESSION['csrf_token'])) {
//     die(json_encode(['error' => 'csrf token is invalid']));
// }

// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';



// Переменные, которые отправляет пользователь

$phone = $_POST['callbackPhone'];



// Формирование самого письма
$title = "Обратный звонок: 3D - печать";
$body = "
<h2>Обратный звонок:</h2><br>
<b>Телефон:</b> $type<br>

";

// Настройки PHPMailer

try {

    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'yariincheri@gmail.com';
    $mail->Password = 'vjmyuihnpixraqho';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->charSet = "UTF-8";
    $mail->setFrom('yariincheri@gmail.com', '3D - печать'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('wow.work1311@gmail.com');



    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
