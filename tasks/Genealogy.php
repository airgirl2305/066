<?php

class Person
{
  private $name;
  private $lastname;
  private $mother;
  private $father;

  function __construct($name, $lastname, $mother = null, $father = null)
  {
    $this->name = $name;
    $this->lastname = $lastname;
    $this->mother = $mother;
    $this->father = $father;
  }

  function getName()
  {
    return $this->name;
  }
  function getMother()
  {
    return $this->mother;
  }
  function getFather()
  {
    return $this->father;
  }

  function getInfo()
  {
    return "Меня зовут - " . $this->getName() . "<br> Моих родителей зовут " . $this->getMother()->getName() . $this->getFather()->getName() . "<br> Моих бабушку и дедушку по линии матери зовут " . $this->getMother()->getMother()->getName() . $this->getMother()->getFather()->getName() . "<br> Моих бабушку и дедушку по линии отца зовут " . $this->getFather()->getMother()->getName() . $this->getFather()->getFather()->getName();
  }
}

$pavel =
  new Person("Павел", "Петров");
$olga = new Person("Ольга", "Иванова", null, $pavel);
$anna = new Person("Анна", "Иванова");
$igor = new Person("Игорь", "Иванов");
$alex = new Person("Александр", "Иванов", $anna, $igor);
$valera = new Person("Валерий", "Иванов", $olga, $alex);

echo $valera->getInfo();
