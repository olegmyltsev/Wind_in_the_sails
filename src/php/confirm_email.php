


<?php
$name = trim($_POST['name']);
$password = trim($_POST['password']);
$email = trim($_POST['email']);



$code = rand(1000, 9999);
echo json_encode($code);

$message = '
<html>
<head>
<title>Подтвердите Email</title>
</head>
<body>
<p>Что бы подтвердить Email, введите на сайте этот код: ' . $code . '></a></p>
</body>
</html>
';

mail($email, "Подтвердите Email на сайте", $message, "To: <$email>\r\n");

?>
