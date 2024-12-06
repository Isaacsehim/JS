let moyenne = prompt("Veuillez entrer la note que vous avez reçue au bac :");

if (moyenne <= 0 || moyenne > 20) {
    alert("Pfff... Même pas en mesure de rentrer un chiffre entre 0 et 20, tu l'as sûrement pas eu... #francetravailtmtc.");
} else if (moyenne == 0) {
    alert("Un rendez-vous sera programmé en raison de la moyenne.");
} else if (moyenne > 0 && moyenne <= 5) {
    alert("Trimestre insuffisant.");
} else if (moyenne > 5 && moyenne <= 10) {
    alert("Moyen trimestre.");
} else if (moyenne > 10 && moyenne <= 13) {
    alert("Bon trimestre.");
} else if (moyenne > 13 && moyenne <= 18) {
    alert("Excellent trimestre.");
} else if (moyenne > 18) {
    alert("Félicitations.");
}
