<?php 

function show_search($input){
    if($input['inp']=='afm'){
        global $mysqli;
	    $sql = "select * from registers where afm=?;";
	    $st = $mysqli->prepare($sql);
	    $st->bind_param('s',$input['word']);
	    $st->execute();
	    $res = $st->get_result();
	    header('Content-type: application/json');
	    print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
    }else if($input['inp']=='age'){
        global $mysqli;
        $sql = "select * from registers where age=?;";
        $st = $mysqli->prepare($sql);
        $st->bind_param('i',$input['word']);
        $st->execute();
        $res = $st->get_result();
        header('Content-type: application/json');
        print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
    }
}























?>