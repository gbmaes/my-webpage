
function sendEmail() {
var Fname = window.document.getElementById("fname").value 
var Lname = window.document.getElementById("lname").value
var Email = window.document.getElementById("email").value
var Subject = window.document.getElementById("subject").value
var Msg = window.document.getElementById("message").value

if (Fname.length < 2 || Lname.length < 2 || Email.length < 7 || Subject.length < 2 || Msg.length < 2) {
    window.alert('Please verify your information and try again.')
} else {
    window.alert('Your message was successfully sent and I will get back to you ASAP.')
}
}

