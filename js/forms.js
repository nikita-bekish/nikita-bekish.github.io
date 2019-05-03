function review(data) {
    var fd = new FormData(data);
    $.ajax({
        url: 'mail.php',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data) {
            console.log(data);
        }
    });
}