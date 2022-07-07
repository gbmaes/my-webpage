function sendEmail() {
var Fname = window.document.getElementById("fname").value 
var Lname = window.document.getElementById("lname").value
var Email = window.document.getElementById("email").value
var Subject = window.document.getElementById("subject").value
var Msg = window.document.getElementById("message").value

if (Fname.length < 2 || Lname.length < 2) {
    window.alert('Please verify your first and last name and try again.')
} else if (Msg.length < 2) {
    window.alert('Please write at least two letters in "Message".')
} 
}


