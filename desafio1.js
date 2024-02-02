let nomeHeroi = "Flash";
let pontosXp = 7089;
let nivelHeroi = "";

if (pontosXp <= 1000) {
    nivelHeroi = "Ferro."
}

else if (pontosXp <= 2000) {
    nivelHeroi = "Bronze."
}
    
else if (pontosXp <= 5000) {
    nivelHeroi = "Prata."
}

else if (pontosXp <= 7000) {
    nivelHeroi = "Ouro."
}

else if (pontosXp <= 8000) {
    nivelHeroi = "Platina."
}

else if (pontosXp <= 9000) {
    nivelHeroi = "Ascendente."
}

else if (pontosXp <= 10000) {
    nivelHeroi = "Imortal."
}

else {
    nivelHeroi = "Radiante."
}
   
console.log("O Herói '" + nomeHeroi + "' está no nível " + nivelHeroi);