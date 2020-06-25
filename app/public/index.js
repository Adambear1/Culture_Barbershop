$(document).ready(() => {
    $('.carousel').carousel()
})

$('.submit').click(() => {
    $('.container-body').removeClass('animate__fadeIn')
    $('.container-body').addClass('animate__backOutRight')
    _firstName = $("#first_name").val().trim()
    _lastName = $('#last_name').val().trim()
    _phoneNumber = $('#phone_number').val().trim()
    _email = $('#email').val().trim()
    var _user = {
        firstName: _firstName,
        lastName: _lastName,
        phoneNumber: _phoneNumber,
        email: _email

    }
    setTimeout(() => {
        $('.container-body').addClass('animate__fadeIn')
        $('.container-body').removeClass('animate__backOutRight')
        fetch("/User", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                _user
            )
        }).then(results => res.json(results))
    }, 400)


})