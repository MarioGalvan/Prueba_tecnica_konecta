<?php


date_default_timezone_set('UTC');
$data = json_decode(file_get_contents("php://input"), true);
include 'ClassProductos.php';
$producto = new Productos();
$producto->CreateProduct($data);


 
?>