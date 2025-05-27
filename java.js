 //ASGNACION 
 let precioPorKilo = 3.50; // Asignamos el precio de las fresas por kilo
 let cantidadFresasEnStock = 1000; // Cantidad total de fresas en gramos o unidades

//ICONCREMENTO - DECREMENTO
let cantidadEnCarrito = 2; // El cliente tiene 2 kilos de fresas en el carrito
cantidadEnCarrito++; // El cliente añade un kilo más, ahora tiene 3
console.log("Cantidad en el carrito:", cantidadEnCarrito); // Resultado: 3

let cajasVendidasHoy = 50;
cajasVendidasHoy--; // Se canceló una venta, decrementamos las cajas vendidas
console.log("Cajas vendidas hoy:", cajasVendidasHoy); // Resultado: 49

//LOGICOS
let esTemporadaAlta = true;
let hayExcedenteProduccion = false;

// ¿Hay oferta disponible? Sí, si es temporada alta Y hay excedente de producción
let hayOfertaEspecial = esTemporadaAlta && hayExcedenteProduccion;
console.log("¿Hay oferta especial (AND)?", hayOfertaEspecial); // Resultado: false (porque no hay excedente)

let clientePremium = true;
let compraMayorA50 = false;

// ¿El cliente recibe envío gratis? Sí, si es cliente Premium O su compra es mayor a $50
let envioGratis = clientePremium || compraMayorA50;
console.log("¿El cliente recibe envío gratis (OR)?", envioGratis); // Resultado: true (porque es cliente Premium)

//NEGACION
let stockBajo = false; // Por ahora, el stock no está bajo

// Si el stock NO está bajo, podemos mostrar el botón de "Añadir al carrito"
if (!stockBajo) {
    console.log("¡Stock suficiente! Puedes añadir al carrito.");
}

let productoNoDisponible = !stockBajo;
console.log("¿El producto no está disponible?", productoNoDisponible); // Resultado: false

//SIGNOS MATEMATICOS
let cantidadKilos = 2.5;
let precioPorKilo = 3.50;
let costoEnvio = 5.00;
let impuestoIVA = 0.10; // 10% de IVA

let subtotal = cantidadKilos * precioPorKilo; // Multiplicación
let totalConIVA = subtotal * (1 + impuestoIVA); // Suma y multiplicación
let precioFinal = totalConIVA + costoEnvio; // Suma

console.log("Subtotal:", subtotal.toFixed(2)); // Resultado: 8.75
console.log("Total con IVA:", totalConIVA.toFixed(2)); // Resultado: 9.63
console.log("Precio final con envío:", precioFinal.toFixed(2)); // Resultado: 14.63

let fresasPorCaja = 500; // gramos
let pesoTotalPedido = 2350; // gramos
let cajasCompletas = Math.floor(pesoTotalPedido / fresasPorCaja); // División
let gramosRestantes = pesoTotalPedido % fresasPorCaja; // Módulo (resto de la división)

console.log("Cajas completas necesarias:", cajasCompletas); // Resultado: 4
console.log("Gramos de fresas restantes:", gramosRestantes); // Resultado: 350

//RACIONALES
let valoracionPromedio = 4.7;
let precioActual = 4.25;
let precioOfertaLimite = 3.00;

// ¿La valoración es excelente?
if (valoracionPromedio > 4.5) { // Mayor que
    console.log("¡Producto con excelente valoración!");
}

// ¿El precio actual es igual al precio de oferta? (Comparación de valor)
if (precioActual == precioOfertaLimite) { // Igual a
    console.log("¡Precio de oferta alcanzado!");
}

// ¿El precio actual es menor o igual al precio de oferta límite?
if (precioActual <= precioOfertaLimite) { // Menor o igual que
    console.log("¡Aprovecha esta oferta por tiempo limitado!");
} else {
    console.log("El precio actual aún no es una oferta de liquidación.");
}

let tipoFresaA = "Albion";
let tipoFresaB = "Camarosa";

// ¿Son del mismo tipo de fresa?
if (tipoFresaA !== tipoFresaB) { // Distinto de (valor y tipo)
    console.log("Son diferentes variedades de fresas.");
}
//CADENAS DE TEXTO
console.log("\n--- Operaciones con Cadenas de Texto ---");

let nombreFresa = "FrESa ArOmAtIcA y DuLcE";
let descripcionCorta = "Una fresa jugosa, cultivada con amor.";
let slogan = "El sabor de la naturaleza";

// length: Obtener la longitud de la cadena
console.log(`Longitud del nombre de la fresa: ${nombreFresa.length} caracteres.`);

// + (Concatenación): Unir cadenas
let mensajeBienvenida = "¡Bienvenido a nuestra tienda de " + nombreFresa.toLowerCase() + "!";
console.log(mensajeBienvenida);

// concat(): Otra forma de unir cadenas
let mensajeDetalle = "Esta es nuestra mejor selección. ".concat(descripcionCorta).concat(" ¡Disfrútala!");
console.log(mensajeDetalle);

// toUpperCase(): Convertir a mayúsculas
console.log(`Nombre en mayúsculas: ${nombreFresa.toUpperCase()}`);

// toLowerCase(): Convertir a minúsculas
console.log(`Nombre en minúsculas: ${nombreFresa.toLowerCase()}`);

// charAt(): Obtener un caracter en una posición específica
console.log(`Primer caracter del slogan: ${slogan.charAt(0)}`);
console.log(`Décimo caracter de la descripción: ${descripcionCorta.charAt(9)}`); // Un espacio

// substring(): Extraer una parte de la cadena
console.log(`Extracto del nombre: ${nombreFresa.substring(0, 5)}`); // "FrESa"
console.log(`Parte final del slogan: ${slogan.substring(7)}`); // "la naturaleza"

// split(): Dividir una cadena en un arreglo de subcadenas
let tagsFresas = "fresa,organica,dulce,roja,natural";
let arregloTags = tagsFresas.split(",");
console.log("Tags de fresas (como arreglo):", arregloTags);
console.log("-----------------------------------------");'

//ARREGLOS
console.log("\n--- Operaciones con Arreglos ---");

let variedadesFresas = ["Albion", "Camarosa", "Chandler", "San Andreas"];
let comentariosClientes = ["Excelente sabor!", "Muy frescas.", "Llegaron un poco golpeadas.", "Perfectas para mermelada."];

// length: Obtener el número de elementos en el arreglo
console.log(`Número de variedades de fresas: ${variedadesFresas.length}`);

// concat(): Unir dos arreglos
let nuevasVariedades = ["Seascape", "Monterey"];
let todasLasVariedades = variedadesFresas.concat(nuevasVariedades);
console.log("Todas las variedades:", todasLasVariedades);

// join(): Unir todos los elementos de un arreglo en una cadena
console.log(`Variedades separadas por guiones: ${variedadesFresas.join(" - ")}`);

// pop(): Eliminar el último elemento del arreglo y devolverlo
let ultimoComentario = comentariosClientes.pop();
console.log(`Último comentario eliminado: "${ultimoComentario}"`);
console.log("Comentarios restantes:", comentariosClientes);

// push(): Añadir uno o más elementos al final del arreglo
comentariosClientes.push("¡Las recomiendo!", "Volveré a comprar.");
console.log("Comentarios actualizados (push):", comentariosClientes);

// shift(): Eliminar el primer elemento del arreglo y devolverlo
let primeraVariedad = variedadesFresas.shift();
console.log(`Primera variedad eliminada: "${primeraVariedad}"`);
console.log("Variedades restantes:", variedadesFresas);

// unshift(): Añadir uno o más elementos al principio del arreglo
variedadesFresas.unshift("Festival", "Sweet Charlie");
console.log("Variedades actualizadas (unshift):", variedadesFresas);

// reverse(): Invertir el orden de los elementos del arreglo
comentariosClientes.reverse();
console.log("Comentarios en orden inverso:", comentariosClientes);
console.log("-----------------------------------------");
