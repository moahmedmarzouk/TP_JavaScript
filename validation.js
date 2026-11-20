const formContact = document.getElementById("formContact");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const pays = document.getElementById("pays");
const messageValidation = document.getElementById("messageValidation");

ormContact.addEventListener("submit", function (event) {
  event.preventDefault();

  let erreurs = [];
});
if (formContact) {
  formContact.addEventListener("submit", function (event) {
    event.preventDefault();
    let erreurs = [];
    if (nom.value.trim() === "") {
      erreurs.push("Le nom est obligatoire.");
    }

    if (prenom.value.trim() === "") {
      erreurs.push("Le prénom est obligatoire.");
    }

    const valeurEmail = email.value.trim();
    if (valeurEmail === "" || !valeurEmail.includes("@")) {
      erreurs.push("Veuillez saisir une adresse email valide contenant @.");
    }

    const valeurTel = telephone.value.trim();
    if (!/^[0-9]{8}$/.test(valeurTel)) {
      erreurs.push(
        "Le numéro de téléphone doit contenir exactement 8 chiffres."
      );
    }

    const genreSelectionne = document.querySelector(
      'input[name="genre"]:checked'
    );
    if (!genreSelectionne) {
      erreurs.push("Veuillez sélectionner un genre.");
    }

    const interetsSelectionnes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    if (interetsSelectionnes.length === 0) {
      erreurs.push("Veuillez choisir au moins un centre d'intérêt.");
    }

    if (pays.value === "") {
      erreurs.push("Veuillez sélectionner un pays.");
    }

    if (commentaire && commentaire.value.trim().length > 300) {
      erreurs.push("Le commentaire ne doit pas dépasser 300 caractères.");
    }

    if (erreurs.length > 0) {
      messageValidation.style.color = "red";
      messageValidation.innerHTML = erreurs.join("<br>");
    } else {
      messageValidation.style.color = "green";
      messageValidation.textContent =
        "Formulaire vérifié : vous pouvez poursuivre l'envoi.";
    }
  });
}
