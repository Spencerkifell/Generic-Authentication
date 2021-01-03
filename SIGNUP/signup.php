<?php
    $id = $_POST['accountId'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    
    $connection = new mysqli('localhost', 'root', '','generic_website');
    if($connection->connect_error){
        die('Connection Failed: ' .$connection->connection_error);
    }
    else{
        $stmt = $connection->prepare("insert into user_information(id, name, password, email)
            values(?, ?, ?, ?)");
        $stmt->bind_param("isss", $id, $username, $password, $email);
        $stmt->execute();
        $stmt->close();
        $connection->close();
    }
