<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);
$addToCartData = [];
$itemID = $jsondata['itemID'];
$token = $jsondata['token'];


$getCustomerID = $conn->prepare("SELECT `accountID` FROM `loggedin`
                                      WHERE token = ?");

$getCustomerID->bind_param("s", $token);
$getCustomerID->execute();
$getCustomerID->store_result();
$ID = [];
$getCustomerID->bind_result($accountID);

while ($row = $getCustomerID->fetch()) {
    $addToCartData['accountID'] = $accountID;
}

$itemsDetailsQuery = $conn->prepare("SELECT ID, itemID, title, price, status FROM `products`
                                            WHERE `itemID` = ?");

$itemsDetailsQuery->bind_param("i", $itemID);
$itemsDetailsQuery->execute();

$itemDetailsData = [];
$itemsDetailsQuery->store_result();
$itemsDetailsQuery->bind_result($rowID, $itemsID, $title, $price, $status);
$quantity = 1; //for now will need to get actual quantity later

while ($row = $itemsDetailsQuery->fetch()) {
    $addToCartData['customerID'] = $rowID;
    $addToCartData['itemID'] = $itemsID;
    $addToCartData['title'] = $title;
    $addToCartData['price'] = $price;
    $addToCartData['status'] = $status;
}

if($addToCartData) {
    $addItemToCustomerCartQuery = $conn->prepare("INSERT INTO `cart`
                                                    (customerId, itemID, price, quantity, status)
                                                    VALUES (?, ?, ?, ?, ?)");

    $addItemToCustomerCartQuery->bind_param("iiiis", $accountID, $itemsID , $price, $quantity, $status);
    $addItemToCustomerCartQuery->execute();
    $addItemToCustomerCartQuery->store_result();
    if($addItemToCustomerCartQuery) {
        $addToCartData['message'] = "Item Added To Cart";
    } else {
        $addToCartData['message'] = "Unable To Insert Item To Your Cart";
    }
} else {
    $addToCartData['message'] = "Unable To Insert Item To Your Cart";
}

print(json_encode($addToCartData));


?>