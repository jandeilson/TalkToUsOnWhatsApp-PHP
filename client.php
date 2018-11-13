<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

require_once('conn.php');

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully"; 

    $token = $_GET["token"];
    
    $returnJSON = array();
    
    $fetch = $conn->prepare("SELECT * FROM clients__TalkToUsOnWhatsApp_JDeS WHERE token=?");
   
    if (isset($_GET['token'])) {
        $fetch->execute(array($token));
       
        while($row=$fetch->fetch(PDO::FETCH_OBJ)) {
            array_push($returnJSON, $row);
        }

        echo json_encode($returnJSON);

    } else {
        echo "No data.";
    }
}
catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
