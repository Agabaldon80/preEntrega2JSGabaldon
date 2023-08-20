/* Algoritmo para nota final de estudiantes ingresados */

/** FuNCIONES PARA SALUDOS Y DESPEDIDA */

// function mensaje(texto) {
//   switch (texto) {
//     case "saludo" :
//       alert (
//         "Hola"
//       );
//       break;
//     case "despedida" :
//       alert (
//         "Adios"
//       );
//       break;
//   }
// }

// mensaje("saludo");
// mensaje("despedida");




alert(
  "Bienvenido al calculador de notas Eleusis, el cual le permite determinar el promedio de los estudiantes en su curso y si el mismo ha obtenido una mención. Para conocer el sistema de notación y las posibles menciones, haga por favor click en 'aceptar'"
);

alert(
  "El sistema de notación es de 1 hasta 20 puntos. Si el promedio es de 18, 19 o 20 puntos, el curso logra la mención 'Sobresaliente'; de 16 0 17 puntos, logra la mención 'Excelente'; de 14 o 15 puntos logra la mención 'Correcto'. Una nota menor a 14 no obtiene mención. Haga click en 'aceptar' para continuar y siga las instrucciones"
);

function Notas() {
  let curso = prompt(
    "Ingrese el nombre del curso cuyo promedio desea calcular"
  );

  let estudiantes = parseInt(
    prompt(
      `Ingrese la cantidad de estudiantes en el curso ${curso} y haremos el promedio de sus notas. Atención: se espera un numero entero superior a 0`
    )
  );

  let sumaNotas = 0;

  while (estudiantes < 1 || isNaN(estudiantes)) {
    estudiantes = parseInt(
      prompt(
        `Ingrese la cantidad de estudiantes en el curso ${curso} y haremos el promedio de sus notas. Atención: se espera un numero entero superior a 0`
      )
    );
  }

  for (let i = 1; i <= estudiantes; i++) {
    let nota = parseInt(
      prompt(
        `Ingrese la nota del estudiante número ${i}. Recuerde que ésta debe ser un número entero entre 1 y 20`
      )
    );

    while (nota < 1 || nota > 20 || isNaN(nota)) {
      nota = parseInt(
        prompt(
          `Ingrese la nota del estudiante número ${i}. Recuerde que ésta debe ser un número entero entre 1 y 20`
        )
      );
    }

    sumaNotas += nota;
  }

  const promedioNota = sumaNotas / estudiantes;

  if (promedioNota <= 20 && promedioNota >= 18) {
    alert(
      `El promedio del curso ${curso} es ${promedioNota} puntos y logra la mención 'Sobresaliente'`
    );
  } else if (promedioNota <= 17 && promedioNota >= 16) {
    alert(
      `El promedio del curso ${curso} es ${promedioNota} puntos y logra la mención 'Excelente'`
    );
  } else if (promedioNota <= 15 && promedioNota >= 14) {
    alert(
      `El promedio del curso ${curso} es ${promedioNota} puntos y logra la mención 'Correcto'`
    );
  } else {
    alert(
      `El promedio del curso ${curso} es ${promedioNota} puntos y no obtiene mención`
    );
  }

  return Notas;
}

Notas();

alert("Gracias por usar el calculador de notas Eleusis. Vuelva pronto");