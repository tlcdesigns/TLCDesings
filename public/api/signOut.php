<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$token = $jsondata['token'];

$removeUserFromLoggedinQuery = $conn->prepare("DELETE FROM `loggedin`
                                                    WHERE token = ?");

$removeUserFromLoggedinQuery->bind_param("s", $token);
$removeUserFromLoggedinQuery->execute();
$removeUserFromLoggedinQuery->store_result();
$signOutData = [];

if($removeUserFromLoggedinQuery) {
    $signOutData['success'] = true;
} else {
    $signOutData['success'] = false;
}

print_r(json_encode($signOutData));


?>