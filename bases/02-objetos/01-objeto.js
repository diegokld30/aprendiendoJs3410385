//TIPO DE DATO PRIMITIVO
const nombreClienteHombre = "Diego Calderon" //string
let number1 = 26; //number
let boleano = true; //boleano

//TIPO DE DATO POR REFERENCIA.

let nombre = "Fernando";
let apellido = "Silva"
//declarando un objeto
let objPersona = {
    //propiedades
    nombre: nombre,
    apellido: apellido,
    edad: 35,
}

objPersona.edad = 40;
console.log(`El objeto tiene el nombre ${objPersona.nombre}, y el objeto tiene ${objPersona.edad} anios`)