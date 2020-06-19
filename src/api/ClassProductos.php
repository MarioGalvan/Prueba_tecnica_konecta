<?php

include 'ClassConexion.php';


class Productos extends Conexion {

    function ListarProductos(){
        $consulta = "SELECT * FROM productos";
      
        $query=$this->conectar()->prepare($consulta);

        $query->execute();

        $productos = [];
        $i=0;

        while($row = $query->fetch(PDO::FETCH_ASSOC)){
            
            $productos[$i] = [
            "id" => $row["id"],
            "nombre" => $row["nombre"],
            "referencia" => $row["referencia"],
            "precio" => $row["precio"],
            "peso" => $row["peso"],
            "categoria" => $row["categoria"],
            "stock" => $row["stock"],
            "fecha_creacion" => $row["fecha_creacion"],
            "fecha_ultima_venta" => $row["fecha_ultima_venta"]
                
            ];
            $i++;
        }

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json");
        echo json_encode($productos);
        
    }


    function CreateProduct($data){


$id = $data['id'];
 $nombre = $data['nombre'];
 $categoria = $data['categoria'];
 $stock = $data['stock'];
 $referencia = $data['referencia'];
 $precio = $data['precio'];
 $peso = $data['peso'];
 $fecha_creacion = date('y-m-d');
 $fecha_ultima_venta = date('y-m-d');

         
 $sql = "INSERT INTO productos VALUES ('$id',
 '$nombre',
 '$referencia',
 '$precio',
 '$peso',
 '$categoria',
 '$stock',
 '$fecha_creacion',
 '$fecha_ultima_venta')";

 
        $query=$this->conectar()->prepare($sql); 

        if($query->execute()){
            echo "ok";
        }else{
            echo "error";
        }


        
}
    
    
      

    
    
    



    
}

     


?>