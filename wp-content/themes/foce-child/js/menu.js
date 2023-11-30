jQuery(document).ready(function ($) {
    // Sélectionner tous les liens du menu
    let menuLinks = $('#menu a');

    // Parcourir chaque lien
    menuLinks.on('click', function (event) {
        // Empêcher le comportement de lien par défaut
        event.preventDefault();

        // Obtenir l'URL de l'ancre du lien
        let targetAnchor = $(this).attr('href');

        // Fermer le menu hamburger en supprimant la classe "toggled"
        $('#masthead').removeClass('toggled');
        $('.menu-toggle').removeClass('toggled'); // Désactive le bouton hamburger

        // Ajouter la classe "menu-display" au menu et retirer "toggled" de "site-animation" pour desactiver le menu burger
        $('#site-navigation').removeClass('toggled');

        // Faire défiler la page jusqu'à l'ancre correspondante avec une animation fluide
        $('html, body').animate({
            scrollTop: $(targetAnchor).offset().top
        }, 1000, function () {
            // La fonction de rappel est appelée après l'animation de défilement
            // Réinitialisation de l'affichage du menu pour revenir à son état d'origine
            $('#menu').removeClass('menu-display');
        });
    });
});
