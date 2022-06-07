const submit = document.querySelector("button[type='submit'");
const password = document.querySelector("label[for='password'");
const passFieldOne = document.querySelector("#password");
const passFieldTwo = document.querySelector("#passwordConfirm");
submit.addEventListener("click", (e) => {
    if (passFieldOne.value !== passFieldTwo.value) {
        e.preventDefault();
        password.classList.add("error");
        passFieldOne.style.border = "1px solid red";
        passFieldTwo.style.border = "1px solid red";
    } else if (password.classList.contains("error")) {
        password.classList.remove("error");
        passFieldOne.style.border = "1px solid #E5E7EB;";
        passFieldTwo.style.border = "1px solid #E5E7EB;";
    }
});