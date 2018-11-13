<?php

$errors         = array();
$data           = array();

// validate the variables ======================================================

    if (empty($_POST['name']))
        $errors['name'] = 'Name is required.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';

// return a response ===========================================================

    if ( ! empty($errors)) {
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {
        
        require_once('../conn.php');
        
        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           
            $sql = "INSERT INTO clients__TalkToUsOnWhatsApp_JDeS(name, token, phone, email, message, config) VALUES (:name, :token, :phone, :email, :message, :config)";
           
            $stmt = $conn->prepare($sql);
                                              
            $stmt->bindParam(':name', $_POST['name'], PDO::PARAM_STR);       
            $stmt->bindParam(':token', $_POST['token'], PDO::PARAM_STR); 
            $stmt->bindParam(':phone', $_POST['phone'], PDO::PARAM_STR);
            $stmt->bindParam(':email', $_POST['email'], PDO::PARAM_STR);
            $stmt->bindParam(':message', $_POST['message'], PDO::PARAM_STR);
            $stmt->bindParam(':config', $_POST['config'], PDO::PARAM_STR);

            $stmt->execute(); 

            $data['success'] = true;
            $data['successMessage'] = 'Success!';

        }
        catch(PDOException $e) {
            echo $sql . "<br>" . $e->getMessage();
        }
    }

    echo json_encode($data);