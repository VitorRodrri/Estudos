<?php 
       $nome = $_POST['nome'];
       $email = $_POST['email'];

     
       $con = mysqli_connect('localhost' , 'root' , '' , 'sitedabanda');
    
      $sql = "INSERT INTO clientes(nome, email) VALUES ('".$nome."','".$email."')"; 

      if(mysqli_query($con, $sql)){
            
      }

      mysqli_close($con);
?>