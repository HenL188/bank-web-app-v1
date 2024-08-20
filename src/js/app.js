var username = "username";
var password = "password";

function login() {
    var errorElement = document.getElementById("error1");
    var input = document.getElementById("username").value;
    var input2 = document.getElementById("password").value;
    if (input != username || input2 != password) {
        errorElement.textContent = "Incorrect password or username";
        errorElement.style.color = "red";
    }
    else {
        errorElement.textContent = "";
        window.location.href = "/account.html";
    }
};

function newLogin() {
    var newpassword = document.getElementById("newpassword").value;
    var repassword = document.getElementById("renterpassword").value;
    var username = document.getElementById("newusername").value;
    var e = document.getElementById("error");

    if (username === "") {
        e.textContent = "Invaild username";
        e.style.color = "red";
    }
    else if (newpassword === "" || repassword === "") {
        e.textContent = "Invaild password";
        e.style.color = "red";
    }
    else {
        e.textContent = "";
        if (newpassword != repassword) {
            //e.innerHTML = "<span style='color: red;'>" + "Passwords do not match</span>";
            e.textContent = "Passwords do not match";
            e.style.color = "red";

        }
        else {
            //e.innerHTML = "";
            e.textContent = "";
            username = document.getElementById("newusername").value;
            password = document.getElementById("newpassword").value;
            window.location.href = "/account.html";
        }
    }
};

function balance() {
    var balance = "0.00";
    var x = document.getElementById("balance");
    x.innerHTML = balance;
}

