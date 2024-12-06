let sexe = prompt("Rentrez votre sexe :", "femme / homme");
if (sexe !== "femme" && sexe !== "homme") {
    alert("Sexe mal renseigné.");
} else {
    let age = parseInt(prompt("Rentrez votre âge :", "1 - 120"));
    if (isNaN(age) || age < 1 || age > 120) {
        alert("Âge mal renseigné.");
    } else if (sexe === "femme" && age < 18) {
        alert("Femme mineure");
    } else if (sexe === "femme" && age >= 18) {
        alert("Femme majeure");
    } else if (sexe === "homme" && age < 18) {
        alert("Homme mineur");
    } else if (sexe === "homme" && age >= 18) {
        alert("Homme majeur");
    }
}
