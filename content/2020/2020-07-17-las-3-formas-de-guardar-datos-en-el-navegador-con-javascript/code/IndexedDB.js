// Funciones de utilidad para convertir la API de listeners de IndexedDB a promesas
function toRequestPromise(request) {
    return new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(request.result);
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
  }
  
  function toTransactionPromise(database, transaction) {
    return new Promise((resolve, reject) => {
        const unlisten = () => {
            transaction.removeEventListener('success', success);
            transaction.removeEventListener('error', error);
        };
        const success = (e) => {
            resolve(database, e);
            unlisten();
        };
        const error = (e) => {
            reject(database, e);
            unlisten();
        };
        transaction.addEventListener('complete', success);
        transaction.addEventListener('error', error);
    });
  }

// Abrir una base de datos
var request = indexedDB.open('database', 1);

// Crear los stores de la base de datos y los índices
request.onupgradeneeded = function(e) {
    const database = e.target.result;

    // Crear un objectStore y un índice
    const objectStore = database.createObjectStore("store", { keyPath: "id" });
    objectStore.createIndex('dni', 'dni', {unique: false});

    console.log('database created');
};

toRequestPromise(request).then(function(database) {
    // Eliminar todos los datos de un store
    var transaction = database.transaction('store', 'readwrite');
    var store = transaction.objectStore('store');
    store.clear();
    return toTransactionPromise(database, transaction);
}).then(function(database) {
    // Insertar datos
    var transaction = database.transaction('store', 'readwrite');
    var store = transaction.objectStore('store');
    var item = { id: 1, name: 'picodotdev', dni: '00000000A' };
    store.add(item);
    return toTransactionPromise(database, transaction);
}).then(function(database, e) {
    // Obtener datos de un store
    var transaction = database.transaction('store', 'readonly');
    var store = transaction.objectStore('store');
    store.get(1);
    return toTransactionPromise(database, transaction);
}).then(function(database, e) {
    // Obtener datos de un store por índice
    var transaction = database.transaction('store', 'readonly');
    var store = transaction.objectStore('store');
    var index = store.index('dni');
    index.get('00000000A');
    return toTransactionPromise(database, transaction);
}).then(function(database, e) {
    // Modificar datos
    var transaction = database.transaction('store', 'readwrite');
    var store = transaction.objectStore('store');
    var item = { id: 1, name: 'picodotdev', dni: '11111111A' };
    store.put(item);
    return toTransactionPromise(database, transaction);
}).then(function(database, e) {
    // Eliminar datos
    var transaction = database.transaction('store', 'readwrite');
    var store = transaction.objectStore('store');
    store.delete(1);
    return toTransactionPromise(database, transaction);
});