const btn = document.getElementById("oyun");
const vid = document.getElementById("ses");
 const ac = document.getElementById("ac");
 const aci = document.getElementById("aci");
 const kgir = document.getElementById("k-gir")
 const ksev = document.getElementById("k-sev")
function basla(){
    alert("    görme engelli kullanıcılar için özel yapım RPG oyunu dikkat çok eğlencelidir")
    vid.play();
    ac.style.display = "block";
}

function gir(){
    alert("Köye girdin!")
    aci.style.display = "block";

}
function ksevs(){
    alert("Oyun bitti tebrikler kahraman!");
}
kgir.addEventListener("click",gir)
btn.addEventListener("click",basla)
ksev.addEventListener("click",ksevs)
