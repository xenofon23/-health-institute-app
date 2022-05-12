$('#myInput1').keypress(function(e){
    let afm="afm"
    let key_afm = e.which;
    if(key_afm==13){
        result($('#myInput1').val(),afm);
    }
});
$('#myInput2').keypress(function(e){
    let age='age';
    let key_age = e.which;
    if(key_age==13){
        result($('#myInput2').val(),age);
    }
});
                                                    //an patithoun ta koubia kali tis kataliles methodous gia anazitisi
$('#myInput3').keypress(function(e){
    let name='name';
    let key_age = e.which;
    if(key_age==13){
        result($('#myInput3').val(),name);
    }
});
$('#myInput4').keypress(function(e){
    let comment='comment';
    let key_age = e.which;
    if(key_age==13){
        result($('#myInput4').val(),comment);
    }
});

let enter=(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment)=>{              //an ektelesti kai yparxi h anazitisi ta emfanizi
    let text=`<p id="name" class="output">Όνομα + Επώνυμο:${name}</p>
    <p id="name_F"class="output">Πατρώνυμο: ${name_F}</p>
    <p id="age"class="output">Ηλικία: ${age}</p>
    <p id="phone"class="output">Τηλ: ${phone}</p>
    <p id="email"class="output">Email: ${email}</p>
    <p id="afm"class="output">ΑΦΜ: ${afm}</p>
    <p id="amka"class="output">ΑΜΚΑ: ${amka}</p>
    <p id="credit_cart"class="output">Αριθμός πιστωτικής κάρτας: ${credit_cart}</p>
    <p id="addres"class="output">Διεύθυνση κατόχου κάρτας: ${Holder_address}</p>
    <p id="date"class="output">μ/νία λήξης κάρτας: ${expiration_date}</p>
    <p id="comment"class="output">Σχόλια: ${comment}</p>`
    $('#box2').html(text);
}


let result=(word,inp)=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/search",
    method: 'PUT',
    dataType: "json",
    contentType: 'application/json',                    //ajax request gia mia anazitisi
    data: JSON.stringify( {word:word, inp:inp}),
    success: fill_box_with_data});
}

let fill_box_with_data=(data)=>{
    if(data.length==0){
        alert('Δεν βρέθηκε');
    }else{
        
    let name="";
    let name_F="";
    let age="";
    let phone="";
    let email="";
    let afm="";
    let amka="";
    let credit_cart="";
    let expiration_date="";           //tropopoi ta string gia na ta emfaniso
    let Holder_address="";
    let comment="";
    for(let i=0; i<data.length; i++){
        name+=data[i]['name']+" ";
        name_F+=data[i]['name_f']+" ";
        age+=data[i]['age']+" ";
        phone+=data[i]['phone']+" ";
        email+=+data[i]['email']+" ";
        afm+=data[i]['afm']+" ";
        amka+=data[i]['amka']+" ";
        credit_cart+=data[i]['credit_cart']+" ";
        expiration_date+=data[i]['date']+" ";
        Holder_address+=data[i]['addres']+" ";
        comment+=data[i]['comment']+" ";
    }
    console.log(name);
    enter(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment);}
}

let result_with_all=()=>{
    $.ajax({url: "http://localhost/ergasia/php/main.php/search",
    method: 'PUT',
    dataType: "json",                //request gia anazitisi me ola tautoxrona
    contentType: 'application/json',
    data: JSON.stringify( {inp:'all',afm:$('#myInput1').val(), age:$('#myInput2').val(),name:$('#myInput3').val(),comment:$('#myInput4').val()}),
    success: fill_box_with_data});
}



