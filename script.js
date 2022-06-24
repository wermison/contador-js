let contar = 0
let number = document.querySelector(".contador");
document.querySelector(".contador").innerHTML = contar;


function diminuir() {
    contar--;
    document.querySelector(".contador").innerHTML = contar;
    if (contar < 0) {
        number.style.color = "red";
    }

    if (contar > 0) {
        number.style.color = "green";
    }

    if (contar == 0) {
        number.style.color ="black"
    }
}

function aumentar() {
    contar++;
    document.querySelector(".contador").innerHTML = contar;
    if (contar < 0) {
        number.style.color = "red";
    }

    if (contar > 0) {
        number.style.color = "green";
    }

    if (contar == 0) {
        number.style.color ="black"
    }
}

function zerar() {
    contar = 0;
    document.querySelector(".contador").innerHTML = contar;
    if (contar < 0) {
        number.style.color = "red";
    }

    if (contar > 0) {
        number.style.color = "green";
    }

    if (contar == 0) {
        number.style.color ="black"
    }
}

