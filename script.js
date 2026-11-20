console.log("Bienvenue dans le TP JavaScript !");
console.error("Exemple de message d’erreur");
alert("mohamed ahmed marzouk G2.");

let nom = "Mohamed ahmed";
let age = 20;
let ville = "sayada monastir";
const institut = "ISET mahdiya";

console.log(nom);
console.log(age);
console.log(ville);
console.log(institut);

console.log(typeof nom);
console.log(typeof age);
console.log(typeof institut);

let variableSansValeur;
console.log(typeof variableSansValeur);

let prix = "12";
let quantite = "3";
console.log(prix + quantite);
console.log(Number(prix) + Number(quantite));

let prixUnitaire = 12;
let qte = 3;
let total = prixUnitaire * qte;
console.log("Total :", total);

let a = 12;
let b = 3;
console.log("Addition + :", a + b);
console.log("Soustraction - :", a - b);
console.log("Multiplication * :", a * b);
console.log("Division / :", a / b);
console.log("Modulo % :", a % b);

console.log("total >= 30 :", total >= 30);
console.log("total === 36 :", total === 36);
console.log("total !== 36 :", total !== 36);

let bool = true;
let age1 = 19;
console.log("ET (bool && age1 >= 18) :", bool && age1 >= 18);
console.log("OU (!bool || age1 < 18) :", !bool || age1 < 18);
console.log("Negation (!bool) :", !bool);

function afficherMention(note) {
  let resultat;

  if (note < 0 || note > 20) {
    resultat = "Note invalide";
  } else if (note < 10) {
    resultat = "Non admis";
  } else if (note <= 13) {
    resultat = "Assez bien";
  } else if (note <= 16) {
    resultat = "Bien";
  } else {
    resultat = "Très bien";
  }

  console.log(`Note : ${note} -> ${resultat}`);
}

afficherMention(8);
afficherMention(12);
afficherMention(15);
afficherMention(18);
afficherMention(-2);
afficherMention(22);

let nombre = 10;
let texte = "10";
console.log("Avec ==  :", nombre == texte);
console.log("Avec === :", nombre === texte);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

let compteur = 1;
while (compteur <= 5) {
  console.log(compteur);
  compteur++;
}

for (let i = 1; i <= 5; i++) {
  console.log(`Étudiant numéro ${i}`);
}

function calculerTotal(prix, quantite) {
  return prix * quantite;
}

let resultat = calculerTotal(12, 3);
console.log(resultat);

function verifierAdmission(note) {
  return note >= 10;
}

function saluer(nom) {
  return `Bonjour ${nom}`;
}

console.log(verifierAdmission(13.5));
console.log(verifierAdmission(10));
console.log(verifierAdmission(8.5));

console.log(saluer("Mohamed"));
console.log(saluer("Amira"));
console.log(saluer("Youssef"));

const titre = document.getElementById("titre");
const message = document.getElementById("message");
const champNom = document.getElementById("nom");
const btnAfficher = document.getElementById("btnAfficher");
const btnTitre = document.querySelector("#btnTitre");
const zoneInfo = document.querySelector("#zoneInfo");
const apercu = document.querySelector("#apercu");

if (btnAfficher && champNom && message) {
  btnAfficher.addEventListener("click", function () {
    const valeurNom = champNom.value.trim();

    if (valeurNom === "") {
      message.textContent = "Veuillez saisir votre nom";
      message.classList.add("erreur");
    } else {
      message.textContent = "Bonjour " + valeurNom;
      message.classList.remove("erreur");
    }
  });
}

if (btnTitre && titre) {
  btnTitre.addEventListener("click", function () {
    titre.textContent = "Profil étudiant personnalisé";
    titre.style.color = "darkblue";
    titre.classList.toggle("encadre");
  });
}

if (zoneInfo) {
  zoneInfo.innerHTML =
    "<p><strong>Note :</strong> Cliquez sur les boutons pour tester le DOM.</p>";
}

if (champNom && apercu) {
  champNom.addEventListener("input", function () {
    if (champNom.value.trim() === "") {
      apercu.textContent = "En attente de saisie";
    } else {
      apercu.textContent = "Vous saisissez : " + champNom.value;
    }
  });
}

const texteApercu = document.querySelector("#texteApercu");
const checkGras = document.querySelector("#gras");
const checkItalique = document.querySelector("#italique");

if (checkGras && texteApercu) {
  checkGras.addEventListener("change", function () {
    texteApercu.style.fontWeight = checkGras.checked ? "bold" : "normal";
  });
}
