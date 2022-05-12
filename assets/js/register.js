const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
let registerbtn=()=>{
    chek_name_F();
   chek_age();
   chek_phone();
   chek_email();
   chek_afm();                                           //otan patithi to koubi kali tis methodoys gia na kani tous elegxous
   chek_amka();
   chek_credit_cart()
   chek_date();
   chek_addres();
    let a=chek_name()&& chek_name_F()&&chek_age()&&chek_phone()&&chek_email()&&chek_afm()&&chek_amka()&&chek_credit_cart()&&chek_date()&&chek_addres();

   if(a){
    register();

   }
}

let clearbtn=()=>{
    document.getElementById('form_reg').reset();
    document.getElementById("name").style.backgroundColor = "white";
    document.getElementById("name_F").style.backgroundColor = "white";
    document.getElementById("age").style.backgroundColor = "white";
    document.getElementById("phone").style.backgroundColor = "white";
    document.getElementById("email").style.backgroundColor = "white";         //katharizi to input
    document.getElementById("afm").style.backgroundColor = "white";
    document.getElementById("amka").style.backgroundColor = "white";
    document.getElementById("credit_cart").style.backgroundColor = "white";
    document.getElementById("expiration_date").style.backgroundColor = "white";
    document.getElementById("Holder_address").style.backgroundColor = "white";
    
}
let chek_name=()=>{
    let name=document.querySelector('#name').value;
    if(name.length==0 ){
        document.getElementById("name").style.backgroundColor = "red";
        alert("Υποχραιωτικό όνομα και επίθετο");
        return false;
    }else if(specialChars.test(name)){
        alert('Απαγορεύονται τα σύμβολα και οι αριθμοί');
        document.getElementById("name").style.backgroundColor = "red";
        return false;
    }else if( hasWhiteSpace(name)!=1) {                                             
        alert('Πρέπει να έχει ένα κενό');
        document.getElementById("name").style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById("name").style.backgroundColor = "white";
        return true;
    }

    function hasWhiteSpace(s) {
        let a=0;
        for(let i=0; i<=s.length; i++){
            if(s[i]===" "){
                a++;
            }
        }
        return a;
      }
    }
    
    let chek_name_F=()=>{
        let name_F=document.querySelector('#name_F').value;
        if(specialChars.test(name_F)){
            alert('Απαγορεύονται τα σύμβολα και οι αριθμοί');
            document.getElementById("name_F").style.backgroundColor = "red";
            return false;
        }else{
            document.getElementById("name_F").style.backgroundColor = "white";
            return true;
        }
}

let chek_age=()=>{
    let age=document.querySelector('#age').value;
    if(age<18){
        alert('Πρέπρει να είσαι 18');
            document.getElementById("age").style.backgroundColor = "red";
            return false;
    }else{
        document.getElementById("age").style.backgroundColor = "white";
        return true;
    }
}

let chek_phone=()=>{
    const num=/[1234567890]/;
    let phone=document.querySelector('#phone').value;
    if(digits_count(phone)==0){
        alert('Τοποθετίστε το τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
        return false;
    }
    else if(!num.test(phone)){
        alert('Τοποθετίστε το τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
        return false;
    }else if(digits_count(phone)!=10){
        alert('Τοποθετίστε το δεκαεξαψήφιο τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById("phone").style.backgroundColor = "white";
        return true;
    }
}

function digits_count(num) {
    
    var count = 0;
    if (num >= 1) ++count;
  
    while (num / 10 >= 1) {
        num /= 10;
      ++count;
    }
  
    return count;
  }

  let chek_email=()=>{
    let email=document.querySelector('#email').value;
    if(email.length==0 ){
        document.getElementById("email").style.backgroundColor = "red";
        return false;
        alert("Υποχραιωτικό το email");
    }else if(email.length>64){
        document.getElementById("email").style.backgroundColor = "red";
        return false;
        alert("πολύ μεγάλο κείμενο");
    }else{
        document.getElementById("email").style.backgroundColor = "white";
        return true;
    }
  }
  let chek_afm=()=>{
    let afm=document.querySelector('#afm').value;
    const num=/[1234567890]/;
    if(digits_count(afm)==0){
        alert('Τοποθετίστε το afm σας');
        document.getElementById("afm").style.backgroundColor = "red";
        return false;
    }
    else if(!num.test(afm)){
        alert('Τοποθετίστε το αφμ σας');
        document.getElementById("afm").style.backgroundColor = "red";
        return false;
    }else if(digits_count(afm)!=9){
        alert('Τοποθετίστε τα 9 ψηφία του αφμ σας');
        document.getElementById("afm").style.backgroundColor = "red";
        return false;
    }else{
         document.getElementById("afm").style.backgroundColor = "white";
         return true;
        }
  }

  let chek_amka=()=>{
    const num=/[1234567890]/;
    let amka=document.querySelector('#amka').value;
    if(!num.test(amka) && amka.length!=0){
        alert('Τοποθετίστε το αμκα σας');
        document.getElementById("amka").style.backgroundColor = "red";
        return false;
    }else if(digits_count(amka)!=11 && amka.length!=0){
        alert('Τοποθετίστε τα 11 ψηφία του αμκα σας');
        document.getElementById("amka").style.backgroundColor = "red";
        return false;
    }else{
         document.getElementById("amka").style.backgroundColor = "white";
         return true;
        }
  }

  let chek_credit_cart=()=>{
    let credit_cart=document.querySelector('#credit_cart').value;
    const num=/[1234567890]/;
    if(digits_count(credit_cart)==0){
        alert('Τοποθετίστε τους αριθμούς της καρτας σας');
        document.getElementById("credit_cart").style.backgroundColor = "red";
        return false;
    }
    else if(!num.test(credit_cart)){
        alert('Τοποθετίστε τους αριθμούς της καρτας σας');
        document.getElementById("credit_cart").style.backgroundColor = "red";
        return false;
    }else if(digits_count(credit_cart)!=16){
        alert('Τοποθετίστε τα 16 ψηφία της καρτας σας');
        document.getElementById("credit_cart").style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById("credit_cart").style.backgroundColor = "white";
        return true;
    }
  }

  let chek_date = ()=>{
    let expiration_date=document.querySelector('#expiration_date').value;
    const d1 = new Date(expiration_date);
    const d2 = new Date();
    if(expiration_date.length==0){
        alert('Τοποθετίστε την ημερομηνία που λύγει η κάρτα');
        document.getElementById("expiration_date").style.backgroundColor = "red";
        return false;
    }
    else if(d1<d2){
        alert('Έχει λύξει η κάρτα');
        document.getElementById("expiration_date").style.backgroundColor = "red";
        return false;
    }else{
        document.getElementById("expiration_date").style.backgroundColor = "white";
        return true;
    }
  }

  let chek_addres=()=>{
    let Holder_address=document.querySelector('#Holder_address').value;
    if(typeof Holder_address.length==0){
        alert('Τοποθετίστε την διεύθυνση σας');
        document.getElementById("Holder_address").style.backgroundColor = "red";
        return false;
    }else if(Holder_address.length==0){
        alert('Τοποθετίστε την διεύθυνση σας');
        document.getElementById("Holder_address").style.backgroundColor = "red";
        return false;
    }else if( Holder_address/1==Holder_address){
        alert('Τοποθετίστε την διεύθυνση σας');
        document.getElementById("Holder_address").style.backgroundColor = "red";
        return false;
    }
    else{
        document.getElementById("Holder_address").style.backgroundColor = "white";
        return true;
    }
  }

  let chek_comment=()=>{
    let comment=document.querySelector('#comment').value;
    if(comment.length>250){
        alert('Γράψτε λιγότερα');
        document.getElementById("Holder_address").style.backgroundColor = "red";
        return false;
    }else{
        return true;
    }
  }


  let register=()=>{
    let name=document.querySelector('#name').value;
    let name_F=document.querySelector('#name_F').value;
    let age=document.querySelector('#age').value;
    let phone=document.querySelector('#phone').value;
    let email=document.querySelector('#email').value;
    let afm=document.querySelector('#afm').value;
    let amka=document.querySelector('#amka').value;
    let credit_cart=document.querySelector('#credit_cart').value;
    let expiration_date=document.querySelector('#expiration_date').value;
    let Holder_address=document.querySelector('#Holder_address').value;
    let comment=document.querySelector('#comment').value;
   
   
    $.ajax({url: "http://localhost/ergasia/php/main.php/register",
    method: 'POST',
    dataType: "json",
    contentType: 'application/json',
    data: JSON.stringify( {name: name, name_F: name_F,age: age,phone: phone,email: email,afm: afm, amka: amka,credit_cart: credit_cart,
        expiration_date:expiration_date,Holder_address:Holder_address,comment: comment}),                                               //ajax request thw jquery me ta stoixia pou thelo na peraso st vash       
    success: register_result(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment),
    error: register_error});


  }


  let register_error=(data)=>{
    // var x = data.responseJSON;
    // alert(x.errormesg);
  }
  

  let register_result=(name,name_F,age,phone,email,afm,amka,credit_cart,expiration_date,Holder_address,comment)=>{
      
      let s="";                                                          // an gini me apytixia to request kai ektelesti emfanizi ta stoixia pou valame
      $('#formSE').html(s);
      let text=` 
      <h1 class="headings1">Επιτυχής εγγραφή</h1>
      <div id="box">
      <p id="name" class="output">Όνομα + Επώνυμο:${name}</p>
      <p id="name_F"class="output">Πατρώνυμο: ${name_F}</p>
      <p id="age"class="output">Ηλικία: ${age}</p>
      <p id="phone"class="output">Τηλ: ${phone}</p>                                                           
      <p id="email"class="output">Email: ${email}</p>
      <p id="afm"class="output">ΑΦΜ: ${afm}</p>
      <p id="amka"class="output">ΑΜΚΑ: ${amka}</p>
      <p id="credit_cart"class="output">Αριθμός πιστωτικής κάρτας: ${credit_cart}</p>
      <p id="addres"class="output">Διεύθυνση κατόχου κάρτας: ${Holder_address}</p>
      <p id="date"class="output">μ/νία λήξης κάρτας: ${expiration_date}</p>
      <p id="comment"class="output">Σχόλια: ${comment}</p>

  </div> `
  $('#formSE').html(text);


  }