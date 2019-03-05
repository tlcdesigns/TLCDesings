<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$values = array_values($jsondata);

print_r($values);

//$makeNewAccountQuery = $conn->prepare("INSERT INTO `accounts`
//                                            (email, password, username, joined, status)
//                                            VALUES (?,?,?,?,?)");
//
//$makeNewAccountQuery->bind_param("sssss", $values)
?>