<?php
require_once('connect.php');
require '../../vendor/autoload.php';
use Bcrypt\Bcrypt;
$bcrypt = new Bcrypt();
$bcrypt_version = '2a';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
$jsondata = json_decode($postdata, true);

?>