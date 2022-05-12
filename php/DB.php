<?php  
    function Create_database(){
        
        global $mysqli;
        $sql = "DROP DATABASE IF EXISTS `resdb`;";
                $st = $mysqli->prepare($sql);
                $st->execute();
        $sql = "CREATE DATABASE `resdb`";
        $st = $mysqli->prepare($sql);
        if($st->execute()){
            echo'epitixis dimiourgia';
        }else{
            echo'kati phge lathos';
        }

        

       
    }
                                                                    //ektelesi ton erotimaton gia thn dimiourgia ths vasis kai ton pinakwn
    function delete_table(){
        global $mysqli;
        $sql = "DROP TABLE IF EXISTS `registers`;";
        $st = $mysqli->prepare($sql);
        if($st->execute()){
            echo'epitixis diagrafi';
        }else{
            echo'kati phge lathos';
        }
    }

    function Create_table(){
        global $mysqli;
        $sql = "CREATE TABLE `registers` (
            `name` varchar(100) DEFAULT NULL,
            `name_f` varchar(100) DEFAULT NULL,
            `age` int(11) DEFAULT NULL,
            `phone` varchar(10) DEFAULT NULL,
            `email` varchar(64) DEFAULT NULL,
            `afm` varchar(9) NOT NULL,
            `amka` varchar(11) DEFAULT NULL,
            `credit_cart` varchar(16) DEFAULT NULL,
            `date` varchar(15) DEFAULT NULL,
            `addres` varchar(100) DEFAULT NULL,
            `comment` varchar(250) DEFAULT NULL,
            PRIMARY KEY (`afm`)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8; ";
        $st = $mysqli->prepare($sql);
        if($st->execute()){
            echo'epitixis dimiourgia';
        }else{
            echo'kati phge lathos';
        }
    }


    function delete_records(){
        global $mysqli;
        $sql = "DELETE FROM `registers`;";
        $st = $mysqli->prepare($sql);
        if($st->execute()){
            echo'epitixis diagrafi';
        }else{
            echo'kati phge lathos';
        }
    }











?>

