let nameinput=document.getElementById("nameinput");
let emailinput=document.getElementById("emailinput");

let password =document.getElementById("password");
let confirmation =document.getElementById("confirmation");

let signup =document.getElementById("signup");
let signform=document.getElementById("signform");

if (signform !== null) {

    signform.addEventListener("submit", function(event) {
        event.preventDefault();

          if (nameinput.value.trim() === "") {
        alert("Please enter your name");
        return;
    }

    if (emailinput.value.trim() === "") {
        alert("Please enter your email");
        return;
    }

    if (password.value.trim() === "") {
        alert("Please enter your password");
        return;
    }

    if (confirmation.value.trim() === "") {
        alert("Please confirm your password");
        return;
    }

    if (password.value !== confirmation.value) {
        alert("Passwords do not match");
        return;
    }

        let user = {
            name: nameinput.value.trim(),
            email: emailinput.value.trim(),
            password: password.value
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Sign Up Successful!");
    });

}


let loginform = document.getElementById("loginform");

let emaillogin = document.getElementById("emaillogin");
let passlogin = document.getElementById("passlogin");

if (loginform !== null) {

    loginform.addEventListener("submit", function(event) {
        event.preventDefault();

        if (emaillogin.value.trim() === "") {
            alert("Enter your email");
            return;
        }

        if (passlogin.value.trim() === "") {
            alert("Enter your password");
            return;
        }

        let savedUsers = localStorage.getItem("user");

        if (savedUsers === null) {
            alert("Please signup first");
            return;
        }

        let data = JSON.parse(savedUsers);

        if (data.email === emaillogin.value.trim() &&
            data.password === passlogin.value) {

            alert("Login Successful!");

        } else {
            alert("Invalid email or password");
        }

    });

}