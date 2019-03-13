<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

$ID = $jsondata['itemID'];
$itemDetails = [];

$getItemDetailsQuery = $conn->prepare("SELECT * FROM `products`
                                            WHERE `itemID` = ?");

$getItemDetailsQuery->bind_param("s", $ID);
$getItemDetailsQuery->execute();

$itemDetailsData = [];
$getItemDetailsQuery->store_result();
$getItemDetailsQuery->bind_result($ID, $itemID, $title, $price, $status, $description, $image);


while ($row = $getItemDetailsQuery->fetch()) {
    $itemDetailsData = array();
    $itemDetailsData['ID'] = $ID;
    $itemDetailsData['itemID'] = $itemID;
    $itemDetailsData['title'] = $title;
    $itemDetailsData['price'] = $price;
    $itemDetailsData['status'] = $status;
    $itemDetailsData['description'] = $description;
}
$getItemDetailsQuery->close();

print_r(json_encode($itemDetailsData));









?>