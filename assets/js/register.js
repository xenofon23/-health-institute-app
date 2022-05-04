const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;
let registerbtn=()=>{
    let afm=document.querySelector('#afm').value;
    let amka=document.querySelector('#amka').value;
    let credit_cart=document.querySelector('#credit_cart').value;
    let expiration_date=document.querySelector('#expiration_date').value;
    let comment=document.querySelector('#comment').value;
    // chek_name();
    // chek_name_F();
    // chek_age();
    // chek_phone();
    chek_email();
}

let chek_name=()=>{
    let name=document.querySelector('#name').value;
    if(name.length==0 ){
        document.getElementById("name").style.backgroundColor = "red";
        alert("Υποχραιωτικό όνομα και επίθετο");
    }else if(specialChars.test(name)){
        alert('Απαγορεύονται τα σύμβολα και οι αριθμοί');
        document.getElementById("name").style.backgroundColor = "red";
    }else if( hasWhiteSpace(name)!=1) {
        alert('Πρέπει να έχει ένα κενό');
        document.getElementById("name").style.backgroundColor = "red";
    }else{
        document.getElementById("name").style.backgroundColor = "white";
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
        }else{
            document.getElementById("name_F").style.backgroundColor = "white";
        }
}

let chek_age=()=>{
    let age=document.querySelector('#age').value;
    if(age<18){
        alert('Πρέπρει να είσαι 18');
            document.getElementById("age").style.backgroundColor = "red";
    }else{
        document.getElementById("age").style.backgroundColor = "white";
    }
}

let chek_phone=()=>{
    const num=/[1234567890]/;
    let phone=document.querySelector('#phone').value;
    if(digits_count()==0){
        alert('Τοποθετίστε το τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
    }
    else if(!num.test(phone)){
        alert('Τοποθετίστε το τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
    }else if(digits_count()!=10){
        alert('Τοποθετίστε το δεκαεξαψήφιο τηλέφωνο σας');
        document.getElementById("phone").style.backgroundColor = "red";
    }else{
        document.getElementById("phone").style.backgroundColor = "white";
    }
}

function digits_count() {
    let phone=document.querySelector('#phone').value;
    var count = 0;
    if (phone >= 1) ++count;
  
    while (phone / 10 >= 1) {
        phone /= 10;
      ++count;
    }
  
    return count;
  }

  let chek_email=()=>{
    let email=document.querySelector('#email').value;
    if(email.length==0 ){
        document.getElementById("email").style.backgroundColor = "red";
        alert("Υποχραιωτικό το email");
    }else if(email.length>64){
        document.getElementById("email").style.backgroundColor = "red";
        alert("πολύ μεγάλο κείμενο");
    }else{
        document.getElementById("email").style.backgroundColor = "white";
    }
  }
  let chek_afm=()=>{
        
  }