//Inplémenter le js de ma page

const inputNom = document.getElementById("NomInput");
const inputPerNom = document.getElementById("PernomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword =document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");

inputNom.addEventListener("keyup", validateForm);
inputNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPerNom);
}

function validateRequired(input){
    if(input.value != ''){
        input.classlist.add("is-valid");
        input.classlist.remove("is-invalid");
    }
    else{
        input.classlist.remove("is-valid");
        input.classlist.add("is-invalid");
    }
}
