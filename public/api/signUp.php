<?php
require_once('connect.php');
require '../../vendor/autoload.php';
use Bcrypt\Bcrypt;
$bcrypt = new Bcrypt();
$bcrypt_version = '2a';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$email = $jsondata['Email'];
$passwordUser = $jsondata['Password'];
$password = $bcrypt->encrypt($passwordUser,$bcrypt_version);
$username = $jsondata['Username'];
$status = 'active';

$addUserSignUpQuery = $conn->prepare("INSERT INTO `accounts`
                                            (email, password, username, status)
                                            VALUES (?, ?, ?, ?)");

$addUserSignUpQuery-> bind_param("ssss", $email, $password, $username, $status);

$addUserSignUpQuery->execute();
$addUserSignUpQuery->store_result();
print_r($addUserSignUpQuery);
$signUp = [];
$insertID = $conn->insert_id;
$tokenValue = date("h:i:sa");
$token = $bcrypt->encrypt($tokenValue,$bcrypt_version);


if($addUserSignUpQuery) {
    $signUp['token'] = $token;
} else {
    $signUp['signUpError'] = "Unable To Log User In";
}

$insertToLoggedinQuery = $conn->prepare("INSERT INTO `loggedin`
                                              (accountID, token)
                                              VALUES (?, ?)");

$insertToLoggedinQuery->bind_param("ss", $insertID, $token);

$insertToLoggedinQuery->execute();
$insertToLoggedinQuery->store_result();

if($insertToLoggedinQuery) {
    $signUp['loggedin'] = true;
} else {
    $signUploggedinError = "Unable To Add User To Loggedin Table";
}








?>