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

let enter=(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment)=>{
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
    contentType: 'application/json',
    data: JSON.stringify( {word:word, inp:inp}),
    success: fill_box_with_data});
}

let fill_box_with_data=(data)=>{
    console.log(data[0]);
    let name=data[0]['name']
    let name_F=data[0]['name_f']
    let age=data[0]['age']
    let phone=data[0]['phone']
    let email=data[0]['email']
    let afm=data[0]['afm']
    let amka=data[0]['amka']
    let credit_cart=data[0]['credit_cart']
    let expiration_date=data[0]['date']
    let Holder_address=data[0]['addres']
    let comment=data[0]['comment']
    enter(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment);
}