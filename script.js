var submit = document.getElementById("submit").addEventListener("click", check);
var output = document.getElementById("output");
var random_number = Math.floor(Math.random()*100);
const generate = document.getElementById("againgenerate");
var data = document.getElementById("data").value
var looknumber = document.getElementById("goster")
const shownumber = document.getElementById("shownumber")
const hidnumber = document.getElementById("numberhid")
hidnumber.addEventListener("click",sayiyigizle)
shownumber.addEventListener("click",sayiyigoster)
var audio = document.getElementById("audio")
function check(){
    let data = document.getElementById("data").value
    if(data > random_number){
        output.innerHTML = "Girilen sayı büyük!";
    }else if(data < random_number){
        output.innerHTML = "Girilen sayı küçük!";
    }
    else{
        output.innerHTML = "Bildiniz!";
        generate.hidden = false;
        generate.addEventListener("click",tekrardanolustur);
        audio.play()
    }
}
function tekrardanolustur() { 
    random_number = 0
    random_number = Math.floor(Math.random()*100)
    generate.hidden = true
    output.innerHTML = "boş"
    if(looknumber.innerHTML != ""){
        looknumber.innerHTML  = ""
        sayiyigizle()
    }
    check()
 }
 function sayiyigoster(){
    looknumber.innerHTML = random_number
    shownumber.hidden = true
    hidnumber.hidden = false
 }
 function sayiyigizle() { 
    looknumber.innerHTML = ""
    hidnumber.hidden = true
    shownumber.hidden = false
  }
