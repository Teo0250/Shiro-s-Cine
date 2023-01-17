$(document).ready(function() {
    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(00)00000-0000'
    })
    $('contato').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids();
            if(incorrectFields) {
                alert(`There ${incorrectFields} incorrect fields`)
            }
        }
    })
})