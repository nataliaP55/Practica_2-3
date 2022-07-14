//muestra los productos

// punto 1: Crear un array que contenga a los siguientes productos:

let productos = ["Sal fina", "Sal gruesa", "Pimienta", "Oregano", "Comino", "Canela", "Aceite de oliva", "Aceite"];

// comentario: agregué los productos al array Productos


//punto 2 - Mostrar los productos en consola como en la siguiente imagen:

function mostrarVector(vector){
    for (let i = 0; i < (productos.length); i++) {
        console.log("Producto N°",i+1);
        console.log(`[Posicion ${i}]`,productos[i]); 
    }
    
}

//comentario: con ayuda, pude mostrar los productos como pedía el ejercicio
   
// punto 3 - modifica la lista, quita y agrega en la posicion indicada

productos[3] = "Mayonesa";
productos[7] = "Aceituna";
mostrarVector(productos);
console.log ("----------fin------------")

//comentario: reemplacé los productos oregano x mayonesa y aceite x aceituna en la posición pedida.

// punto 4 -Insertar Dulce de leche al principio del array y Miel al final:

console.log ("----------inicio------------")
productos.push("Miel");
productos.unshift("Leche");
mostrarVector(productos);
console.log ("----------fin------------")

//comentario: agregué los productos miel y leche, uno al comienzo y otro al final de la lista.

//punto 5- Eliminar el producto Comino, Pimienta, Sal gruesa del array:

console.log ("----------inicio------------")
productos.splice(5,1);
productos.splice(2,2);
mostrarVector(productos);

//comentario: eliminé los 3 productos de la lista.