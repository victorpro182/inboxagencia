$(document).ready(function() {
    // Mostrar u ocultar el botón dependiendo de la posición del usuario
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top-btn').fadeIn();
        } else {
            $('#back-to-top-btn').fadeOut();
        }
    });

    // Regresar al principio cuando se hace clic en el botón
    $('#back-to-top-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
