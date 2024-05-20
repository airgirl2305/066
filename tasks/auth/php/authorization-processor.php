<?php
session_start();
// function setting character encoding beget
header('Content-Type: text/html; charset=utf-8');

// must be saved in a separate .env file
$host = "localhost";
$db = "l96705y2_066";
$user = "l96705y2_066";
$password = "fR4R*4Cn";
// must be saved in a separate .env file

// easiest and unsafe way to connect with a base
$mysqli = mysqli_connect($host, $user, $password, $db);
$email = $_POST["email"];
$password = $_POST["password"];

$registeredUser = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'");

if ($registeredUser->num_rows != 0) {
  echo "<script>alert('You have successfully logged in!');</script>";
} else {
  echo "<script>alert('No such user.');
</script>";
}
