$(document).ready(function () {

    $("#phoneClient").mask("(99) 99999-9999");

    $('.addClientForm').submit(function (event) {

        $('.form-group').removeClass('has-error');
        $('.help-block').remove();

        var convertToMD5 = $('input[name=name]').val();
        var token = $.md5(convertToMD5);
        $('input[name="token"]').val(token);

        var formData = {
            'name'                  : $('input[name=name]').val(),
            'token'                 : $('input[name=token]').val(),
            'phone'                 : $('input[name=phone]').val(),
            'email'                 : $('input[name=email]').val(),
            'message'               : $('textarea[name=message]').val(),
            'config'                : $('select[name=config]').val(),
        };

        console.log(formData);


        $.ajax({
            type: 'POST',
            url: 'config/processGenerator.php',
            data: formData,
            dataType: 'json'
        })

            .done(function (data) {

                console.log(data);

                if (!data.success) {

                    if (data.errors.name) {
                        $('#name-group').addClass('has-error');
                        $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>');
                    }

                    if (data.errors.email) {
                        $('#email-group').addClass('has-error');
                        $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>');
                    }

                } else {

                    $('form').append('<div class="alert alert-success">' + data.successMessage + '</div>');
                    
                    var currentURL = document.URL.substr(0,document.URL.lastIndexOf('/'));
                    var scriptClientXML = '&lt;script&gt; var TalkToUsOnWhatsAppClientToken_JDeS = &quot;'+ token +'&quot;; (function() { var js, el; js = document.createElement(&quot;script&quot;); el = document.querySelector(&quot;html&quot;); js.src=&quot;'+ currentURL +'/TalkToUsOnWhatsApp_JDeS.js&quot;; el.insertBefore(js, el.childNodes[0]); })(); &lt;/script&gt;';
                    document.getElementById("scriptClient").innerHTML = scriptClientXML;
                }

            });
            event.preventDefault();
    });
    
});
