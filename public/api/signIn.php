<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$email = $jsondata['Email'];
$password = $jsondata['Password'];

$checkForUserQuery = $conn->prepare("SELECT ID
                      FROM `accounts`
                      WHERE email = ?
                      AND password = ?");

$checkForUserQuery -> bind_param("ss", $email, $password);
$checkForUserQuery->execute();
$AccountID = null;
$checkForUserQuery->store_result();
$checkForUserQuery->bind_result($AccountID);
$logUserIn = [];

if($checkForUserQuery->num_rows>0) {
    while($checkForUserQuery->fetch()) {
        $logUserIn['token'] = date("h:i:sa");
        echo "got to fetch";
    }
} else {
    $logUserIn['error'] = "Invalid Email Or Password";
}

print_r(json_encode($logUserIn));



?>