<?php
$host='localhost';
$db = 'resdb';
$user='root';
$pass='';
$mysqli = new mysqli($host, $user, $pass, $db);


if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . 
    $mysqli->connect_errno . ") " . $mysqli->connect_error;
}










?>