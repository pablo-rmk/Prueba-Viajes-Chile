$(function () {

    //Alerta
    $('#boton-enviar').click(function () {
        alert('Su solicitud ha sido recibida exitosamente. Muchas gracias por comunicarse con Viajes Chile.');
    });

    // Smooth Scroll
    $('.scroll').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        };
    });
    
    // Activar Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
});
