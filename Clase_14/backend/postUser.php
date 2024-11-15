<?php
    require_once('access.php');
    // Importamos la conexión PDO
    require_once('conexion.php');
    // Recibimos un json desde el frontEnd por medio de un fech
    $jsonData = file_get_contents('php://input');
    $user = json_decode( $jsonData);
    //print_r($user);

    $name = $user->name;
    $email = $user->email;
    $password = md5(  $user->password );

    $sql = "INSERT INTO users( name, email, password)
            VALUES(:name, :email, :password)";

    $stm =$pdo->prepare($sql);
    $stm->bindParam(':name', $name );
    $stm->bindParam(':email', $email );
    $stm->bindParam(':password', $password );

    if( $stm->execute()) {
        echo( json_encode( ['msg' => 'Ok']   ));
    } else {
        echo( json_encode( ['msg' => 'Error']   ));
    }

    

?>