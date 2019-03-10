<?php
require_once('connect.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

//$postdata = file_get_contents("php://input");
//$jsondata = json_decode($postdata, true);

$getAllProducts = "SELECT * FROM `products`";

$result = mysqli_query($conn, $getAllProducts);

$output = [];
if ($result) {
    if (mysqli_num_rows($result) > 0) {
        while ($productRow = mysqli_fetch_assoc($result)) {
            $data[] = $productRow;
        }
        $productList['allProductData'] = $data;
    } else {
        $productList['productError'] = 'no data!';
    }
} else {
    $productList['productError'] = 'query failed!';
}

print_r(json_encode($productList));


?>