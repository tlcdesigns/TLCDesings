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
$token = date("h:i:sa");

if($checkForUserQuery->num_rows>0) {
    while($checkForUserQuery->fetch()) {
        $logUserIn['token'] = $token;
    }
} else {
    $logUserIn['error'] = "Invalid Email Or Password";
}

$addToLoggedinQuery = $conn->prepare("INSERT INTO `loggedin`
                                            (accountID, token, login_time)
                                            VALUES (?, ? , ?)");

$addToLoggedinQuery -> bind_param("sss", $AccountID, $token, date('h:i:sa'));

$addToLoggedinQuery->execute();
$addToLoggedinQuery->bind_result();

if($addToLoggedinQuery->num_rows>0) {
    $logUserIn['loggedin'] = true;
} else {
    $logUserIn['loggedinError'] = "Unable to Add User To LoggedIn Table"
}





print_r(json_encode($logUserIn));



?>