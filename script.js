let champ = document.getElementById("champ");
let progressBar = document.querySelector(".progressBar span");
let progress = document.querySelector(".progress");

champ.addEventListener("change",(e)=>{
    let nombre ;
    nombre = parseInt(e.target.value);

    if (nombre > 100 || nombre < 0){
        progressBar.textContent = "0";
        progress.style.width = 0 +"%";
        champ.value = " ";
        alert("nombre incorrete")

    }else if(nombre > 0 && nombre < 50){
        progress.style.width = nombre+"%";
        progress.style.background = "red";

    } else if (nombre > 50 && nombre<70){
        progress.style.width = nombre+"%";
        progress.style.background = "yellow";

    }else if (nombre > 70 ){
        progress.style.width = nombre+"%";
        progress.style.background = "green";
    }

})