<?php

include( 'connect.php');

class DbFunction {

    private $conn;

    public function __construct()
    {

        // connecting to database  
        $db = new DbConnect();

        $this -> conn = $db -> getConnectionObj();
    }  

    public function UserRegister($Name, $Lastname, $stdnumber, $phonenumber, $birth)

    {       
        $duplicate = mysqli_query($this -> conn,"select * from save where stdnumber='$stdnumber'");

        if (mysqli_num_rows($duplicate) > 0){

            echo json_encode(array("success" => false, "statusCode" => 400, "msg" => ["این دانشجو وجود دارد!"]));
        }

        else{

            $qr = mysqli_query($this -> conn,"INSERT INTO save(fname, Lastname, stdnumber, phonenumber, birth) values('$Name ','$Lastname', '$stdnumber', '$phonenumber', '$birth')") ;

            if ($qr) {

                echo json_encode(array("statusCode" => 200)); 
            }

            else{
                echo json_encode(array("statusCode" => 500));
            }
            
    }   

    mysqli_close($this->conn);

    }
}  

?>  