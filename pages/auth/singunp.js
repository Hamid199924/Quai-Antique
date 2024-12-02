//Inplémenter le js de ma page
const inputNom = document.getElementById("NomInput");
const inputPerNom = document.getElementById("PernomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword =document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputNom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPerNom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validateRequired(inputPassword);
    const passwordConfirmeOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOk && mailOk  && passwordOk && passwordConfirmeOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateConfirmationPassword(inputPwd, inputConfirmePwd){
    if(inputPwd.value == inputConfirmePwd.value){
        inputConfirmePwd.classlist.add("is-valid");
        inputConfirmePwd.classlist.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmePwd.classlist.remove("is-valid");
        inputConfirmePwd.classlist.add("is-invalid");
        return false;
    }
}

//Function permettant de valider l'email de l'utilisateur 
function ValidatePassword(input){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input .value;
    if(passwordUser.match(passwordRegex)){
        input.classlist.add("is-valid");
        input.classlist.remove("is-invalid");
        return true;
    } 
    else{
        input.classlist.remove("is-valid");
        input.classlist.add("is-invalid");
        return false;
    }

}

function validateMail(){
    //Regex pour valider l'email
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailRegex.test(mailUser)){
        input.classlist.add("is-valid");
        input.classlist.remove("is-invalid");
        return true;
    }
    else{
        input.classlist.remove("is-valid");
        input.classlist.add("is-invalid");
        return false;
    }
}

function validateRequired(input){
    if(input.value != ''){
        input.classlist.add("is-valid");
        input.classlist.remove("is-invalid");
        return true;
    }
    else{
        input.classlist.remove("is-valid");
        input.classlist.add("is-invalid");
        return false;
    }
}
