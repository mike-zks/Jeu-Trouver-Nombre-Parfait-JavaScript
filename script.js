// Etape 1 - Sélectionner nos éléments

let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');
let nombre = document.querySelector('#nombre');
let instructions = document.querySelector('#instructions');
let essai = 0;
let nombreChoisir = 0;

// Etape 2 - Cacher l'erreur

error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

let nombreParfait = Math.floor(Math.random() * 1001); 

// Etape 6 - Créer la fonction vérifier

function verifier(nb) {
    let instruction = document.createElement('div')
    if (nb < nombreParfait) {
        instruction.textContent = "#"+essai+" ("+nb+") C'est plus !"
        instruction.className  = "instruction plus";
    } else if (nb > nombreParfait) {
        instruction.textContent = "#"+essai+" ("+nb+") C'est moins !"
        instruction.className  = "instruction moins";
    } else {
        instruction.textContent = "#"+essai+" ("+nb+") Félicitation vous avez trouvez le nombre parfait !"
        instruction.className  = "instruction fini";
        nombre.disabled = true;
    }
    instructions.prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

nombre.addEventListener('keyup', () => {
    if(isNaN(nombre.value)) {
        error.style.display = "inline";
    }
    else{
        error.style.display = "none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(nombre.value) || nombre.value == '') {
        nombre.style.borderColor = "red";
    } else {
        nombre.style.borderColor = "silver";
        essai++;
        nombreChoisir = nombre.value;
        nombre.value = '';
        verifier(nombreChoisir)
    }
});