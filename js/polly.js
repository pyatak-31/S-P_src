$(document).ready(function() {
    $('.active-polly').on('click', function() {
        $('.polly').show('slow');
    });
    $('.polly').on('click', function () {
        $('.polly').hide('slow');
    })
});