<?php

$userName = $_POST["user-name"];
mail('eos.23@ya.ru', 'TEST', "HI, $userName");  // ? TO FIX
echo "Hi, $userName";

// $_GET["user-name"]; input name
