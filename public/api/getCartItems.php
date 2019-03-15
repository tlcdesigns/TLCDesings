<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$token = $jsondata['token'];
$allCArtItems = [];

$getIDFromTokenQuery = $conn->prepare("SELECT `accountID` FROM `loggedin`
                                      WHERE token = ?");

$getIDFromTokenQuery->bind_param("i", $token);
$getIDFromTokenQuery->execute();
$getIDFromTokenQuery->store_result();
$accountID = [];
$getIDFromTokenQuery->bind_result($accountID);
while ($row = $getIDFromTokenQuery->fetch()) {
    $allCArtItems['accountID'] = $accountID;
}

$getCartItems = $conn->prepare("SELECT itemID, price, quantity FROM `cart`
                                      WHERE customerID = ?");

$getCartItems->bind_param("i", $accountID);
$getCartItems->execute();
$getCartItems->store_result();
$itemID = [];
$price = [];
$quantity = [];
$getCartItems->bind_result($itemID,$price,$quantity);

print_r($getCartItems);

if($getCartItems) {
    if($getCartItems->num_rows !== 0) {
        while ($row = $getCartItems->fetch()) {
            $data = [];
            $data[] = $row;
        }
        $allCArtItems['cartItems'] = $data;
    } else {
        $allCArtItems['message'] = "No Items In Cart";
    }
} else {
    $allCArtItems['message'] = "Unable To Get Cart Items";
}


print_r(json_encode($allCArtItems));



?>