const inputBox = document.querySelector("input");
const btn = document.querySelector("button");
const regex = /\S+@\S+\.\S+/;
const invalidEmail = document.querySelector(".invalid-email");
const emptyEmail = document.querySelector(".empty-email");
const checkEmail = document.querySelector(".email-validation");


btn.addEventListener("click", function() {
    let input = document.querySelector("input").value;
    if (input == "") {
         emptyEmail.classList.add("toggle-error"),
          inputBox.classList.add("toggle-border"),
          invalidEmail.classList.remove("toggle-error")
        } else if (input.match(regex)) {
            emptyEmail.classList.remove("toggle-error"),
          inputBox.classList.remove("toggle-border"),
          invalidEmail.classList.remove("toggle-error")
        } else if (!input.match(regex)) {
            invalidEmail.classList.add("toggle-error"),
            inputBox.classList.add("toggle-border"),
            emptyEmail.classList.remove("toggle-error")
        }
})

