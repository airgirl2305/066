<?php
header('Content-Type: text/html; charset=utf-8');

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

    function getInfo()
    {
        $motherName = $this->getMother() ? $this->getMother()->getName() : "";
        $fatherName = $this->getFather() ? $this->getFather()->getName() : "";
        $maternalGrandMother = $this->getMother()->getMother() ? $this->getMother()->getMother()->getName() : "";
        $maternalGrandFather = $this->getMother()->getFather() ? $this->getMother()->getFather()->getName() : "";
        $paternalGrandMother = $this->getFather()->getMother() ? $this->getFather()->getMother()->getName() : "";
        $paternalGrandFather = $this->getFather()->getFather() ? $this->getFather()->getFather()->getName() : "";
        if ($motherName && $fatherName) {
            $parents = ", моих родителей " . $motherName . " и " . $fatherName;
        } elseif ($motherName) {
            $parents = ", мою маму " . $motherName;
        } elseif ($fatherName) {
            $parents = ", моего отца " . $fatherName;
        } else {
            $parents = "";
        }

        if ($maternalGrandMother && $maternalGrandFather) {
            $maternal = "Мои бабушка и дедушка по маме: " . $maternalGrandMother . " и " . $maternalGrandFather . ". <br> ";
        } elseif ($maternalGrandMother) {
            $maternal = "Бабушку по маме - " . $maternalGrandMother . ". <br> ";
        } elseif ($maternalGrandFather) {
            $maternal = "Дедушка по маме - " . $maternalGrandFather . ". <br> ";
        } else {
            $maternal = "";
        }

        if ($paternalGrandMother && $paternalGrandFather) {
            $paternal = "Cтаршие по линии отца: " . $paternalGrandMother . " и " . $paternalGrandFather . ".";
        } elseif ($paternalGrandMother) {
            $paternal = "Бабушку по линии отца зовут " . $paternalGrandMother . ".";
        } elseif ($paternalGrandFather) {
            $paternal = "Дедушку по линии отца зовут " . $paternalGrandFather . ".";
        } else {
            $paternal = "";
        }
        return "Меня зовут " . $this->getName() . $parents . ". <br> " . $maternal . $paternal;
    }

    function getMother()
    {
        return $this->mother;
    }

    function getName()
    {
        return $this->name;
    }

    function getFather()
    {
        return $this->father;
    }
}

$pavel = new Person("Павел", "Петров");
$ekaterina = new Person("Екатарина", "Петрова");
$anna = new Person("Анна", "Иванова");
$igor = new Person("Игорь", "Иванов");
$olga = new Person("Ольга", "Иванова", null, $pavel);
// $olga = new Person("Ольга", "Иванова", $ekaterina, $pavel);
$alex = new Person("Александр", "Иванов", $anna, $igor);
$valera = new Person("Валерий", "Иванов", $olga, $alex);

echo $valera->getInfo();
