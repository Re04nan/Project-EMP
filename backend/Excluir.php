<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

require "Connection.php";

$id = (int)$_GET['id'];
if(isset($id) && !empty($id)){
    $sqlMod = $conn->query("DELETE cadastro, modulo FROM cadastro INNER JOIN modulo 
    ON cadastro.id_user = modulo.fk_user WHERE cadastro.id_user = '$id'");
    $sqlCad = $conn->query("DELETE FROM cadastro WHERE id_user = '$id'");
    if($sqlMod && $sqlCad) {
        $result = true;
    }
    else {
        $result = false;
    }     
} 
else {
    $result = false;
}
echo json_encode(["sucess"=> $result]);