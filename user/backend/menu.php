<?php
require './include/db.php';
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $statement = 'select name from category where status=1;';
  if($result = $conn->query($statement)){
    $array =array();
    while($name= $result->fetch_assoc()['name']){
        array_push($array,$name);
    }
    echo json_encode(['categories'=>$array]);
  }else{
    echo json_encode(['error'=> 'Error in fetching categories']);
  }
  exit();
}