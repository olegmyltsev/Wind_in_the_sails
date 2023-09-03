<?php
$password = trim($_POST['password']);
$email = trim($_POST['email']);

$link = mysqli_connect("localhost", "f0801212_oleg", "NBueFRJW", "f0801212_oleg");
$select = 'SELECT `name`, `password`, `email` FROM `user` WHERE email = "'.$email.'"';
$result = mysqli_query($link, $select);
$row = mysqli_fetch_assoc($result);


if ($row['password'] == $password && $row['email'] == $email) {
    echo json_encode($row);
}else{
    echo json_encode($row);
};



// echo json_encode($row['name']);








?>