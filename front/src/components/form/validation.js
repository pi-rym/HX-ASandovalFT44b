const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const exLongChar = /^(?=.{1,35}$).+/;
const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

function validation(data){
    let errors = {}

    if(!regexEmail.test(data.email)) errors.email = "El correo electrónico no es válido"
    if(!exLongChar.test(data.email)) errors.email = 'La longitud debe tener entre 1 y 35 caracteres';
    if(!regexPassword.test(data.password)) errors.password = 'La contraseña debe tener al menos un número y tener entre 6 y 10 caracteres'

    // * Opción 2:
    // if(data.email.length > 35) errors.email = 'el email debe tener menos de 35 caracteres'
    // if(data.password.length < 6 || data.password.length > 10) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'

    return errors;
}

export default validation;