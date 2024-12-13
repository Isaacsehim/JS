const couleurs = [
    "rgb(252,219,0)",
    "rgb(104,181,224)",
    "rgb(211,61,132)",
    "rgb(162,165,205)",
    "rgb(200,213,95)",
    "rgb(174,124,173)"
];
let couleurIndex = 0;

function ajouterPostit() {
    let titreInput = document.getElementById("titreInput");
    let texteInput = document.getElementById("texteInput");
    let postitsContainer = document.getElementById("postitsContainer");

    let titre = titreInput.value.trim();
    let texte = texteInput.value.trim();

    if (titre && texte) {
        let postit = document.createElement("div");
        postit.className = "postit";

        postit.style.backgroundColor = couleurs[couleurIndex];
        postit.style.setProperty('--rotation', Math.random().toFixed(2));

        couleurIndex = (couleurIndex + 1) % couleurs.length;

        postit.innerHTML = `
            <h3>${titre}</h3>
            <p>${texte}</p>
            <button class="supprimerPostit" onclick="supprimerUnPostit(this)">X</button>
        `;

        postitsContainer.appendChild(postit);

        titreInput.value = "";
        texteInput.value = "";
    } else {
        alert("Veuillez remplir les deux champs.");
    }
}

function effacerChamps() {
    document.getElementById("titreInput").value = "";
    document.getElementById("texteInput").value = "";
}

function supprimerUnPostit(button) {
    let postit = button.parentElement;
    postit.remove();
}
document.getElementById("postitsContainer").addEventListener("click", function (event) {
	const target = event.target.closest(".postit");
	if (!target) return;

	const isActive = target.classList.contains("active");

	document.querySelectorAll(".postit").forEach(postit => postit.classList.remove("active"));

	if (!isActive) {
		target.classList.add("active");

		const h3 = target.querySelector("h3");
		const p = target.querySelector("p");
		h3.contentEditable = true;
		p.contentEditable = true;

		if (!target.querySelector(".validerModifs")) {
			const validerButton = document.createElement("button");
			validerButton.textContent = "Valider";
			validerButton.className = "validerModifs";
			validerButton.style.cssText = `
				position: absolute;
				bottom: 10%;
				right: 10%;
				background-color: #43a047;
				color: white;
				border: none;
				padding: 0.5rem 1rem;
				cursor: pointer;
			`;
			validerButton.onclick = () => {
				h3.contentEditable = false;
				p.contentEditable = false;

				target.classList.remove("active");
				validerButton.remove();
			};
			target.appendChild(validerButton);
		}
	}
});