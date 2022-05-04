const words = ['Το Ερευνητικό Πανεπιστημιακό Ινστιτούτο Υγείας Μητέρας, Παιδιού και Ιατρικής Ακριβείας (Ερευνητικό Πανεπιστημιακό Ινστιτούτο Μελέτης & Αντιμετώπισης Γενετικών & Κακοήθων Νοσημάτων Παιδικής Ηλικίας) εξυπηρετεί πολλές, μοναδικές ανάγκες όλης της χώρας στην προωθημένη μοριακή διάγνωση και στοχευμένη αντιμετώπιση νόσων της εμβρυϊκής, παιδικής και εφηβικής ηλικίας, επιτελεί έρευνα στην περιοχή της αναπτυξιακής βιολογίας και παθολογίας και εκπαιδεύει νέους επιστήμονες όλων των σχετικών κλάδων στην επιστημονική μέθοδο.']
let count =0;
let index=0;
let currentText="";
window.onload=type();
function type() {
    document.querySelector('.typewriter').innerText=words[count].slice(0,++index)
    if(index==words[count].length){
        index=0;
        return;
        

    }
    if(count>=words.length) count=0;
    setTimeout(type,50);
    
    
};

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

