<?php 
    require_once "../php/dbconnect.php";
    require_once "../php/search.php";
    require_once "../php/DB.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
    $input = json_decode(file_get_contents('php://input'),true);

    switch ($r=array_shift($request)) {
        case 'register' : handle_register($method,$input);          //api gia thn diaxirisi ton request
                break;
        case 'search' : handle_search($method,$input);
            
                break;
        case 'database' : handle_database($method);
                break;
        case 'delete_rec' : handle_records($method);
                break;
        default:  header("HTTP/1.1 404 Not Found");
        exit;
    }



    function handle_register($method,$input){
	
	            $name=$input['name'];
$name=$input['name'];
        $name=$input['name'];
        $name_F=$input['name_F'];
        $age=$input['age'];
        $phone=$input['phone'];
        $email=$input['email'];
        $afm=$input['afm'];
        $amka=$input['amka'];                           //egrafi ton stoixion ston pinaka me mysqli kai blind parametres
        $credit_cart=$input['credit_cart'];
        $date=$input['expiration_date'];
        $addres=$input['Holder_address'];
        $comment=$input['comment'];
        global $mysqli;
        $sql = "INSERT INTO `registers`(`name`,`name_f`, `age`, `phone`, `email`, `afm`, `amka`, `credit_cart`, `date`, `addres`, `comment`) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
	    $st2 = $mysqli->prepare($sql);
	    $st2->bind_param('sssssssssss',$name,$name_F,$age,$phone,$email,$afm,$amka,$credit_cart,$date,$addres,$comment);
       $st2->execute();
	
        
        
    }
    
    function handle_search($method,$input){
        if($method=='PUT') {
            show_search($input);
        } else {
            header('HTTP/1.1 405 Method Not Allowed');
        }
    }

    function handle_database($method){
        if($method=='PUT'){
            Create_database();
        }else if($method=='POST'){
            Create_table();
        }else if($method=='DELETE'){{
            delete_table();
        }}
    }
    
    function handle_records($method){
        if($method=='DELETE'){
            delete_records();
        }
    }
?>


