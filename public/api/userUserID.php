<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$token = $jsondata['token'];

$getUserIDFromToken = $conn->prepare("SELECT `accountID` 
                                            FROM `loggedin`
                                            WHERE token = ?");
$getUserIDFromToken->bind_param("s", $token);
$getUserIDFromToken->execute();
$getUserIDFromToken->store_result();
//$userID = [];
$getUserIDFromToken->bind_result($userID);
if ($getUserIDFromToken->num_rows > 0) {
    while ($row = $getUserIDFromToken->fetch()) {
        $userInfo['userToken'] = $userID;
    }
} else {
    $userInfo['userToken'] = "Unable To Get Token";
}

print(json_encode($userInfo));
?>