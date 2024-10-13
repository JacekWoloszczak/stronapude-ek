<?php
$mailToSend = "twoj-email@lorem.pl";
//klucz pobierzesz ze strony gdzie zakładałeś recaptche
$secretRecaptchaKey = '6LeA6F4qAAAAAC5n--Tgy7sEn9bEv0O3dzlqf1p5';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["email"];
    $antiSpam = $_POST["honey"];

    $errors = Array();
	$return = Array();

    if (!isset($_POST['token'])) die;
    $token = $_POST['token'];

    $response = file_get_contents(
        "https://www.google.com/recaptcha/api/siteverify?secret=$secretRecaptchaKey&response=$token&remoteip=".$_SERVER['REMOTE_ADDR']
    );
    $response = json_decode($response);

    if ($response->success === false) {
        header("Content-Type: application/json");
        die('{"status": "error"}'); //lub {"status" : "success"} dla zmylenia
    }

    $errors = [];
	$return = [];

    if (empty($name)) { 
        array_push($errors, "name");
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "email");
    }
    if (empty($message)) {
        array_push($errors, "message");
    }

    if (count($errors) > 0) {
        $return["errors"] = $errors;
    } else {
       
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8". "\r\n";
        $headers .= "From: ".$email."\r\n";
        $headers .= "Reply-to: ".$email;
        $message  = "
            <html>
                <head>
                    <meta charset=\"utf-8\">
                </head>
                <body>
                    <div> Imię: $name</div>
                    <div> Email: <a href=\"mailto:$email\">$email</a> </div>
                    <div> Wiadomość: </div>
                    <div> $message </div>
                </body>
            </html>";

        if (mail($mailToSend, "Wiadomość ze strony - " . date("d-m-Y"), $message, $headers)) {
            $return["status"] = "success";
        } else {
            $return["status"] = "error";
        }
    }

    header("Content-Type: application/json");
    echo json_encode($return);
}
?>