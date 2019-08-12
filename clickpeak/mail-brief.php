<?php
$to = 'info@clickpeak.ru';
$from_email = 'brief@clickpeak.ru';

if ( isset( $_POST['send-brief'] ) ) {
  $name  = substr( $_POST['uname'], 0, 64 );
  $tel = substr( $_POST['uphone'], 0, 64 );
  $email   = substr( $_POST['uemail'], 0, 64 );
  $site   = substr( $_POST['usite'], 0, 64 );
  $city   = substr( $_POST['ucity'], 0, 64 );
  $company   = substr( $_POST['ucompany'], 0, 64 );
  $usluga   = stripslashes($_POST['usl']);
  $cash   = substr( $_POST['cash'], 0, 64 );
  $message = substr( $_POST['message-field'], 0, 350 );

  if(!empty($_POST['usl'])) { 
       foreach($_POST['usl'] as $check) { 
          $usluga .= $check; 
        }
    }

  if ( !empty( $_FILES['file']['tmp_name'] ) and $_FILES['file']['error'] == 0 ) {
    $filepath = $_FILES['file']['tmp_name'];
    $filename = $_FILES['file']['name'];
  } else {
    $filepath = '';
    $filename = '';
  }
 
  $body = "Имя:\r\n".$name."\r\n\r\n";
  $body .= "Контактный номер:\r\n".$tel."\r\n\r\n";
  $body .= "E-mail:\r\n".$email."\r\n\r\n";
  $body .= "Сайт:\r\n".$site."\r\n\r\n";
  $body .= "Город:\r\n".$city."\r\n\r\n";
  $body .= "Название компании:\r\n".$company."\r\n\r\n";
  $body .= "Услуга:\r\n".$usluga."\r\n\r\n";
  $body .= "Бюджет:\r\n".$cash."\r\n\r\n";
  $body .= "Сообщение:\r\n".$message."\r\n\r\n";
 
  send_mail($to, $body, $from_email, $filepath, $filename);
}

// Вспомогательная функция для отправки почтового сообщения с вложением
function send_mail($to, $body, $from_email, $filepath, $filename)
{
  $subject = 'Бриф с сайта Clickpeak.ru';
  $boundary = "--".md5(uniqid(time())); // генерируем разделитель
  $headers = "From: ".$from_email."\r\n";   
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .="Content-Type: multipart/mixed; boundary=\"".$boundary."\"\r\n";
  $multipart = "--".$boundary."\r\n";
  $multipart .= "Content-type: text/plain; charset=\"utf-8\"\r\n";
  $multipart .= "Content-Transfer-Encoding: quoted-printable\r\n\r\n";

  $body = $body."\r\n\r\n";
 
  $multipart .= $body;
 
  $file = '';
  if ( !empty( $filepath ) ) {
    $fp = fopen($filepath, "r");
    if ( $fp ) {
      $content = fread($fp, filesize($filepath));
      fclose($fp);
      $file .= "--".$boundary."\r\n";
      $file .= "Content-Type: application/octet-stream\r\n";
      $file .= "Content-Transfer-Encoding: base64\r\n";
      $file .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
      $file .= chunk_split(base64_encode($content))."\r\n";
    }
  }
  $multipart .= $file."--".$boundary."--\r\n";
  mail($to, $subject, $multipart, $headers);
}
?>