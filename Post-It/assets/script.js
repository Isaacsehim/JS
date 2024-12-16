const couleurs = [
    "rgb(252,219,0)",
    "rgb(104,181,224)",
    "rgb(211,61,132)",
    "rgb(162,165,205)",
    "rgb(200,213,95)",
    "rgb(174,124,173)"
];
let couleurIndex = 0;

// Fonction pour ajouter un post-it
function ajouterPostit() {
    const titreInput = document.getElementById("titreInput");
    const texteInput = document.getElementById("texteInput");
    const postitsContainer = document.getElementById("postitsContainer");

    const titre = titreInput.value.trim();
    const texte = texteInput.value.trim();

    if (titre && texte) {
        if (titre.length > 50 || texte.length > 300) {
            alert("Le titre ne doit pas dépasser 50 caractères et le texte 300 caractères.");
            return;
        }

        const postit = document.createElement("div");
        postit.className = "postit";
        postit.style.backgroundColor = couleurs[couleurIndex];
        postit.style.setProperty('--rotation', Math.random().toFixed(2));
        couleurIndex = (couleurIndex + 1) % couleurs.length;

        const h3 = document.createElement("h3");
        h3.textContent = titre;

        const p = document.createElement("p");
        p.textContent = texte;

        const supprimerButton = document.createElement("button");
        supprimerButton.className = "supprimerPostit";
        supprimerButton.textContent = "X";
        supprimerButton.setAttribute("aria-label", "Supprimer le post-it");
        supprimerButton.onclick = () => postit.remove();

        postit.appendChild(h3);
        postit.appendChild(p);
        postit.appendChild(supprimerButton);
        postitsContainer.appendChild(postit);

        titreInput.value = "";
        texteInput.value = "";
    } else {
        alert("Veuillez remplir les deux champs.");
    }
}

// Fonction pour effacer les champs de saisie
function effacerChamps() {
    document.getElementById("titreInput").value = "";
    document.getElementById("texteInput").value = "";
}

document.getElementById("postitsContainer").addEventListener("click", function (event) {
    const target = event.target.closest(".postit");
    if (!target) return;

    const isActive = target.classList.contains("active");

	const postits = document.getElementsByClassName("postit");
	for (let i = 0; i < postits.length; i++) {
		postits[i].classList.remove("active");
		const validerButton = postits[i].getElementsByClassName("validerModifs")[0];
		if (validerButton) {
			validerButton.remove();
		}
	}

    if (!isActive) {
        target.classList.add("active");

        const h3 = target.querySelector("h3");
        const p = target.querySelector("p");
        h3.contentEditable = true;
        p.contentEditable = true;

        const validerButton = document.createElement("button");
        validerButton.textContent = "Valider";
        validerButton.className = "validerModifs";
        validerButton.onclick = () => {
            h3.contentEditable = false;
            p.contentEditable = false;
            target.classList.remove("active");
            validerButton.remove();
        };
        target.appendChild(validerButton);
    }
});
