function validate() {
    var user = document.getElementById("user").value;
    var Password1 = document.getElementById("Password1").value;
    var Password2 = document.getElementById("Password2").value;
    var mobilenumber = document.getElementById("mobilenumber").value;
    var email = document.getElementById("email").value;

    if (user == null || user == "") {
        document.getElementById("uname").innerHTML = "Please fill the username field";
        return false;
        // } else {
        //     document.getElementById("uname").innerHTML = ""
        //     return false;
    }

    if ((user.length <= 2) || (user.length >= 30)) {
        document.getElementById("uname").innerHTML = "Username length must be beetween 3 and 30.";
        return false;
        // } else {
        //     document.getElementById("uname").innerHTML = "";
        //     return false;

    }

    if (!isNaN(user)) {
        document.getElementById("uname").innerHTML = "Only charecter is allowed.";
        return false;
        // } else {
        //     document.getElementById("uname").innerHTML = "";
        //     return false;

    }

    if (user == user.toLowerCase()) {
        document.getElementById("uname").innerHTML = "Please fill the username in caps only";
        return false;
        // } else {
        //     document.getElementById("uname").innerHTML = ""
        //     return false;
    }

    if (Password1 == null || Password1 == "") {
        document.getElementById("pass1").innerHTML = "Please fill the password field.";
        return false;
    }

    if ((Password1.length <= 5) || (Password1.length >= 20)) {
        document.getElementById("pass1").innerHTML = "Password length must be between 5 and 20.";
        return false;
    }

    if (Password1 != Password2) {
        document.getElementById("pass2").innerHTML = "Password are not matching enter the correct password.";
        return false;
    }

    if (Password2 == null || Password2 == "") {
        document.getElementById("pass2").innerHTML = "Please enter the confirm password.";
        return false;
    }


}