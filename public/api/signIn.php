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
$password = $jsondata['Password'];
$passwordHash = $bcrypt->encrypt($password, PASSWORD_DEFAULT);

$checkForUserQuery = $conn->prepare("SELECT ID
                      FROM `accounts`
                      WHERE email = ?
                      AND password = ?");

$checkForUserQuery -> bind_param("ss", $email, $passwordHash);
$checkForUserQuery->execute();

$AccountID = null;
$checkForUserQuery->store_result();
$checkForUserQuery->bind_result($AccountID);
$logUserIn = [];
$tokenData = date("h:i:sa");
$token = $bcrypt->encrypt($tokenData, PASSWORD_DEFAULT);

if($checkForUserQuery->num_rows>0) {
    while($checkForUserQuery->fetch()) {
        $logUserIn['token'] = $token;
    }
} else {
    $logUserIn['error'] = "Invalid Email Or Password";
}

$addToLoggedinQuery = $conn->prepare("INSERT INTO `loggedin`
                                            (accountID, token)
                                            VALUES (?, ?)");

$addToLoggedinQuery -> bind_param("ss", $AccountID, $token);
$addToLoggedinQuery->execute();
if($addToLoggedinQuery) {
    $logUserIn['loggedin'] = true;
} else {
    $logUserIn['loggedinError'] = true;
}

print_r(json_encode($logUserIn));



?>