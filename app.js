const email = document.getElementById("email");
const error = document.getElementById("error");
const small = document.getElementById("small");

handleclick = event => {
    event.preventDefault();
    const input = email.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!input.match(emailRegex)) {
        error.classList.add("d-block");
        small.classList.add("d-block");
    } else {
        error.classList.remove("d-block");
        small.classList.remove("d-block");
    }
}