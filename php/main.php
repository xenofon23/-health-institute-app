<?php 
    require_once "../php/dbconnect.php";
    require_once "../php/search.php";

    $method = $_SERVER['REQUEST_METHOD'];
    $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
    $input = json_decode(file_get_contents('php://input'),true);

    switch ($r=array_shift($request)) {
        case 'register' : handle_register($method,$input);
                    break;
        case 'search' : handle_search($method,$input);
            
                break;
        default:  header("HTTP/1.1 404 Not Found");
        exit;
    }



    function handle_register($method,$input){
        $name=$input['name'];
        $name_F=$input['name_F'];
        $age=$input['age'];
        $phone=$input['phone'];
        $email=$input['email'];
        $afm=$input['afm'];
        $amka=$input['amka'];
        $credit_cart=$input['credit_cart'];
        $date=$input['expiration_date'];
        $addres=$input['Holder_address'];
        $comment=$input['comment'];
        global $mysqli;
        $sql = "INSERT INTO `registers`(`name`,`name_f`, `age`, `phone`, `email`, `afm`, `amka`, `credit_cart`, `date`, `addres`, `comment`) VALUES (?,?,?,?,?,?,?,?,?,?,?);";
	    $st2 = $mysqli->prepare($sql);
	    $st2->bind_param('sssssssssss',$name,$name_F,$age,$phone,$email,$afm,$amka,$credit_cart,$date,$addres,$comment);
	    $st2->execute();
        header('Content-type: application/json');
        echo json_encode(array('success'=>'true'));
    }
    
    function handle_search($method,$input){
        if($method=='PUT') {
            show_search($input);
        } else {
            header('HTTP/1.1 405 Method Not Allowed');
        }
    }

?>


