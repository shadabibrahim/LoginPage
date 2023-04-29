let main = document.querySelector("main");
let pSection = document.querySelector("section");
let status = document.querySelector("#status");

function singup() {
    main.style.display = "block";
    pSection.style.display = "none";
}
function profile() {
    main.style.display = "none";
    pSection.style.display = "block";


}
// signUp function
function save() {
    let fname = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPass").value;
    localStorage.setItem("name", fname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);
    document.getElementById("pName").value = localStorage.getItem("name");
    document.getElementById("pEmail").value = localStorage.getItem("email");
    document.getElementById("pPassword").value = localStorage.getItem("password");
    if (fname && email && password && confirmPassword) {
        if (password === confirmPassword) {
            status.innerText = "Successfully Signed Up!";
            status.style.color = "green";
        }
        else {
            status.innerText = "Password and confirm Password are not same";
            status.style.color = "yellow";
        }

    }

    else {
        status.innerText = "All the Fields are Mandatory";
        status.style.color = "red";
    }

}

function Signout() {
    localStorage.clear();
    location.reload(true);

}