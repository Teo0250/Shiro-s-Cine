$(document).ready(function() {
    //document.querySelector('header button')
    //console.log($('header button'))

    //document.querySelector('header button').addEventListener('click', function(e){ //})
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})