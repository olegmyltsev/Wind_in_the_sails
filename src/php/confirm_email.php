


<?php
$name = trim($_POST['name']);
$password = trim($_POST['password']);
$email = trim($_POST['email']);



$code = rand(1000, 9999);
echo json_encode($code);

$headers = 'From:  olegMyltsev@vilir.from.sh' . "\r\n".
            'Content-type: text/html; charset=UTF-8' . "\r\n";
$message = '
<html>
<head>
<title>Подтвердите Email</title>
</head>
<body>
<p> style="
font-size: 30px;
font-family: sans-serif;
text-align: center;
">Что бы подтвердить Email,<br> введите на сайте этот код: <span style="color: rgb(0, 221, 85); display:block;text-align: center;">' . $code . '</span></p>
</body>
</html>
';
mail('oleg.myltsev.2008work@gmail.com', 'Подтвердите почту' ,$message, $headers);

?>



