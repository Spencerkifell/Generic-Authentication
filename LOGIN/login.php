<?php 
    $id = $_POST['accountId'];
    $password = $_POST['password'];

    $connection = new mysqli('localhost', 'root', '','generic_website');
    if($connection->connect_error){
        die('Connection Failed: ' .$connection->connection_error);
    }
    else{
        $statement = $connection->prepare("SELECT COUNT(`id`), `name`, `email` FROM `user_information` WHERE `id` = ? and `password` = ?");
        $statement->bind_param('is', $id, $password);
        $statement->execute();
        $statement->bind_result($totalCount, $userName, $userEmail);
        $statement->store_result();
        $statement->fetch();

        $todos = [];

        if($totalCount == 1){
            array_push($todos, ['returnValue' => $totalCount, 'userName' => $userName, 'userEmail' => $userEmail, 'userId' => $id, 'userPassword' => $password]);
        }
        else{
            array_push($todos, ['returnValue' => $totalCount]);
        }

        $statement->close();

        $json = json_encode($todos);
        print($json);
    }
    $connection->close();