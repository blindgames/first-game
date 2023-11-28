const btn = document.getElementById("oyun");
const vid = document.getElementById("ses");
 const ac = document.getElementById("ac");
 const aci = document.getElementById("aci");
 const kgir = document.getElementById("k-gir")
function basla(){
    alert("    görme engelli kullanıcılar için özel yapım RPG oyunu dikkat çok eğlencelidir")
    vid.play();
    ac.style.display = "block";
}

function gir(){
    alert("Köye girdin!")
    aci.style.display = "block";

}
kgir.addEventListener("click",gir)
btn.addEventListener("click",basla)
