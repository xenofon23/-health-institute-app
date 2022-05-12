

$( "#new_db" ).click(function() {
    Create_database();
});
$( "#new_table" ).click(function() {
    delete_table();
    Create_table();

});

$( "#delete_rec" ).click(function() {
    delete_records();

});


                                                                            //request gia thn dimiourgia thn diagrafi ths vasis kai tou pinaka

let Create_database=()=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/database",
    method: 'PUT',
    success: result_database});
}

let result_database=(data)=>{

}

let Create_table=()=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/database",
    method: 'POST',
    success: result_database});
}

delete_table=()=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/database",
    method: 'DELETE',
    success: result_database});
}


delete_records=()=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/delete_rec",
    method: 'DELETE',
    success: result_database});
}