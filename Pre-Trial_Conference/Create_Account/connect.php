<?php
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    

    $conn = new mysqli('localhost','root,'','registration_data');
    if($conn->connect_error)
    {
        die('Connection failed : '.$conn->connect_error);

    }else{
        $stmt = $conn->prepare("insert into registration(username, email, password, confirm_password)
        values(?, ?, ?, ?");
        $stmt->bind_param("ssss", $username, $email, $password, $confirm_password);
        $stmt->execute();
        echo "registrtation successfully...";
        $stmt->close();
        $conn->close();
    }
?>