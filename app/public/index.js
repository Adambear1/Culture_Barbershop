$(document).ready(() => {
    $('.carousel').carousel()
})

$('.submit').click(() => {
    console.log(document.getElementById("first_name").value.length)
    console.log($("#last_name").length)
    console.log($("#phone_number").length)
    console.log($("#email").length)
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
    if (document.getElementById("first_name").value.length < 2) {
        $('#first_name').addClass("animate__shakeX")
        $('#first_name').addClass("warning")
        setTimeout(() => {
            $('#first_name').removeClass("animate__shakeX")
        }, 500)

    }
    if (document.getElementById("last_name").value.length < 2) {
        $('#last_name').addClass("animate__shakeX")
        $('#last_name').addClass("warning")
        setTimeout(() => {
            $('#last_name').removeClass("animate__shakeX")
        }, 500)
    }
    if (document.getElementById("phone_number").value.length < 2) {
        $('#phone_number').addClass("animate__shakeX")
        $('#phone_number').addClass("warning")

        setTimeout(() => {
            $('#phone_number').removeClass("animate__shakeX")
        }, 500)

    }
    if (document.getElementById("email").value.length < 2) {
        $('#email').addClass("animate__shakeX")
        $('#email').addClass("warning")
        setTimeout(() => {
            $('#email').removeClass("animate__shakeX")
        }, 500)

    } else {
        $('.container-body').removeClass('animate__fadeIn')
        $('.container-body').addClass('animate__backOutRight')
        // 
        fetch("/User", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                _user
            )
        }).then(res => {
            res.json()
            $("#first_name").val("")
            $("#first_name").removeClass("warning")
            $('#last_name').val("")
            $('#last_name').removeClass("warning")
            $('#phone_number').val("")
            $('#phone_number').removeClass("warning")
            $('#email').val("")
            $('#email').removeClass("warning")
        })
            .then(() => {
                setTimeout(() => {
                    $('.container-body').addClass('animate__fadeIn')
                    $('.container-body').removeClass('animate__backOutRight')
                    $.get("/User", response => {
                        console.log(response)
                        document.querySelector('.response').innerHTML += `${response.firstName}, your request has been submitted. Your barber will be contacting you shortly to book a time.`
                    })
                }, 400)
            })
    }
})

