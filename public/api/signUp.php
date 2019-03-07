<?php
require_once('connect.php');
require '../../vendor/autoload.php';
use Bcrypt\Bcrypt;
$bcrypt = new Bcrypt();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$email = $jsondata['Email'];
$passwordUser = $jsondata['Password'];
$password = $bcrypt->encrypt($passwordUser, PASSWORD_DEFAULT);
$username = $jsondata['Username'];
$status = 'active';

$addUserSignUpQuery = $conn->prepare("INSERT INTO `accounts`
                                            (email, password, username, status)
                                            VALUES (?, ?, ?, ?)");

$addUserSignUpQuery-> bind_param("ssss", $email, $password, $username, $status);

$addUserSignUpQuery->execute();
$addUserSignUpQuery->store_result();
$logUserIn = [];
$insertID = $conn->insert_id;
$tokenValue = date("h:i:sa");
$token = $bcrypt->encrypt($tokenValue, PASSWORD_DEFAULT);

if($addUserSignUpQuery) {
    $logUserIn['token'] = $token;
} else {
    $logUserIn['error'] = "Unable To Log User In";
}

$insertToLoggedinQuery = $conn->prepare("INSERT INTO `loggedin`
                                              (accountID, token)
                                              VALUES (?, ?)");

$insertToLoggedinQuery->bind_param("ss", $insertID, $token);

$insertToLoggedinQuery->execute();
$insertToLoggedinQuery->store_result();

if($insertToLoggedinQuery) {
    $logUserIn['loggedin'] = true;
} else {
    $logUserIn['loggedinError'] = true;
}

print_r(json_encode($logUserIn));








?>