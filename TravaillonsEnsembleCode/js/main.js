// Vérifie si un formulaire existe sur la page
const form = document.querySelector('form');

if (form) {
    // Simple validation du formulaire
    form.addEventListener('submit', function(event) {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Vérifie que tous les champs sont remplis
        if (name === '' || email === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            event.preventDefault(); // Empêche l'envoi du formulaire
        } else {
            alert('Message envoyé avec succès !');
        }
    });
}

// scroll
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
  
  // Fonction pour remonter en haut de la page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // pour un scroll fluide
    });
  }

  function getText(data) {
    if (typeof data === 'string') {
        return data; // Renvoie la chaîne directement
    } else {
        // Convertit en chaîne si ce n'est pas déjà une chaîne
        return JSON.stringify(data);
    }
}




