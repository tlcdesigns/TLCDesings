<?php

require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$token = $jsondata['token'];

$getIDFromTokenQuery = $conn->prepare("SELECT `accountID` FROM `loggedin`
                                      WHERE token = ?");

$getIDFromTokenQuery->bind_param("i", $token);
$getIDFromTokenQuery->execute();
$getIDFromTokenQuery->store_result();
$accountID = [];
$getIDFromTokenQuery->bind_result($accountID);
while ($row = $getIDFromTokenQuery->fetch()) {
//    $allCArtItems['accountID'] = $accountID;
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

//print_r($getCartItems);

//if($getCartItems) {
//    while($row = $getCartItems->fetch()) {
//        $allCArtItems['itemID'] = $itemID;
//        $allCArtItems['price'] = $price;
//        $allCArtItems['quantity'] = $quantity;
//    }
//}

//if($getCartItems) {
//    while($row = $getCartItems->fetch()) {
//        printf("%s %s %s\n", $itemID,$price,$quantity);
//    }
//}
$i = 0;
while ($getCartItems->fetch()) {
    $i++;
    $name='row'.$i;
    $$name = array($itemID,$price,$quantity);
    $allCArtItems["$name"]['itemID'] = $$name[0];
    $allCArtItems["$name"]['price'] = $$name[1];
    $allCArtItems["$name"]['quantity'] = $$name[2];
    $allCArtItems["$name"]['accountID'] = $accountID;
}

print_r(json_encode($allCArtItems));


?>