<?php
    include_once('function.php');

//    include_once('validation.php');

    $funObj = new DbFunction();
        
    $Name = $_POST['Name'];

    $Lastname = $_POST['Lastname'];

    $stdnumber = $_POST['stdnumber'];

    $phonenumber = $_POST['phonenumber'];

    $birth = $_POST['birth'];

    $funObj -> UserRegister($Name, $Lastname, $stdnumber, $phonenumber, $birth);


?>  
