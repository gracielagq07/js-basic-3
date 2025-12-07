
//NÚMEROS

// 1. Suma
function sumar(a, b) {
  return a + b;
}

// 2. Resta
function restar(a, b) {
  return a - b;
}

// 3. Producto
function multiplicar(a, b) {
  return a * b;
}

// 4. División
function dividir(a, b) {
  if (b === 0) {
    throw new Error("División por cero no está permitida.");
  }
  return a / b;
}

// 5. Potencia
function potencia(base, exponente) {
  return Math.pow(base, exponente); 
}

// 6. Resto (Módulo)
function resto(a, b) {
  return a % b;
}

// 7. Raíz Cuadrada
function raizCuadrada(numero) {
  return Math.sqrt(numero);
}

// 8. Valor Absoluto
function valorAbsoluto(numero) {
  return Math.abs(numero);
}

// 9. Redondeo
function redondear(decimal) {
  return Math.round(decimal);
}

// 10. Número Aleatorio (entre 0 y 1)
function numeroAleatorio() {
  return Math.random();
}


// ✍️ FUNCIONES DE CADENAS DE TEXTO (STRINGS)

// 1. Concatenación
function concatenarCadenas(cadena1, cadena2) {
  return cadena1 + cadena2;
}

// 2. Longitud
function obtenerLongitud(cadena) {
  return cadena.length;
}

// 3. Mayúsculas
function aMayusculas(cadena) {
  return cadena.toUpperCase();
}

// 4. Minúsculas
function aMinusculas(cadena) {
  return cadena.toLowerCase();
}

// 5. Carácter en un Índice
function obtenerCaracter(cadena, indice) {
  return cadena.charAt(indice); 
}

// 6. Cadena Invertida
function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

// 7. Contar Carácter
function contarCaracter(cadena, caracter) {
  let contador = 0;
  for (const char of cadena) {
    if (char === caracter) {
      contador++;
    }
  }
  return contador;
}

// 8. Eliminar Espacios en Blanco
function eliminarEspacios(cadena) {
  return cadena.replace(/\s/g, '');
}

// 9. Palíndromo
function esPalindromo(cadena) {
  const cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');
  const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
  return cadenaLimpia === cadenaInvertida;
}

// 10. Capitalizar (Primera Letra en Mayúscula de cada palabra)
function capitalizarCadena(cadena) {
  return cadena.split(' ')
    .map(palabra => 
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    )
    .join(' ');
}

// 📋 FUNCIONES DE ARRAYS

// 1. Suma de Elementos
function sumaArray(arr) {
  return arr.reduce((acumulador, actual) => acumulador + actual, 0);
}

// 2. Promedio de Elementos
function promedioArray(arr) {
  if (arr.length === 0) return 0;
  const suma = arr.reduce((acumulador, actual) => acumulador + actual, 0);
  return suma / arr.length;
}

// 3. Array Ordenado Ascendente
function ordenarArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

// 4. Elementos Mayores que un Número
function elementosMayores(arr, numero) {
  return arr.filter(elemento => elemento > numero);
}

// 5. Concatenar Arrays
function concatenarArrays(arr1, arr2) {
  return arr1.concat(arr2); 
}

// 6. Número Máximo
function maximoArray(arr) {
  return Math.max(...arr);
}

// 7. Número Mínimo
function minimoArray(arr) {
  return Math.min(...arr);
}

// 8. Contar Elemento en Array
function contarElemento(arr, elemento) {
  return arr.filter(e => e === elemento).length;
}

// 9. Eliminar Duplicados
function eliminarDuplicados(arr) {
  return [...new Set(arr)];
}

// 10. Array Invertido
function invertirArray(arr) {
  return arr.slice().reverse();
}

// ⚙️ FUNCIONES DE OBJETOS LITERALES

// 1. Devolver el Valor de "nombre"
function obtenerNombre(objeto) {
  return objeto.nombre;
}

// 2. Actualizar la Propiedad "edad"
function actualizarEdad(objeto, nuevaEdad) {
  objeto.edad = nuevaEdad;
  return objeto;
}

// 3. Agregar una Nueva Propiedad
function agregarPropiedad(objeto, nombrePropiedad) {
  objeto[nombrePropiedad] = null;
  return objeto;
}

// 4. Eliminar una Propiedad
function eliminarPropiedad(objeto, nombrePropiedad) {
  delete objeto[nombrePropiedad];
  return objeto;
}

// 5. Contar Propiedades
function contarPropiedades(objeto) {
  return Object.keys(objeto).length;
}

// 6. Verificar Existencia de Propiedad
function tienePropiedad(objeto, nombrePropiedad) {
  return objeto.hasOwnProperty(nombrePropiedad);
}

// 7. Devolver Valores de Propiedades
function obtenerValores(objeto) {
  return Object.values(objeto);
}

// 8. Comparar Objetos
function sonIguales(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// 9. Copia de un Objeto
function copiarObjeto(objeto) {
  return { ...objeto };
}

// 10. Combinar Dos Objetos (Prioriza el Segundo)
function combinarObjetos(obj1, obj2) {
  return { ...obj1, ...obj2 };
}