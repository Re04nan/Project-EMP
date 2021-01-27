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
    $stmt =  $conn->query("SELECT * FROM cadastro AS c INNER JOIN modulo AS m
ON c.id_user = m.fk_user WHERE c.id_user = $id");
    if ($stmt->rowCount() > 0) {
        $userNivel = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } 
    else {
        $userNivel = "Erro 1";
    }
} 
else {
    $userNivel = "Erro 2";
}
echo json_encode(["sucess"=>$userNivel]);