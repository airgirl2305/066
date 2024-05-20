<?php
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

// what's in the variable
// var_dump($mysqli);

if ($mysqli == false) {
  // . concatination
  print("Error: Unable to connect to MySQL: " . mysqli_connect_error());
} else {
  print("A connection with the base was successfully established. ");

  // get data from form
  $name = $_POST["name"];
  $surname = $_POST["surname"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // $var -> method("")
  $registeredUser = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email' AND `password`='$password'");

  if ($registeredUser->num_rows != 0) {
    print("An account with the email already exist.");
  } else {
    $mysqli->query("INSERT INTO `users`(`name`, `surname`, `email`, `password`) VALUES ('$name', '$surname', '$email', '$password')");
    print("You have successfully registered and logged in!");
  }

  // $sql = "INSERT INTO `users`(`name`, `surname`, `email`, `password`) VALUES (?,?,?,?)";
  // $stmt = $mysqli->prepare($sql);
  // $stmt->bind_param("ssss", $name, $surname, $email, $password);
  // $stmt->execute();
}

// echo "<hr>Name: $name<br>
// Surname: $surname<br>
// Email: $email<br>
// Password: $password<hr>";
