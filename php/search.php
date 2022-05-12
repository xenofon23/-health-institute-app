<?php 

function show_search($input){            //anazitisi sthn vasi me ta katalila erwtimata, ton inp inai me ti thelo na kano anaziti,me to name h age klp
    if($input['inp']=='afm'){
        global $mysqli;
	    $sql = "select * from registers where afm=?;";
	    $st = $mysqli->prepare($sql);
	    $st->bind_param('i',$input['word']);
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
    }else if($input['inp']=='name'){
        global $mysqli;
        $sql = "select * from `registers` where name like '%{$input['word']}%' ;";
        $st = $mysqli->prepare($sql);
        $st->execute();
        $res = $st->get_result();
        header('Content-type: application/json');
        print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
    }else if($input['inp']=='comment'){
        global $mysqli;
        $sql = "select * from `registers` where comment like '%{$input['word']}%' ;";
        $st = $mysqli->prepare($sql);
        $st->execute();
        $res = $st->get_result();
        header('Content-type: application/json');
        print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
    }else if($input['inp']=='all'){
        global $mysqli;
        $sql = "select * from `registers` where afm=? and age=? and name like '%{$input['name']}%' and comment like '%{$input['comment']}%' ;";
        $st = $mysqli->prepare($sql);
        $st->bind_param('ii',$input['afm'],$input['age']);
        $st->execute();
        $res = $st->get_result();
        header('Content-type: application/json');
        print json_encode($res->fetch_all(MYSQLI_ASSOC), JSON_PRETTY_PRINT);
       
    }
}






















?>