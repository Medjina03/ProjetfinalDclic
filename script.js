const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.lien');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Insérer l'année actuelle dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Validation du formulaire de contact
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Veuillez entrer un email valide.");
        return;
    }

    alert("Merci pour votre message, " + nom + " !");
    form.reset();
});

// Fonction de validation d'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
