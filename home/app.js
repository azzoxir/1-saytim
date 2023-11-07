const form = document.querySelector("form")
const Email = document.querySelector("#email")
const Password = document.querySelector("#password")
const show = document.querySelector("#show")
const natija = document.querySelector(".natija")

form.addEventListener("submit", formSubmit)

function formSubmit(e) {
    e.preventDefault()
    console.log(Email.value);
    console.log(Password.value);
    let kirishemail = "ali@gmail.com"
    let kirishpassword = "123456"
    if (kirishemail === Email.value && kirishpassword === Password.value) {
        natija.innerHTML = "Saytga hush kelibsiz"
        setTimeout(() => {
           window.location.href = "" 
        }, timeout);
    } else{
        natija.innerHTML = "parol yoki email noto'g'ri"

        setTimeout(() => {
            natija.innerHTML = "https://www.youtube.com/"        
        }, 5000);
    }
    Email.value = ""
    Password.value = ""
}
show.addEventListener("change", function (){
    let checkbox = show.checked
    if (checkbox) {
        Password.type = "text"
    } else{
        Password.type = "password"
    }
})