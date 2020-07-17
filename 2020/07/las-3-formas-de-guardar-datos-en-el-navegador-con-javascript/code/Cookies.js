// Crear y modificar una cookie de nombre name
document.cookie = "name=value";

// Comprobar si existe una cookie de nombre name
const exists = document.cookie.split(';').some(function(item) {
   return item.trim().indexOf('name=') == 0;
});

// Obtener el valor de la cookie de nombre name
const value = document.cookie.split('; ').find(row => row.startsWith('name=')).split('=')[1];

// Eliminar la cookie cookie de nombre name
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 GMT";