<?php
$name = trim($_POST['name']);
$password = trim($_POST['password']);
$email = trim($_POST['email']);




$link = mysqli_connect("localhost", "root", "", "myFirstDB");
$sql = 'INSERT INTO `user`( `name`, `password`, `email`) VALUES ("'.$name.'","'.$password.'","'.$email.'")';

$select = 'SELECT `id` FROM `user` WHERE email = "'.$email.'"';
$result = mysqli_query($link, $select);

if ($result == false) {
    print("Произошла ошибка при выполнении запроса");
} elseif($result->num_rows > 0){
    echo('пользователь с такой почтой уже зарегестрирован.');
}else{
    $result = mysqli_query($link, $sql);
}
?>

