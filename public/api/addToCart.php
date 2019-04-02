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
$quantity = $jsondata['quantity'];


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

while ($row = $itemsDetailsQuery->fetch()) {
    $addToCartData['customerID'] = $rowID;
    $addToCartData['itemID'] = $itemsID;
    $addToCartData['title'] = $title;
    $addToCartData['price'] = $price;
    $addToCartData['status'] = $status;
}

if ($itemsDetailsQuery) {

    $checkIfItemExistsInTable = $conn->prepare("SELECT quantity FROM `cart`
                                                      WHERE (`itemID` = ?) AND (`customerID` = ?)");

    $checkIfItemExistsInTable->bind_param("ii", $itemID,$accountID);
    $checkIfItemExistsInTable->execute();
    $checkIfItemExistsInTable->store_result();
    $itemQuantity = [];
    $checkIfItemExistsInTable->bind_result($itemQuantity);
    if($checkIfItemExistsInTable) {
        while ($row = $checkIfItemExistsInTable->fetch()) {
            $addToCartData['itemQuantity'] = $itemQuantity;
        }
    }


    if ($checkIfItemExistsInTable->num_rows !== 0) { //need to update conditional
        $updateCart = $conn->prepare("UPDATE `cart`
                                             SET quantity = ?
                                             WHERE itemID = ?");

        $newQuantity = $itemQuantity + $quantity;
        $updateCart->bind_param("ii", $newQuantity, $itemID);
        $updateCart->execute();
        $updateCart->store_result();
        if ($updateCart) {
            $addToCartData['message'] = "Cart Updated";
        } else {
            $addToCartData['message'] = "Unable To Update Item In Your Cart";
        }
    } else {

        $addItemToCustomerCartQuery = $conn->prepare("INSERT INTO `cart`
                                                    (customerId, itemID, price, quantity, status)
                                                    VALUES (?, ?, ?, ?, ?)");

        $addItemToCustomerCartQuery->bind_param("iiiii", $accountID, $itemsID, $price, $quantity, $status);
        $addItemToCustomerCartQuery->execute();
        $addItemToCustomerCartQuery->store_result();
        if ($addItemToCustomerCartQuery) {
            $addToCartData['message'] = "Item Added To Cart";
        } else {
            $addToCartData['message'] = "Unable To Insert Item To Your Cart";
        }
    }
} else {
    $addToCartData['message'] = "Unable To Insert Item To Your Cart";
}

print(json_encode($addToCartData));

?>


