// Héctor Fabián Rodríguez - DNI: 42097752

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
    "TAREA OPCIONAL N°1 - TIPOS DE DATOS Y VARIABLES\n\n" +
    "1 - Calculadora de Compras\n" +
    "2 - Ficha Personal\n\n" +
    "Seleccione una opción: ",
    (respuesta) => {

        let opcion = Number(respuesta);

        if (opcion === 1) {

            let precio1 = 1500;
            let precio2 = 2500;
            let precio3 = 3000;
            let dinero = 10000;

            let total = precio1 + precio2 + precio3;
            let vuelto = dinero - total;

            console.log("Ejercicio 1: Calculadora de Compras");
            console.log("Precio del producto 1:", precio1);
            console.log("Precio del producto 2:", precio2);
            console.log("Precio del producto 3:", precio3);
            console.log("Dinero disponible:", dinero);
            console.log("Total a pagar:", total);
            console.log("Vuelto:", vuelto);

        } else if (opcion === 2) {

            let nombre = "Fabián";
            let edad = 26;
            let horasProgramando = 10;
            let leGustaProgramar = true;
            let esMayorDeEdad = edad >= 18;

            console.log("Ejercicio 2: Ficha Personal");
            console.log("Nombre:", nombre);
            console.log("Edad:", edad);
            console.log("Horas de programación por semana:", horasProgramando);
            console.log("Le gusta programar:", leGustaProgramar);
            console.log("Es mayor de edad:", esMayorDeEdad);

        } else {

            console.log("Opción inválida");

        }

        rl.close();
    }
);
