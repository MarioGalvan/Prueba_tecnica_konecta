<?php


 class Conexion{


     function conectar(){
        try{

            $conexion = new PDO('mysql:host=localhost;dbname=gestion_inventario', 'root','');
            return $conexion;
            
        }catch(PDOException $error){
            $error->getmessage();
        }
    }


    function conectar_antiguo(){
        $conexion = mysqli_connect('localhost', 'root','','gestion_inventario');
        return $conexion;
    }

    
}


?>