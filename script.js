let email = document.querySelector("#E-mail")
let password = document.querySelector("#password")
let button = document.querySelector('button')
let login = function(){
    if (email.value === "gomycode@gmail.com"&& password.value === "User"){
        document.querySelector(".case1").style.display = "none"
        document.querySelector(".case3").style.display = "flex"

    } else {
        document.querySelector(".fail").innerHTML= "Email or password incorrect !"  ;
        setTimeout ( () => {
            document.querySelector(".fail").innerHTML = "";
        },4000)
    }
}
button.addEventListener("click",login)