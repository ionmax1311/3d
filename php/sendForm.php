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
$type = $_POST['type'];
$material = $_POST['selectMaterial'];
$color = $_POST['selectColor'];
$quality = $_POST['selectQuality'];
$phone = $_POST['calculatePhone'];
$link = $_POST['link'];


// Формирование самого письма
$title = "Заявка на печать ";
$body = "
<h2>Заявка на печать</h2><br>
<b>Тип:</b> $type<br>
<b>Материал:</b> $material<br>
<b>Цвет: </b> $color <br>
<b>Качество: </b> $quality <br>
<b>Телефон: </b> $phone <br>
<b>Ссылка: </b> $link <br>
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

    // Прикрипление файлов к письму
    if (isset($_FILES['file'])) {
        if ($_FILES['file']['error'] == 0) {
            //$zipAttachFile = zipAttachedFile($_FILES['file']['tmp_name']);
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
            print_r($mail);
            // print_r($zipAttachFile);
            // print_r($_FILES['file']['name'] . '.zip');
        }
    }

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

function zipAttachedFile($tmpFile)
{
    $archiveFile = "{$tmpFile}.zip";
    $zipArchive = new ZipArchive();
    if (!$zipArchive->open($archiveFile,  ZIPARCHIVE::CREATE | ZIPARCHIVE::OVERWRITE)) {
        echo "Failed to create archive\n";
        return false;
    }
    $zipArchive->addFile($tmpFile);
    if (!$zipArchive->status == ZIPARCHIVE::ER_OK) {
        echo "Failed to write local files to zip\n";
    }
    $zipArchive->close();
    return $archiveFile;
}
