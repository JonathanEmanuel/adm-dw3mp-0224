<?php
    $host = 'localhost';
    $dbname = 'appvue';
    $user = 'root';
    $pass = '';
    try {
        $pdo =  new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    } catch (PDOException $error) {
        echo( $error);
    }
?>