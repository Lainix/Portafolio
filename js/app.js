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

});