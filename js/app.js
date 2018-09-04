$(document).ready(function(){

    $('a').click(function(){
        var selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
    });

    $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $e = $('.e'),
    $inicio = $('.inicio'),
    $about = $('.about'),
    $skills = $('.skills'),
    $portafolio = $('.portafolio'),
    $contact = $('.contact'),

    $a.click(function(){
        $inicio.fadeIn();
        $about.fadeOut();
        $skills.fadeOut();
        $portafolio.fadeOut();
        $contact.fadeOut();
    });
    $b.click(function(){
        $about.fadeIn();
        $inicio.fadeOut();
        $skills.fadeOut();
        $portafolio.fadeOut();
        $contact.fadeOut();
    });
    $c.click(function(){
        $skills.fadeIn();
        $inicio.fadeOut();
        $about.fadeOut();
        $portafolio.fadeOut();
        $contact.fadeOut();
    });
    $d.click(function(){
        $portafolio.fadeIn();
        $inicio.fadeOut();
        $about.fadeOut();
        $skills.fadeOut();
        $contact.fadeOut();
    });
    $e.click(function(){
        $contact.fadeIn();
        $inicio.fadeOut();
        $about.fadeOut();
        $skills.fadeOut();
        $portafolio.fadeOut();
    });


    $('#btnSend').click(function(){

        var errores = '';

        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        } else{
            $('#names').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Correo ==============================
        if( $('#email').val() == '' ){
            errores += '<p>Ingrese un correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        } else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Escriba un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#d1d1d1")
        }

        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'+
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });

});