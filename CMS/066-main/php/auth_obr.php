<?php
session_start();
header('Content-Type: text/html; charset=utf-8');

$host = "localhost";
$db = "oefnbvtr_066";
$user = "oefnbvtr_066";
$password = "123456";

$mysqli = mysqli_connect($host, $user, $password, $db);


if ($mysqli == false) {
  print("error");
} else {

  $email = trim(mb_strtolower($_POST["email"]));
  $pass = trim($_POST["pass"]);

  $result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");
  $result = $result->fetch_assoc();

  if (password_verify($pass, $result["pass"])) {
    echo "success";
    $_SESSION["id"] = $result["id"];
    $_SESSION["name"] = $result["name"];
    $_SESSION["lastname"] = $result["lastname"];
    $_SESSION["email"] = $result["email"];
  } else {
    echo "denied";
  }


}
