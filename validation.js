
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const validation = (userData) =>{
    let errors ={}

    if(!regexEmail.test(userData.email)){
        errors.email = " email no valido "
    }
   if(!userData.email){
    errors.email = " Este campo no puede estar vacido"
   }
   if(userData.email.length >35){
    errors.email = " Superaste los 35 caracteres"
   }
   if(!userData.password.match(/\d/)){
    errors.password = "Debes agregar minimo un numero"
   }
   if(userData.password.length < 6 || userData.password.length > 10 ){
    errors.password = " La contraseña debe contener entre 6 y 10 caracteres"
   }
   return errors
}
export default validation