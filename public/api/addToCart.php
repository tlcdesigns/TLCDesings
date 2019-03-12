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
$getCustomerID->bind_result($ID);

$getItemDetailsQuery = $conn->prepare("SELECT * FROM `products`
                                            WHERE `itemID` = ?");

$getItemDetailsQuery->bind_param("s", $itemID);
$getItemDetailsQuery->execute();

$itemDetailsData = [];
$getItemDetailsQuery->store_result();
$getItemDetailsQuery->bind_result($productID, $itemsID, $title, $price, $status, $description, $image);
$quantity = 1; //for now will need to get actual quantity later


if($getCustomerID) {
    $addItemToCustomerCartQuery = $conn->prepare("INSERT INTO `cart`
                                                    (customerID, itemID, price, quantity)
                                                    VALUES (?, ?, ?, ?)");

    $addItemToCustomerCartQuery->bind_param("ssss", $ID, $itemsID , $price, $quantity);
    $addItemToCustomerCartQuery->execute();
    $addItemToCustomerCartQuery->store_result();
    if($addItemToCustomerCartQuery) {
        $addToCartData['success'] = true;
    } else {
        $addToCartData['error'] = "Error Inserting Data To Cart Table";
    }
} else {
    $addToCartData['error'] = "Unable To Get Customer ID";
}



?>